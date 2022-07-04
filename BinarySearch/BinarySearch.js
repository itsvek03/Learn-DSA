/**
 * ? Step 1: Find the midddle index's element
 * ? Step 2: If the element is present at the middle index return index
 * ? Step 3: If target element is greater than middle element then move right else left
 * ? For right -> start = mid +1
 * ? For left  -> end = mid -1
 * ? Till when the loop will iterate
 * ? start<= end
 *
 *
 * **/

function BinarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] == target) {
      return middle
    } else if (target > arr[middle]) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  return -1
}

console.log(
  'Element is found at index : -> ',
  BinarySearch([12, 23, 45, 65, 67, 69], 12),
)
