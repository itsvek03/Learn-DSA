const arr = [3, 2, 87, 36, 92, 68, 32, 71, 21, 20, 2]

function smallAndBig(arr) {
  let smallArray = []

  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      smallArray.push(arr[i])
      return smallArray
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        break
      }
      if (j == arr.length - 1) {
        smallArray.push(arr[i])
      }
    }
  }
}

console.time('Execution Time')
console.log('Big elemnets are : -> ', smallAndBig(arr))
console.timeEnd('Execution Time')

function smallAndBigMemo(arr) {
  let cache = { key: [0, arr[0]] }
  let smallArray = []

  for (let i = 0; i < arr.length; i++) {
    // Condition one
    if (i == arr.length - 1) {
      smallArray.push(arr[i])
      return smallArray
    }

    // Condition Two
    if (cache.key[0] > i && cache.key[1] > arr[i]) {
      continue
    } else {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          cache.key = [j, arr[j]]
          break
        }
        if (arr.length - 1 == j) {
          smallArray.push(arr[i])
        }
      }
    }
  }
}
console.time('Execution Time 1')
console.log('Big elemnets are 2: -> ', smallAndBigMemo(arr))
console.timeEnd('Execution Time 1')
