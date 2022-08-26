/**
 * @example
 * - n = 4, (0, 3)
 * - n = 4, (1, 2), (1, 3)
 * - n = 4, (2, 1), (2, 2), (2, 3)
 */
function staircase(n: number): void {
  // Write your code here
  for (let row = 0; row < n; row++) {
    let result = '';
    for (let col = 0; col < n; col++) {
      if (n - (row + 1) <= col) {
        result += '#';
      } else {
        result += ' ';
      }
    }
    console.log(result);
  }
}
