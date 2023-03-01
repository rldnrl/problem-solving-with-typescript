import { mapValues } from "./map-values.ts";
import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";

const mapValuesTest = <T, O>(
  input: [Readonly<Record<string, T>>, (value: T) => O],
  expected: Record<string, O>
) => {
  const actual = mapValues(...input);
  assertEquals(actual, expected);
};

Deno.test("empty input", () => {
  mapValuesTest([{}, (it) => it], {});
});

Deno.test("falsy values", () => {
  mapValuesTest<number, null | undefined | string | boolean>(
    [
      {
        something: 0,
        yetanotherkey: 1,
        andonemore: 2,
        lastone: 3,
      },
      (it) => [null, undefined, "", false][it],
    ],
    {
      something: null,
      yetanotherkey: undefined,
      andonemore: "",
      lastone: false,
    }
  );
});

Deno.test("mappers", () => {
  mapValuesTest(
    [
      {
        a5ec: { name: "Mischa" },
        de4f: { name: "Kim" },
      },
      (value) => value.name,
    ],
    {
      a5ec: "Mischa",
      de4f: "Kim",
    }
  );

  mapValuesTest(
    [
      {
        FoodFile: "/home/deno/food.txt",
        CalendarFile: "/home/deno/weekend.cal",
      },
      (path) => path.slice(path.lastIndexOf(".")),
    ],
    {
      FoodFile: ".txt",
      CalendarFile: ".cal",
    }
  );
});
