function checkSortedArray(arr, index) {
  if (arr.length - 1 == index) {
    return true
  }

  return arr[index] < arr[index + 1] && checkSortedArray(arr, ++index)
}

console.log('Array is sorted :->', checkSortedArray([1, 2, 3, 5, 4], 0))
