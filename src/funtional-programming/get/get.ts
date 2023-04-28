export const get = <T, K>(
  value: T,
  path: string,
  defaultValue: K | null = null
): K | null => {
  const segments = path.split(/[\.\[\]]/g);

  let current: any = value;
  for (const key of segments) {
    if (current === null) return defaultValue;
    if (current === undefined) return defaultValue;
    if (key.trim() === "") continue;

    current = current[key];
  }

  if (current === undefined) return defaultValue;

  return current;
};
