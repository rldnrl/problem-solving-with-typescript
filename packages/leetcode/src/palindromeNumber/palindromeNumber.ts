export default function isPalindrome(x: number) {
  if (x < 0) return false

  const stringX = x.toString().split('')
  const reversedStringX = [...stringX].reverse()

  return stringX.join() === reversedStringX.join()
};