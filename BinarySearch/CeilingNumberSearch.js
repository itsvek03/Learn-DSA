// We can see these we have to returnn the greatest so we don't target the middle element
function CeilingNumber(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return arr[start % arr.length]
}

console.log(CeilingNumber(['c', 'f', 'j'], 'f'))
