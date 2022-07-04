// Memoization

function sumofN() {
  let cache = {}
  return (...args) => {
    let n = args[0]
    if (n in cache) {
      return cache[n]
    } else {
      let result = n + 10
      cache[n] = result
      console.log('Cache Memory is  : ->', cache)
      return result
    }
  }
}

console.time()
const result = sumofN(5)
console.log('Result is : ->', result(5))
console.timeEnd()

console.time()
console.log('Result is : ->', result(5))
console.timeEnd()

console.time()
console.log('Result is : ->', result(7))
console.timeEnd()
