export default function twoSum(nums: number[], target: number) {
  const result: number[] = []
  const map: Map<number, number> = new Map<number, number>()

  nums.forEach((element, index) => {
      map.set(element, index)
  })

  for (let i = 0; i < nums.length; i++) {
      const element = nums[i]
      result.push(i)
      if (map.has(target - element) && map.get(target - element) !== i) {
          result.push(map.get(target - element)!)
          return result
      } else {
          result.pop()
      }
  }

  return result
}

console.log(twoSum([2,7,11,15], 9))
