function bubbleSort(arr, n) {
  if (n == 1) {
    return arr
  }
  let count = 0

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1]
      arr[i + 1] = arr[i]
      arr[i] = temp
      count++
    }
  }

  if (count == 0) {
    return arr
  }
  return bubbleSort(arr, n - 1)
}

const arr = [20, 14, 34, 23, 45, 234, 57, 32, 5, 645]
console.log('Bubble Sort using Recursion :->', bubbleSort(arr, arr.length))
