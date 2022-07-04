const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [88, 99, 100],
]

function SearchTwoDArray(arr, target) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == target) {
        return [row, col]
      }
    }
  }
  return [-1, -1]
}
console.log(SearchTwoDArray(arr, 99))
