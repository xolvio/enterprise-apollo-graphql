import { describe, test } from "@jest/globals";
import { join } from "path";
import { expectGraphQLFilesToMatch } from "../testing.js";
import { determineDirname } from "../utils/determineDirname.js";

const __dirname = determineDirname(import.meta.url);

describe("GraphQL schema", () => {
  test("Verify Developer Type", async () => {
    await expectGraphQLFilesToMatch(
      join(__dirname, "developer.gql"),
      join(__dirname, "developer-complete.gql")
    );
  });
});
