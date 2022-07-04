// Array is sorted in row and col wise

function BinarySearchTwoArray(arr, target) {
  let row = 0
  let col = arr.length - 1

  while (row < arr.length && col >= 0) {
    if (arr[row][col] == target) {
      return [row, col]
    }
    if (arr[row][col] < target) {
      row++
    } else {
      col--
    }
  }
  return [-1, -1]
}

const arr = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [28, 29, 37, 49],
  [33, 34, 38, 50],
]
console.log('Element found at index : ->', BinarySearchTwoArray(arr, 29))
