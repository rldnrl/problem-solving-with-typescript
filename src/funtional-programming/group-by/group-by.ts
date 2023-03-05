export const groupBy = <T, K extends string>(
  array: readonly T[],
  selector: (element: T) => K
): Partial<Record<K, T[]>> => {
  const result: Partial<Record<K, T[]>> = {};

  for (const element of array) {
    const key = selector(element);
    const array = (result[key] ??= [] as T[]);
    array.push(element);
  }

  return result;
};
