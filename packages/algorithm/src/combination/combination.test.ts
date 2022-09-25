import combination from "./combination";

describe('combination test', function () {
  it('should be success', function () {
    expect(combination(3, 2)).toStrictEqual([[0, 1], [0, 2], [1, 2]])
    expect(combination(4, 2)).toStrictEqual([[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]])
    expect(combination(3, 1)).toStrictEqual([[0], [1], [2]])
  });
});
