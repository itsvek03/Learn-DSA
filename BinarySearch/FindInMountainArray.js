function findInMountainArray(arr) {
  // a) Find the peak element
  // b) Search in right side
  // c) If not found,search in left

  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return start

  // Left Side
}

function searchBinary(arr, target, start, end) {
  let isAsc = arr[start] < arr[end]

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] == target) {
      return mid
    }

    if (isAsc) {
      if (arr[mid] > target) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if (arr[mid] < target) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }
  return -1
}

const peak = findInMountainArray([1, 2, 4, 5, 3, 1])
let firstTry = searchBinary([1, 2, 4, 5, 3, 1], 3, 0, peak)
if (firstTry != -1) {
  return firstTry
}
console.log(
  searchBinary([1, 2, 4, 5, 3, 1], 3, peak + 1, [1, 2, 4, 5, 3, 1].length - 1),
)
