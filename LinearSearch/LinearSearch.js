function linearSearch(arr, target) {
  for (const [index, value] of arr.entries()) {
    if (value == target) {
      return index
    }
  }
  return -1
}

console.log(linearSearch([1, 2, 3, 45, 56], 56))
