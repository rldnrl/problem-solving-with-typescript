const combination = (n: number, k: number) => {
  const res: number[][] = []

  const backtrack = (start: number, comb: number[]) => {
    if (comb.length === k) {
      res.push([...comb])
      return
    }

    for (let i = start; i < n + 1; i++) {
      comb.push(i)
      backtrack(i + 1, comb)
      comb.pop()
    }

  }
  backtrack(1, [])
  return res
}

export default combination
