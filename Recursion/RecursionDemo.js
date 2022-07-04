/**
 * ?  Find the sum of all the numbers till 10
 **/

function getSumResult(numbers) {
  if (numbers == 0) {
    return numbers
  }
  return numbers + getSumResult(numbers - 1)
}

console.log('Sum of numbers is : -> ' + getSumResult(10))

/**
 * ?  Find the sum of all the numbers till 10 in an array
 **/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getSumResultArray(arr, currentElement) {
  if (currentElement == 0) {
    return arr[currentElement]
  }
  return arr[currentElement] + getSumResultArray(arr, currentElement - 1)
}

console.log(
  'Sum of numbers of Array is : -> ' + getSumResultArray(arr, arr.length - 1),
)
