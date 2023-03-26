type SortProps<T> = {
  array: readonly T[];
  getter: (item: T) => string | number | Date;
  desc?: boolean;
};

const getDesc = (a: string | number | Date, b: string | number | Date) =>
  a > b ? 1 : a < b ? -1 : 0;

const getAsc = (a: string | number | Date, b: string | number | Date) =>
  a > b ? -1 : a < b ? 1 : 0;

export const sort = <T>({ array, getter, desc = true }: SortProps<T>) => {
  if (!array) return [];

  const len = array.length;
  const indexes = new Array<number>(len);
  const selectors = new Array<ReturnType<typeof getter> | null>(len);

  for (let i = 0; i < len; i++) {
    indexes[i] = i;
    const g = getter(array[i]);
    selectors[i] = Number.isNaN(g) ? null : g;
  }

  indexes.sort((ai, bi) => {
    const a = selectors[ai];
    const b = selectors[bi];

    if (a === null) return 1;
    if (b === null) return -1;

    if (desc) {
      return getDesc(a, b);
    } else {
      return getAsc(a, b);
    }
  });

  for (let i = 0; i < len; i++) {
    (indexes as unknown as T[])[i] = array[indexes[i]];
  }

  return indexes as unknown as T[];
};
