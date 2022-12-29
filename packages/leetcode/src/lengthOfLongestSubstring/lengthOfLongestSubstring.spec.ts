import lengthOfLongestSubstring from './lengthOfLongestSubstring';

describe('length of longest substring', () => {
  it("'abcabcbb' returns 3", () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  it("'pwwkew' returns 3", () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

  it("'dvdf' returns 3", () => {
    expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
  });

  it("'bbb' returns 1", () => {
    expect(lengthOfLongestSubstring('bbb')).toEqual(1);
  });
});
