import isPalindrome from './palindromeNumber'

describe('isPalindrome Test', () => { 
  it('should be success', () => { 
    expect(isPalindrome(121)).toBeTruthy()
    expect(isPalindrome(-121)).toBeFalsy()
    expect(isPalindrome(10)).toBeFalsy()
   })
 })