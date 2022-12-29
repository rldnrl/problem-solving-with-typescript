/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequentElementsWithSort(nums, k) {
  const map = nums.reduce((prev, cur) => {
    const count = prev.get(cur) || 0
    prev.set(cur, count + 1)
    return prev
  }, new Map())

  const sortedArrayByMapValues = [...map.entries()]
  sortedArrayByMapValues.sort((a, b) => b[1] - a[1])

  const answer = []
  for (let i = 0; i < k; i++) {
    answer.push(sortedArrayByMapValues[i][0])
  }

  return answer
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequentElementsWithBucketSort(nums, k) {
  const size = nums.length
  const freq = Array.from({ length: size + 1 }).map(() => [])
  const map = new Map()

  for (const num of nums) {
    const count = map.get(num) || 0
    map.set(num, count + 1)
  }

  for (const [key, value] of map.entries()) {
    freq[value].push(key)
  }

  const answer = []
  for (let i = size; i >= 0; i--) {
    for (const f of freq[i]) {
      answer.push(f)
      if (answer.length === k) {
        return answer
      }
    }
  }
}


console.log(topKFrequentElementsWithSort([1,1,1,2,2,3], 2))
console.log(topKFrequentElementsWithBucketSort([1,1,1,2,2,3], 2))
console.log(topKFrequentElementsWithSort([1], 1))
console.log(topKFrequentElementsWithBucketSort([1], 1))
