export function groupAnagramWithSorting(strs: string[]): string[][] {
  const map: Map<string, string[]> = strs.reduce((prev, str) => {
    const sortedStr = str.split("").sort().join("")
    if (prev.get(sortedStr)) {
      prev.get(sortedStr)!.push(str)
    } else {
      prev.set(sortedStr, [str])
    }
    return prev
  }, new Map<string, string[]>())

  return [...map.values()]
}
