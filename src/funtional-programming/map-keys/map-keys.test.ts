import { mapKeys } from "./map-keys.ts";
import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";

export const mapKeysTest = <T>(
  input: [Record<string, T>, (key: string) => string],
  expected: Record<string, T>
) => {
  const actual = mapKeys(...input);
  assertEquals(actual, expected);
};

Deno.test("no mutation", () => {
  const object = { a: 5, b: true };
  mapKeys(object, (key) => `${key}a`);

  assertEquals(object, { a: 5, b: true });
});

Deno.test("empty input", () => {
  mapKeysTest([{}, (key) => key], {});
});

Deno.test("identity", () => {
  mapKeysTest(
    [
      {
        foo: true,
        bar: "lorem",
        1: -5,
      },
      (it) => it,
    ],
    {
      foo: true,
      bar: "lorem",
      1: -5,
    }
  );
});

Deno.test("constant key", () => {
  mapKeysTest([{ foo: 5, "": [] }, () => "x"], { x: [] });
  mapKeysTest([{ foo: 5, "": {} }, () => "x"], { x: {} });
  mapKeysTest([{ "": 5 }, () => "x"], { x: 5 });
});

Deno.test("overlapping keys", () => {
  mapKeysTest(
    [
      {
        Anna: 22,
        Kim: 24,
        Karen: 33,
        Claudio: 11,
        Karl: 45,
      },
      (name) => name.charAt(0),
    ],
    {
      A: 22,
      K: 45,
      C: 11,
    }
  );

  mapKeysTest(
    [
      {
        ad04: "foo",
        ad28: "bar",
        "100f": "dino",
      },
      (it) => it.slice(0, 2),
    ],
    {
      ad: "bar",
      "10": "dino",
    }
  );
});

Deno.test("empty key", () => {
  mapKeysTest(
    [
      {
        ab: 22,
        a: 24,
        bcd: 33,
        d: 11,
      },
      (key) => key.slice(1),
    ],
    {
      b: 22,
      "": 11,
      cd: 33,
    }
  );
});

Deno.test("normal mapper", () => {
  mapKeysTest(
    [
      {
        "/home/deno/food.txt": "Plants, preferably fruit",
        "/home/deno/other-dinos.txt": "Noderaptor, Pythonoctorus",
      },
      (path) => path.split("/").slice(-1)[0],
    ],
    {
      "food.txt": "Plants, preferably fruit",
      "other-dinos.txt": "Noderaptor, Pythonoctorus",
    }
  );

  mapKeysTest(
    [
      {
        EUR: 1200,
        USD: 1417,
        JPY: 1563,
      },
      (currencyCode) =>
        ({ EUR: "Euro", USD: "US Dollar", JPY: "Japanese Yen" }[currencyCode] ??
        "_"),
    ],
    {
      Euro: 1200,
      "US Dollar": 1417,
      "Japanese Yen": 1563,
    }
  );

  const prefixWith = (prefix: string) => (key: string) => `${prefix}${key}`;
  mapKeysTest(
    [
      {
        x: 22,
        y: 8,
      },
      prefixWith("x"),
    ],
    {
      xx: 22,
      xy: 8,
    }
  );
});
