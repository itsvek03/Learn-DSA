function rotateBinarySearch(arr, target, start, end) {
  // If start is greater than end returnn -1

  if (start > end) {
    return -1
  }

  // Middle Element

  const middle = Math.floor(start + (end - start) / 2)

  if (arr[middle] == target) {
    return middle
  }

  if (arr[start] <= arr[middle]) {
    if (target >= arr[start] && target <= arr[middle]) {
      return rotateBinarySearch(arr, target, start, middle - 1)
    } else {
      return rotateBinarySearch(arr, target, middle + 1, end)
    }
  }

  if (target >= arr[middle] && target <= arr[end]) {
    // if middle element is greater than target
    return rotateBinarySearch(arr, target, middle + 1, end)
  }
  return rotateBinarySearch(arr, target, start, middle - 1)
}

console.log(
  'Element find at position',
  rotateBinarySearch([5, 6, 7, 1, 2, 3, 4], 7, 0, [5, 6, 7, 1, 2, 3, 4].length),
)
