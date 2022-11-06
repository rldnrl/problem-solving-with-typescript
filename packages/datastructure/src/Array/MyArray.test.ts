import MyArray from "./MyArray";

describe('MyArray Test', () => {
  it('should push element', () => {
    const array = new MyArray()
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)

    expect(array.data).toStrictEqual({
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
    })
    expect(array.length).toBe(5)
  });

  it('should pop element', () => {
    const array = new MyArray()
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)

    const poppedElement = array.pop()

    expect(poppedElement).toBe(5)
    expect(array.length).toBe(4)
  });

  it('should has element', () => {
    const array = new MyArray()
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)

    expect(array.has(3)).toBe(true)
    expect(array.has(8)).toBe(false)
  });

  it('should be empty data', () => {
    const array = new MyArray()
    const array2 = new MyArray()
    array2.push(1)
    array2.push(2)
    array2.push(3)
    array2.push(4)
    array2.push(5)

    expect(array.isEmpty()).toBe(true)
    expect(array2.isEmpty()).toBe(false)
  });

  it('should insert element at index', () => {
    const array = new MyArray()
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)
    array.insertAt(100, 3)

    expect(array.data).toStrictEqual({
      0: 1,
      1: 2,
      2: 3,
      3: 100,
      4: 4,
      5: 5,
    })
  });

  it('should delete element at index', () => {
    const array = new MyArray()
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)
    array.deleteAt(2)

    expect(array.data).toStrictEqual({
      0: 1,
      1: 2,
      2: 4,
      3: 5,
    })
  });

  it('should find index of value', () => {
    const array = new MyArray()
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)

    expect(array.indexOf(3)).toBe(2)
    expect(array.indexOf(4)).toBe(3)
    expect(array.indexOf(100)).toBe(-1)
  });
});
