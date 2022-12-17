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
  const map = strs.reduce((previousValue, currentValue) => {
    const frequency = Array.from({ length: 26 }).fill(0)
    for (const c of currentValue) {
      frequency[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    const key = frequency.map((count) => `#${count}`).join("")
    const values = previousValue.get(key) || []
    values.push(currentValue)
    previousValue.set(key, values)

    return previousValue
  }, new Map())

  return [...map.values()]
}

console.log(groupAnagramWithSort(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagramWithFrequency(["eat","tea","tan","ate","nat","bat"]))
