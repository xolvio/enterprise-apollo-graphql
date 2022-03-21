import { expect } from "@jest/globals";
import { readFile } from "@sanjo/read-file";
import { DocumentNode, parse as parseBase, Source } from "graphql";
import { createVerificationRules } from "@xolvio/graphql-verification";

export function parse(source: string | Source): DocumentNode {
  return parseBase(source, { noLocation: true });
}

function expectASTToMatch(
  actualAST: DocumentNode,
  expectedAST: DocumentNode
): void {
  expect(actualAST).toMatchObject(expectedAST as any);
}

export async function expectGraphQLFilesToMatch(
  actualPath: string,
  expectedPath: string
): Promise<void> {
  const actualSchema = await readFile(actualPath);

  const expectedSchema = await readFile(expectedPath);
  const verificationRules = createVerificationRules(expectedSchema);

  expect(actualSchema).toPassVerificationRules(verificationRules);
}
