function miniMaxSum(arr: number[]): void {
  // Write your code here
  const sumArray: number[] = []
  const getAllSum = () => {
    let result = 0
    arr.forEach((element) => {
      result += element
    })
    return result
  }

  arr.forEach((element) => {
    sumArray.push(getAllSum() - element)
  })

  console.log(Math.min(...sumArray), Math.max(...sumArray))
}
