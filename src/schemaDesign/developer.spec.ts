import { describe, test } from "@jest/globals";
import { join } from "path";
import { expectGraphQLFilesToMatch } from "../testing.js";
import { determineDirname } from "../utils/determineDirname.js";

const __dirname = determineDirname(import.meta.url);

describe.skip("Schema design", () => {
  test("Developer type", async () => {
    await expectGraphQLFilesToMatch(
      join(__dirname, "developer.gql"),
      join(__dirname, "developer-complete.gql")
    );
  });
});
