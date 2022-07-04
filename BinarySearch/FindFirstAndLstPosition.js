function firstAndLast(arr, target, find) {
  let ans = -1
  let startElement = 0
  let endElement = arr.length - 1
  while (startElement <= endElement) {
    let middleElement = Math.floor((startElement + endElement) / 2)

    if (arr[middleElement] > target) {
      endElement = middleElement - 1
    } else if (arr[middleElement] < target) {
      startElement = middleElement + 1
    } else {
      ans = middleElement
      if (find) {
        endElement = middleElement - 1
      } else {
        startElement = middleElement + 1
      }
    }
  }

  return ans
}

let ans = [-1, -1]
const arr = [5, 7, 7, 7, 8, 8, 8, 9]
let start = firstAndLast(arr, 10, true)
console.log(start)
let end = firstAndLast(arr, 10, false)
console.log(end)
