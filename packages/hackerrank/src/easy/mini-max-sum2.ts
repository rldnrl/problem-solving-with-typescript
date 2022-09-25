// Solve using combination.
function makeCombination(arr: number[], k: number) {
  if (k === 1) {
    return arr.map((element) => [element])
  }

  const result: number[][] = []

  arr.forEach((element, index) => {
    const smallerCombinations = makeCombination(arr.slice(index + 1), k - 1)

    smallerCombinations.forEach((smallerCombination) => {
      result.push([element].concat(smallerCombination))
    })
  })

  return result
}

function sum(arr: number[]) {
  return arr.reduce((prev, cur) => {
    prev += cur
    return prev;
  }, 0)
}

function miniMaxSum(arr: number[]): void {
  // Write your code here
  const sumArray = makeCombination(arr, 4).reduce((prev, cur) => {
    prev.push(sum(cur))
    return prev
  }, [])

  console.log(Math.min(...sumArray), Math.max(...sumArray))
}
