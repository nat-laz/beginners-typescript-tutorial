import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed"): string | undefined => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e: unknown) {
    //"instanceof" - type guard operator here is used to ensure that the caught exception e is an instance of the Error class before attempting to access its message property.
    if (e instanceof Error) {
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
