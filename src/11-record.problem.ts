import { expect, it } from "vitest";

interface Cache {
  [id: string] : string;
}


const createCache = () => {
  //another solution will be:
  //Record<Keys, Type> Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
  //  const cache : Record<string, string> = {};
  const cache : Cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
