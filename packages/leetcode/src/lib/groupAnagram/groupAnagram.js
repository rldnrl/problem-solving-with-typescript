/**
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagramWithSort(strs) {
  const map = strs.reduce((previousValue, currentValue) => {
    const sortedStr = currentValue.split("").sort().join("")

    const values = previousValue.get(sortedStr) || []
    values.push(currentValue)
    previousValue.set(sortedStr, values)

    return previousValue
  }, new Map())

  return [...map.values()]
}

/**
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagramWithFrequency(strs) {
  const map = new Map()

  strs.forEach((str) => {
    const frequency = Array.from({ length: 26 }).fill(0)
    for (const c of str) {
      frequency[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    const key = frequency.map((count) => `#${count}`).join("")
    const values = map.get(key) || []
    values.push(str)
    map.set(key, values)
  })

  return [...map.values()]
}

console.log(groupAnagramWithSort(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagramWithFrequency(["eat","tea","tan","ate","nat","bat"]))
