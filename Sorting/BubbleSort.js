const arr = [3, 9, 8, 10, 7, 1]
const arr2 = [1, 2, 3, 4, 5]

//Suppose array is sorted then it must not iterate
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swap = false
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        swap = true
      }
    }
    if (!swap) {
      break
    }
  }
  return array
}

console.time()
console.log('Sorted array is :->', bubbleSort(arr2))
console.log('Sorted array is :->', bubbleSort(arr))
console.timeEnd()
