import { describe, test } from "@jest/globals";
import { join } from "path";
import { expectGraphQLFileToMatch } from "./testing.js";
import { determineDirname } from "./utils/determineDirname.js";

const __dirname = determineDirname(import.meta.url);

describe.skip("GraphQL schema", () => {
  test("how to test it", async () => {
    await expectGraphQLFileToMatch(
      join(__dirname, "example.gql"),
      `
        type Project {
          id: ID!
        }
      `
    );
  });
});
