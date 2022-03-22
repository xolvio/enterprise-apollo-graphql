import { describe, test } from "@jest/globals";
import { join } from "path";
import { expectGraphQLFilesToMatchOrFileUntouched } from "../testing.js";
import { determineDirname } from "../utils/determineDirname.js";

const __dirname = determineDirname(import.meta.url);

describe("Schema design", () => {
  test("Developer type", async () => {
    await expectGraphQLFilesToMatchOrFileUntouched(
      join(__dirname, "developer.gql"),
      join(__dirname, "developer-complete.gql")
    );
  });
});
