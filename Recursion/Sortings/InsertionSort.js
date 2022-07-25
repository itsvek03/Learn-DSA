function insertionSort(arr, n) {
  if (n <= 1) {
    return arr
  }
  insertionSort(arr, n - 1)
  let last = arr[n - 1]
  let j = n - 2
  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j]
    j--
  }
  arr[j + 1] = last
  return arr
}

const arr = [20, 14, 34, 23, 45, 234, 57, 32, 5]
console.log(
  'Insertion Sorted Array using Recursion is :-> ',
  insertionSort(arr, arr.length),
)
