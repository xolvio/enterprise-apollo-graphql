import { describe, expect, it } from "@jest/globals";
import { asyncResolver, resolver } from "./resolvers.js";

describe("resolver", () => {
  it("returns 1", () => {
    expect(resolver(null, null, null, null)).toEqual(1);
  });
});

describe("asyncResolver", () => {
  it("returns a promise which resolves to 1", () => {
    expect(asyncResolver(null, null, null, null)).resolves.toEqual(1);
  });
});
