function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_element = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_element]) {
        min_element = j
      }
    }
    if (min_element != i) {
      swap(arr, min_element, i)
    }
  }
  return arr
}

function swap(arr, minElement, i) {
  let temp = arr[minElement]
  arr[minElement] = arr[i]
  arr[i] = temp
}

// find the smallest element
// Swap with i position

const arr = [2, 7, 10, 8, 3, 1]
const arr2 = [1, 2, 3, 4, 5]
//console.log('Sorted array is : ->', selectionSort(arr))
console.log('Sorted array is : ->', selectionSort(arr2))
