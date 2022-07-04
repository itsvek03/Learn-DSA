function MinNumber(arr) {
  let min = arr[0]
  for (const value of arr) {
    if (min > value) {
      min = value
    }
  }
  return min
}

console.log(MinNumber([12, 34, 32, 34, 5, 67, 1, 23]))
