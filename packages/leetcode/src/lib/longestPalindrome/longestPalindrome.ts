export default function longestPalindrome(s: string) {
  let startIndex = 0;
  let maxLength = 1;

  const expandAroundMiddle = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalindromeLength = right - left + 1;
      if (currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        startIndex = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
}
