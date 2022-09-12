import combination2 from "./combination2";

describe('combination2 test', function () {
  it('should be success', function () {
    expect(combination2([1, 2, 3], 2)).toStrictEqual([[1, 2], [1, 3], [2, 3]])
    expect(combination2([3, 4, 5, 6], 3)).toStrictEqual([[3, 4, 5], [3, 4, 6], [3, 5, 6], [4, 5, 6]])
  });
});
