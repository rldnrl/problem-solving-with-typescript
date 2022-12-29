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

console.log(longestConsecutive([100,4,200,1,3,2]));