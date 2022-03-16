import { describe, test } from "@jest/globals";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { expectGraphQLFileToMatch } from "./testing.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe.skip("GraphQL schema", () => {
  test("how to test it", async () => {
    await expectGraphQLFileToMatch(
      path.join(__dirname, "example.gql"),
      `
        type Project {
          id: ID!
        }
      `
    );
  });
});
