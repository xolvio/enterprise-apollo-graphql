import { describe, expect, test } from "@jest/globals";
import { readFile } from "@sanjo/read-file";
import globWithCallback from "glob";
import {
  basename,
  dirname,
  extname,
  join,
  normalize,
  relative,
  resolve,
  sep,
} from "path";
import posix from "path/posix";
import { fileURLToPath } from "url";
import { promisify } from "util";
import {
  determineCompleteFilePathFromActualFilePath,
  determineInitialFilePathFromActualFilePath,
} from "../testing.js";
import { asyncFilter } from "../utils/asyncFilter.js";
import { doesFileExist } from "../utils/doesFileExist.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const projectRootPath = resolve(__dirname, "../..");

const glob = promisify(globWithCallback);

const challengeStarterFilePaths = await asyncFilter(
  await glob(join(projectRootPath, "**/*.gql")),
  isChallengeStarterFile
);

describe("schema initial states", () => {
  for (const challengeStarterFilePath of challengeStarterFilePaths) {
    const initialFilePath = determineInitialFilePathFromActualFilePath(
      challengeStarterFilePath
    );
    test(
      `content of "${formatPath(challengeStarterFilePath)}" equals ` +
        `content of "${formatPath(initialFilePath)}"`,
      async () => {
        const initialContent = await readFile(initialFilePath);
        const challengerStarterContent = await readFile(
          challengeStarterFilePath
        );
        expect(challengerStarterContent).toEqual(initialContent);
      }
    );
  }
});

async function isChallengeStarterFile(filePath: string): Promise<boolean> {
  const extension = extname(filePath);
  const fileName = basename(filePath, extension);
  return (
    !fileName.endsWith("-initial") &&
    !fileName.endsWith("-complete") &&
    (await doesFileExist(
      determineInitialFilePathFromActualFilePath(filePath)
    )) &&
    (await doesFileExist(determineCompleteFilePathFromActualFilePath(filePath)))
  );
}

function formatPath(filePath: string): string {
  return toPosixPath(generateProjectRelativePath(filePath));
}

function generateProjectRelativePath(filePath: string): string {
  return relative(projectRootPath, filePath);
}

function toPosixPath(filePath: string): string {
  return normalize(filePath).replaceAll(sep, posix.sep);
}
