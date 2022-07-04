function sumofElements(arr) {
  if (arr.length == 0) {
    return 0
  }
  return arr.pop() + sumofElements(arr)
}

console.log(sumofElements([10, 20, 30, 40]))
