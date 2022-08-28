function plusMinus(arr: number[]): void {
  // Write your code here
  const N = arr.length;

  let counts = arr.reduce(
    (prev, cur) => {
      if (cur < 0) {
        prev[0]++;
      }
      if (cur === 0) {
        prev[1]++;
      }
      if (cur > 0) {
        prev[2]++;
      }

      return prev;
    },
    [0, 0, 0]
  );

  console.log((counts[2] / N).toFixed(6));
  console.log((counts[0] / N).toFixed(6));
  console.log((counts[1] / N).toFixed(6));
}
