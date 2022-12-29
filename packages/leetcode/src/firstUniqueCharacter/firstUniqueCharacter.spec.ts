import firstUniqueCharacter from './firstUniqueCharacter'

describe('firstUniqueCharacter', function () {
  it('should success', function () {
    const s1 = 'leetcode'
    expect(firstUniqueCharacter(s1)).toBe(0)

    const s2 = 'loveleetcode'
    expect(firstUniqueCharacter(s2)).toBe(2)

    const s3 = 'aabb'
    expect(firstUniqueCharacter(s3)).toBe(-1)

    const s4 = "aadadaad"
    expect(firstUniqueCharacter(s4)).toBe(-1)
  });
});
