import { dirname } from "path";
import { determineFilename } from "./determineFilename.js";

export function determineDirname(importUrl: string): string {
  return dirname(determineFilename(importUrl));
}
