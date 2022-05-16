import isNull from './isNull';

describe('isNull', () => {
  it('should isNull Test', () => {
    expect(isNull(null)).toBe(true);
  });
});
