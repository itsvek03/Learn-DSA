// GCD of Number
const arr = [3, 2, 87, 36, 92, 68, 32, 71]

function smallAndBig(arr) {
  let smallArray = []
  let cache = {}
  cache[arr[0]] = 0
  for (let i = 0; i < arr.length; i++) {
    // First Condition
    if (i == arr.length - 1) {
      smallArray.push(arr[i])
      console.log(smallArray)
    }

    for (let [key, value] of Object.entries(cache)) {
      console.log(key, value)
      if (arr[i] < key && i < value) {
        continue
      } else {
        let status = true
        let n = i + 1
        if (arr[i] < arr[n + 1]) {
          if (!cache) {
            cache[arr[n + 1]] = n + 1
            status = false
          } else {
            delete cache[key]
            cache[arr[n + 1]] = n + 1
            status = false
          }
        } else {
          n++
        }
      }
    }
  }
  return cache
}

console.log('Big elemnets are : -> ', smallAndBig(arr))
