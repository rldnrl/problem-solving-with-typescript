import longestPalindrome from './longestPalindrome';

describe('longest palindrome', () => {
  it("'cbbd' returns 'bb'", () => {
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });

  it("'abba' returns 'abba'", () => {
    expect(longestPalindrome('abba')).toEqual('abba');
  });

  it("'abacdfgdcaba' returns 'aba'", () => {
    expect(longestPalindrome('abacdfgdcaba')).toEqual('aba');
  });

  it("'a' returns 'a'", () => {
    expect(longestPalindrome('a')).toEqual('a');
  });
});
