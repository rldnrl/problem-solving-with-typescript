import { groupBy } from "./group-by.ts";
import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";

const groupByTest = <T>(
  input: [Array<T>, (element: T) => string],
  expected: { [x: string]: Array<T> },
  message?: string
) => {
  const actual = groupBy(...input);
  assertEquals(actual, expected, message);
};

Deno.test("no mutation", () => {
  const array = [1, 2, 3, 4, 5];
  groupBy(array, () => "test");

  assertEquals(array, [1, 2, 3, 4, 5]);
});

Deno.test("empty input", () => {
  groupByTest([[], () => "a"], {});
});

Deno.test("empty key", () => {
  groupByTest([["Foo", "b"], (it) => it.charAt(1)], {
    o: ["Foo"],
    "": ["b"],
  });
});

Deno.test("groups", () => {
  groupByTest(
    [["Anna", "Marija", "Karl", "Arnold", "Martha"], (it) => it.charAt(0)],
    {
      A: ["Anna", "Arnold"],
      M: ["Marija", "Martha"],
      K: ["Karl"],
    }
  );
  groupByTest([[1.2, 2, 2.3, 6.3, 6.9, 6], (it) => Math.floor(it).toString()], {
    "1": [1.2],
    "2": [2, 2.3],
    "6": [6.3, 6.9, 6],
  });
  groupByTest(
    [
      [
        {
          name: "Marlin",
          source: "ocean",
        },
        {
          name: "Bass",
          source: "lake",
        },
        {
          name: "Trout",
          source: "lake",
        },
      ],
      (it) => it.source,
    ],
    {
      lake: [
        {
          name: "Bass",
          source: "lake",
        },
        {
          name: "Trout",
          source: "lake",
        },
      ],
      ocean: [
        {
          name: "Marlin",
          source: "ocean",
        },
      ],
    }
  );
});
