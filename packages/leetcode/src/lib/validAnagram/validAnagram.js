/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function validAnagramWithSort(s, t) {
  if (s.length !== t.length) return false;

  const sortedS = s.split("").sort().join("")
  const sortedT = t.split("").sort().join("")

  return sortedS === sortedT
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function validAnagramWithFrequency(s, t) {
  if (s.length !== t.length) return false

  const frequency = Array.from({ length: 26 }).fill(0)

  for (let i = 0; i < s.length; i++) {
    const charOfS = s[i]
    const charOfT = t[i]

    frequency[charOfS.charCodeAt(0) - 'a'.charCodeAt(0)]++
    frequency[charOfT.charCodeAt(0) - 'a'.charCodeAt(0)]--
  }

  for (const f of frequency) {
    if (f !== 0) {
      return false
    }
  }

  return true
}

console.log(validAnagramWithSort('anagram', 'nagaram'))
console.log(validAnagramWithFrequency('anagram', 'nagaram'))
console.log(validAnagramWithSort('rat', 'car'))
console.log(validAnagramWithFrequency('rat', 'car'))
