import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

//In TypeScript, new Set<string>() creates a new instance of a Set object. A Set is a built-in JavaScript object that allows you to store UNIQUE values of any type, whether primitive or object references. When using a Set with TypeScript, you can specify the type of the values it should contain by providing a type parameter inside the angle brackets (e.g., <string>).
const guitarists = new Set<string>() ;


guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
