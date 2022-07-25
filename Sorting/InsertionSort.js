function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    swap(j, temp)
  }
  return arr
}

function swap(sorted, temp) {
  while (sorted >= 0 && arr[sorted] > temp) {
    arr[sorted + 1] = arr[sorted]
    sorted--
  }
  arr[sorted + 1] = temp
}

const arr = [20, 14, 34, 23, 45, 234, 57, 32, 5]
console.log('Insertion Sorted Array is :-> ', insertionSort(arr))
