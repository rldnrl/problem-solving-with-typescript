/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const set = new Set(nums);

  let longest = 0;
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length)
    }
  }

  return longest;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutiveWithSort(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let answer = 0;
  let length = 0;
  const set = new Set(nums);
  const uniqueNums = [...set]

  for(let i = 1; i < uniqueNums.length - 1; i++) {
    if (uniqueNums[i] - uniqueNums[i - 1] === 1) {
      length++;
    } else {
      answer = Math.max(answer, length + 1);
      length = 0;
    }
  }

  return Math.max(answer, length + 1);
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutiveWithSort([100,4,200,1,3,2]));