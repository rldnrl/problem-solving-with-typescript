const combination = (n: number, k: number) => {
  const res: number[][] = []

  const combi = (start: number, comb: number[]) => {
    if (comb.length === k) {
      res.push([...comb])
      return
    }

    for (let i = start + 1; i < n; i++) {
      comb.push(i)
      combi(i, comb)
      comb.pop()
    }
  }

  combi(-1, [])
  return res
}

export default combination
