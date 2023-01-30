/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  let answer = 0;
  const count = new Map();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const r = s[right];
    const countOfRight = count.get(r) || 0;
    count.set(r, countOfRight + 1);

    let maxValueInCount = Math.max(...count.values());

    while (right - left + 1 - maxValueInCount > k) {
      const l = s[left];
      const countOfLeft = count.get(l);
      count.set(l, countOfLeft - 1);
      left++;
    }

    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}