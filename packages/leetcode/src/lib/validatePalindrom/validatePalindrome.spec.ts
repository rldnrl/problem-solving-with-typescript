import validatePalindrome from './validatePalindrome';

describe('validate palindrome', () => {
  test("'A man, a plan, a canal: Panama' returns true", () => {
    expect(validatePalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  });

  test("'love' returns false", () => {
    expect(validatePalindrome('love')).toEqual(false);
  });

  test("'' returns true", () => {
    expect(validatePalindrome('')).toEqual(true);
  });

  test("'_a__' returns true", () => {
    expect(validatePalindrome('_a__')).toEqual(true);
  });
});
