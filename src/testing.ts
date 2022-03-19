import { expect } from "@jest/globals";
import { readFile } from "@sanjo/read-file";
import { DocumentNode, parse as parseBase, Source } from "graphql";

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
  actualfilePath: string,
  expectedPath: string
): Promise<void> {
  const actualSchema = await readFile(actualfilePath);
  const actualAst = parse(actualSchema);

  const expectedSchema = await readFile(expectedPath);
  const expectedAst = parse(expectedSchema);

  expectASTToMatch(actualAst, expectedAst);
}
