function SearchInRotatedArray(arr) {
  /*
   * ? Find the Pivot element

* Case 1: ->
   **/

  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] > arr[mid + 1]) {
      return arr[mid]
    }

    if (arr[mid] < arr[mid - 1]) {
      return arr[mid - 1]
    }

    if (arr[mid] <= arr[start]) {
      end = end - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

const arr = [4, 5, 6, 7, 0, 1, 2]
console.log('Rotated Array is : ->', SearchInRotatedArray(arr))
