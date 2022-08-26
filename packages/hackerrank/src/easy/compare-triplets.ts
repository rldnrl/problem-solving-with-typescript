function compareTriplets(a: number[], b: number[]): number[] {
  const result = [0, 0];

  a.forEach((value, index) => {
    if (value > b[index]) {
      result[0]++;
    } else if (value < b[index]) {
      result[1]++;
    }
  });

  return result;
}
