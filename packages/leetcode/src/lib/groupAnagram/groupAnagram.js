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

console.log(groupAnagramWithSort(["eat","tea","tan","ate","nat","bat"]))
