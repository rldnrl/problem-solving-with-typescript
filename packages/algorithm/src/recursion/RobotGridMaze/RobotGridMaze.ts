export default function computePath(m: number, n: number, maze: boolean[][], path: Set<[number, number]>): boolean {
  if (m < 0 || n < 0) {
    return false
  }

  if (maze[m][n]) {
    return false
  }

  if ((m === 0 && n === 0) || computePath(m - 1, n, maze, path) || computePath(m, n - 1, maze, path)) {
    path.add([m, n])
    return true
  }

  return false
}
