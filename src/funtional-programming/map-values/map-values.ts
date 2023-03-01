/**
 * transformer를 통해서 모든 value를 계산합니다.
 * 그리고 key에 계산된 value를 할당합니다.
 * 그 객체를 리턴합니다.
 */
export const mapValues = <T, O>(
  record: Readonly<Record<string, T>>,
  transformer: (value: T) => O
): Record<string, O> => {
  const result: Record<string, O> = {};
  const entries = Object.entries(record);

  for (const [key, value] of entries) {
    const mappedValue = transformer(value);
    result[key] = mappedValue;
  }

  return result;
};
