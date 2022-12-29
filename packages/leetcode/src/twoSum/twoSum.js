/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const result = []
  const map = new Map()

  nums.forEach((num, index) => {
    map.set(num, index)
  })

  for (let i = 0; i < nums.length; i++) {
    result.push(i)
    if (map.has(target - nums[i]) && map.get(target - nums[i]) !== i) {
      result.push(map.get(target - nums[i]))
      return result
    } else {
      result.pop()
    }
  }

  return result
}

console.log(twoSum([2,7,11,15], 9))
