export default function longestPalindrome(s: string) {
  let answer = "";
  let maxLength = 0;

  const expandAroundMiddle = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalindromeLength = right - left + 1;
      if (currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        answer = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i, i);
    expandAroundMiddle(i, i + 1);
  }

  return answer
}
