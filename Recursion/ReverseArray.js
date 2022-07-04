function ReverseArray(arr1) {
  return arr1.length > 1 ? [arr1.pop()].concat(ReverseArray(arr1)) : arr1.pop()
}

const arr1 = [1, 2, 3, 4, 5, 6]
console.log('Reverse Array is : -> ', ReverseArray(arr1))
