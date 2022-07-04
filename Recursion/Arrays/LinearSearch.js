// function checkLinearSearch(arr, index, target) {
//   if (arr.length == index) {
//     return -1
//   }
//   if (arr[index] == target) {
//     return index
//   } else {
//     return checkLinearSearch(arr, ++index, target)
//   }
// }

// console.log(
//   'Element is found at position :->',
//   checkLinearSearch([23, 45, 56, 32, 12, 24], 0, 23),
// )

// Multiple Occurence with passing parameter args

// function checkLinearSearchOccurence(arr, index, target, arrindex) {
//   if (arr.length == index) {
//     return arrindex
//   }
//   if (arr[index] == target) {
//     arrindex.push(index)
//   }

//   return checkLinearSearchOccurence(arr, ++index, target, arrindex)
// }

// console.log(
//   'Element is found at position :->',
//   checkLinearSearchOccurence([22, 45, 56, 213, 12, 22], 0, 22, []),
// )

// make variable in an function
function checkLinearSearchOccurenceInBuilt(arr, index, target) {
  let arrindex = []
  if (arr.length == index) {
    return arrindex
  }
  if (arr[index] == target) {
    arrindex.push(index)
  }
  arrindex.push(checkLinearSearchOccurenceInBuilt(arr, ++index, target))
  return arrindex.flat()
}

console.log(
  'Element is found at position :->',
  checkLinearSearchOccurenceInBuilt([22, 22, 22, 213, 12, 22], 0, 22),
)
