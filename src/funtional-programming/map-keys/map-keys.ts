export const mapKeys = <T>(
  record: Readonly<Record<string, T>>,
  transformer: (key: string) => string
) => {
  const result: Record<string, T> = {};
  const entries = Object.entries(record);

  for (const [key, value] of entries) {
    const mappedKey = transformer(key);
    result[mappedKey] = value;
  }

  return result;
};
