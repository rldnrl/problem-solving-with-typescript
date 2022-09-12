import combination from "./combination";

describe('combination test', function () {
  it('should be success', function () {
    expect(combination(3, 2)).toStrictEqual([[1, 2], [1, 3], [2, 3]])
    expect(combination(4, 2)).toStrictEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
    expect(combination(3, 1)).toStrictEqual([[1], [2], [3]])
  });
});
