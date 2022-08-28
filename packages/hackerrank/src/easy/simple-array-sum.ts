function simpleArraySum(ar: number[]): number {
  // Write your code here
  return ar.reduce((prev, cur) => {
    prev += cur;
    return prev;
  }, 0);
}
