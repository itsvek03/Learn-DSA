function findUniqueNumber(arr) {
  let unique = 0

  for (let i = 0; i < arr.length; i++) {
    unique = unique ^ arr[i]
  }
  return unique
}

console.log(
  `Unique Numbers are : -> ${findUniqueNumber([1, 2, 3, 4, 4, 5, 3, 2, 1])}`,
)
