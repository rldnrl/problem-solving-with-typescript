export default function validatePalindrome(s: string) {
  const onlyCharacter = s.toLowerCase().replace(/[\W_]/g, '');

  let left = 0;
  let right = onlyCharacter.length - 1;

  while (left < right) {
    if (onlyCharacter[left] !== onlyCharacter[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
