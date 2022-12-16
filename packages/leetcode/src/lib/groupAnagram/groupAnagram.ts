export function groupAnagramWithSorting(strs: string[]): string[][] {
  const map: Map<string, string[]> = strs.reduce((prev, str) => {
    const sortedStr = str.split("").sort().join("")
    const values = prev.get(sortedStr) || []
    values.push(str)
    prev.set(sortedStr, values)
    return prev
  }, new Map())

  return [...map.values()]
}
