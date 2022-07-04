function PeakIndexMountainArray(arr) {
  // Linear Way
  //   let max = arr[0]
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > arr[i + 1]) {
  //       max = arr[i]
  //       break
  //     }
  //   }
  //   return max
  // Binary Way

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
  return arr[start]
}

console.log(
  'Peak Index Array is : ->',
  PeakIndexMountainArray([0, 1, 2, 3, 10, 2, 1]),
)
