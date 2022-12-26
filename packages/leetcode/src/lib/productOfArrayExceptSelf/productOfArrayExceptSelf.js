/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelfWithLeftAndRight(nums) {
  const size = nums.length;
  const left = Array.from({ length: size });
  const right = Array.from({ length: size });

  left[0] = 1;
  for (let i = 1; i < size; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  right[size - 1] = 1;
  for (let i = size - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  const answer = Array.from({ length: size });
  for (let i = 0; i < size; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function optimizeProductExceptSelfWithLeftAndRight(nums) {
  const size = nums.length;
  const answer = Array.from({ length: size });

  answer[0] = 1;
  for (let i = 1; i < size; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = size - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right = right * nums[i];
  }

  return answer;
}

console.log(productExceptSelfWithLeftAndRight([1,2,3,4]))
console.log(productExceptSelfWithLeftAndRight([-1,1,0,-3,3]))
console.log(optimizeProductExceptSelfWithLeftAndRight([1,2,3,4]))
console.log(optimizeProductExceptSelfWithLeftAndRight([-1,1,0,-3,3]))
