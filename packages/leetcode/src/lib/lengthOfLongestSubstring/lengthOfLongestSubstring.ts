export default function lengthOfLongestSubstring(s: string) {
  let windowCharMap: { [x: string]: number } = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

    if (windowCharMap[endChar] >= windowStart) {
      windowStart = windowCharMap[endChar] + 1;
    }

    windowCharMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  return maxLength;
}
