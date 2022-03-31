/* eslint-disable no-prototype-builtins */
export default function twoSum(nums: number[], target: number) {
  const result: number[] = []
  const map: { [key: number]: number } = {}
  
  nums.forEach((element, index) => {
      map[element] = index
  })
  
  for (let i = 0; i < nums.length; i++) {
      const element = nums[i]
      result.push(i)
      if (map.hasOwnProperty(target - element) && map[target - element] !== i) {
          result.push(map[target - element])
          return result
      } else {
          result.pop()
      }
  }

  return result
}