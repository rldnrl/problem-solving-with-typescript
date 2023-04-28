import { FieldPath } from "../../types/types.ts";
import { isObject } from "../../utils/is-object.ts";
import { isArray } from "../../utils/is-array.ts";

export const keys = <TValue extends Record<string, unknown>>(
  value: TValue
): FieldPath<TValue>[] => {
  if (!value) return [];

  const getKeys = (nested: any, paths: string[]): string[] => {
    if (isObject(nested)) {
      return Object.entries(nested).flatMap(([k, v]) =>
        getKeys(v, [...paths, k])
      );
    }

    if (isArray(nested)) {
      return nested.flatMap((item, i) => getKeys(item, [...paths, `${i}`]));
    }

    return [paths.join(".")];
  };

  return getKeys(value, []) as FieldPath<TValue>[];
};
