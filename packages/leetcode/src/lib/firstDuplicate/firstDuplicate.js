/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  // your code here
  const set = new Set();

  for (const s of str) {
    if (set.has(s)) {
      return s;
    }
    set.add(s);
  }

  return null;
}
