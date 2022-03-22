import { expect } from "@jest/globals";
import { readFile } from "@sanjo/read-file";
import { createVerificationRules } from "@xolvio/graphql-verification";
import { basename, dirname, extname, join } from "path";

export async function expectGraphQLFilesToMatchOrFileUntouched(
  actualPath: string,
  expectedPath: string
): Promise<void> {
  const actualSchema = await readFile(actualPath);
  const initialSchema = await readFile(
    determineInitialFilePathFromActualFilePath(actualPath)
  );

  if (actualSchema !== initialSchema) {
    await expectGraphQLCodeAndFileToMatch(actualSchema, expectedPath);
  }
}

export function determineInitialFilePathFromActualFilePath(
  actualFilePath: string
): string {
  return appendToFileName(actualFilePath, "-initial");
}

export function determineCompleteFilePathFromActualFilePath(
  actualFilePath: string
): string {
  return appendToFileName(actualFilePath, "-complete");
}

export function appendToFileName(filePath: string, suffix: string): string {
  const directoryPath = dirname(filePath);
  const extension = extname(filePath);
  const fileName = basename(filePath, extension);
  return join(directoryPath, `${fileName}${suffix}${extension}`);
}

export async function expectGraphQLCodeAndFileToMatch(
  actualCode: string,
  expectedPath: string
) {
  const expectedSchema = await readFile(expectedPath);
  const verificationRules = createVerificationRules(expectedSchema);

  expect(actualCode).toPassVerificationRules(verificationRules);
}
