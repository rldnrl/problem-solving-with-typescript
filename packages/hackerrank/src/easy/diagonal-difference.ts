function diagonalDifference(arr: number[][]): number {
  // Write your code here
  const SIZE = arr.length;
  const LAST_INDEX = SIZE - 1;
  let rightSum = 0;
  let leftSum = 0;

  for (let i = 0; i < SIZE; i++) {
    rightSum += arr[i][i];

    for (let j = 0; j < SIZE; j++) {
      if (i + j === LAST_INDEX) {
        leftSum += arr[i][j];
      }
    }
  }

  return Math.abs(rightSum - leftSum);
}
