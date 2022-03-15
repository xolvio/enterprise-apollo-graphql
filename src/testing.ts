import { expect } from "@jest/globals";
import { readFile } from "@sanjo/read-file";
import { DocumentNode, parse as parseBase, Source } from "graphql";

export function parse(source: string | Source): DocumentNode {
  return parseBase(source, { noLocation: true });
}

export function expectASTToMatchGraphQL(
  actualAST: DocumentNode,
  expectedGraphQL: string | Source
): void {
  const expectedAST = parse(expectedGraphQL);
  expectASTToMatch(actualAST, expectedAST);
}

function expectASTToMatch(
  actualAST: DocumentNode,
  expectedAST: DocumentNode
): void {
  expect(actualAST).toMatchObject(expectedAST as any);
}

export async function expectGraphQLFileToMatch(
  filePath: string,
  expectedSource: string
): Promise<void> {
  const schema = await readFile(filePath);
  const ast = parse(schema);
  expectASTToMatchGraphQL(ast, expectedSource);
}
