import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { sort } from "./sort.ts";

Deno.test("no mutation", () => {
  const array = ["a", "abc", "ba"];
  sort({ array, getter: (it) => it.length });

  assertEquals(array, ["a", "abc", "ba"]);
});

Deno.test("stable sort", () => {
  assertEquals(
    sort({
      array: [
        { id: 1, date: "February 1, 2022" },
        { id: 2, date: "December 17, 1995" },
        { id: 3, date: "June 12, 2012" },
        { id: 4, date: "December 17, 1995" },
        { id: 5, date: "June 12, 2012" },
      ],
      getter: (it) => new Date(it.date),
    }),
    [
      { id: 2, date: "December 17, 1995" },
      { id: 4, date: "December 17, 1995" },
      { id: 3, date: "June 12, 2012" },
      { id: 5, date: "June 12, 2012" },
      { id: 1, date: "February 1, 2022" },
    ]
  );

  assertEquals(
    sort({
      array: [
        { id: 1, date: "February 1, 2022" },
        { id: 2, date: "December 17, 1995" },
        { id: 3, date: "June 12, 2012" },
        { id: 4, date: "December 17, 1995" },
        { id: 5, date: "June 12, 2012" },
      ],
      getter: (it) => new Date(it.date),
      order: "asc",
    }),
    [
      { id: 1, date: "February 1, 2022" },
      { id: 3, date: "June 12, 2012" },
      { id: 5, date: "June 12, 2012" },
      { id: 2, date: "December 17, 1995" },
      { id: 4, date: "December 17, 1995" },
    ]
  );

  assertEquals(
    sort({
      array: [
        { id: 1, str: "c" },
        { id: 2, str: "a" },
        { id: 3, str: "b" },
        { id: 4, str: "a" },
        { id: 5, str: "b" },
      ],
      getter: (it) => it.str,
    }),
    [
      { id: 2, str: "a" },
      { id: 4, str: "a" },
      { id: 3, str: "b" },
      { id: 5, str: "b" },
      { id: 1, str: "c" },
    ]
  );

  assertEquals(
    sort({
      array: [
        { id: 1, str: "c" },
        { id: 2, str: "a" },
        { id: 3, str: "b" },
        { id: 4, str: "a" },
        { id: 5, str: "b" },
      ],
      getter: (it) => it.str,
      order: "asc",
    }),
    [
      { id: 1, str: "c" },
      { id: 3, str: "b" },
      { id: 5, str: "b" },
      { id: 2, str: "a" },
      { id: 4, str: "a" },
    ]
  );
});

Deno.test("special values", () => {
  assertEquals(
    sort({
      array: [
        1,
        Number.POSITIVE_INFINITY,
        2,
        Number.NEGATIVE_INFINITY,
        3,
        Number.NaN,
        4,
        Number.NaN,
      ],
      getter: (it) => it,
    }),
    [
      Number.NEGATIVE_INFINITY,
      1,
      2,
      3,
      4,
      Number.POSITIVE_INFINITY,
      Number.NaN,
      Number.NaN,
    ]
  );

  assertEquals(
    sort({
      array: [
        Number.NaN,
        1,
        Number.POSITIVE_INFINITY,
        Number.NaN,
        7,
        Number.NEGATIVE_INFINITY,
        Number.NaN,
        2,
        6,
        5,
        9,
      ],
      getter: (it) => it,
    }),
    [
      Number.NEGATIVE_INFINITY,
      1,
      2,
      5,
      6,
      7,
      9,
      Number.POSITIVE_INFINITY,
      Number.NaN,
      Number.NaN,
      Number.NaN,
    ]
  );

  const nanArray = [
    { id: 1, nan: Number.NaN },
    { id: 2, nan: Number.NaN },
    { id: 3, nan: Number.NaN },
    { id: 4, nan: Number.NaN },
  ];
  assertEquals(sort({ array: nanArray, getter: (it) => it.nan }), nanArray);
});
