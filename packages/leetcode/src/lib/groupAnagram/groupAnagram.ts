/**
 * Time Complexity: O(n * klogk)
 * Space Complexity: O(n * k)
 */
function groupAnagramWithSorting(strs: string[]): string[][] {
  const map: Map<string, string[]> = strs.reduce((prev, str) => {
    const sortedStr = str.split("").sort().join("")

    const values = prev.get(sortedStr) || []
    values.push(str)
    prev.set(sortedStr, values)

    return prev
  }, new Map())

  return [...map.values()]
}

/**
 * Time Complexity: O(n * k)
 * Space Complexity: O(n)
 */
function groupAnagramWithFrequency(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map<string, string[]>()
  strs.forEach((str) => {
    const frequency: number[] = Array.from<number>({ length: 26 }).fill(0);
    for (const c of str) {
      frequency[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = frequency.map(count => `#${count}`).join("")
    const values = map.get(key) || []
    values.push(str)
    map.set(key, values)
  })

  return [...map.values()]
}

