import validatePalindrome from './validatePalindrome';

describe('validate palindrome', () => {
  it("'A man, a plan, a canal: Panama' returns true", () => {
    expect(validatePalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  });

  it("'love' returns false", () => {
    expect(validatePalindrome('love')).toEqual(false);
  });

  it("'' returns true", () => {
    expect(validatePalindrome('')).toEqual(true);
  });

  it("'_a__' returns true", () => {
    expect(validatePalindrome('_a__')).toEqual(true);
  });
});
