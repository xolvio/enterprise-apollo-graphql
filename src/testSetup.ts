import { expect } from "@jest/globals";
import * as matchers from "./matchers.js";

expect.extend(matchers);

declare module "expect/build/types.js" {
  interface Matchers<R> {
    toPassVerificationRules(verificationRules: any[]): R;
  }
}
