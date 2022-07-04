function SearchElementInfinte(arr, target) {
  // Make a set of array of length 2
  // If the target is not found at the given limit double the limit

  let start = 0
  let end = 2
  while (start < end) {
    if (arr[end] < target) {
      let newStart = end + 1
      end = end + (end - start + 1) * 2
      start = newStart
    } else {
      break
    }
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] == target) {
      return mid
    }

    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
}

console.log(
  SearchElementInfinte([2, 3, 4, 5, 6, 7, 8, 9, 19, 20, 30, 40, 70], 409),
)

// These week
// a) Javascript (Akshay Saini)  (Frontend + Backend)
// b) Git
// c) Linux
// d) Sorting Techniques, Array, String (DSA)
// e) Advanced Javascript Topics
// f) All datatypes javascript functions
