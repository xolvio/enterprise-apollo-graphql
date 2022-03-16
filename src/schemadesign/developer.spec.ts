import { describe, test } from "@jest/globals";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { expectGraphQLFilesToMatch } from "../testing.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("GraphQL schema", () => {
  test("Verify Developer Type", async () => {
    await expectGraphQLFilesToMatch(
      path.join(__dirname, "developer.gql"),
      path.join(__dirname, "developer-complete.gql")
    );
  });
});
