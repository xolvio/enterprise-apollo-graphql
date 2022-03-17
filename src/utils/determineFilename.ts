import { fileURLToPath } from "url";

export function determineFilename(importUrl: string): string {
  return fileURLToPath(importUrl);
}
