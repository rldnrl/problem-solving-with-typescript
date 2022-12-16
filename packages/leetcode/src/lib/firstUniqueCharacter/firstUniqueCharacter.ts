export default function firstUniqueCharacter(s: string) {
  const chars = new Map<string, number>();

  for (const element of s) {
    const count = chars.get(element) || 0
    chars.set(element, count + 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (chars.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}
