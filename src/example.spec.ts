import { describe, expect, test } from "@jest/globals";
import { readFile } from "@sanjo/read-file";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { parse } from "graphql";

const { objectContaining, arrayContaining } = expect;

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("GraphQL schema", () => {
  test("how to test it", async () => {
    const schema = await readFile(path.join(__dirname, "example.gql"));
    const ast = parse(schema);
    expect(ast).toMatchObject({
      definitions: [
        {
          kind: "ObjectTypeDefinition",
          name: {
            kind: "Name",
            value: "Project",
          },
          fields: [
            {
              kind: "FieldDefinition",
              name: {
                kind: "Name",
                value: "id",
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                  },
                },
              },
            },
          ],
        },
      ],
    });
  });
});