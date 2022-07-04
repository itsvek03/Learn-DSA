// function fibon(number) {
//   if (number <= 1) {
//     return number
//   }
//   return fibon(number - 1) + fibon(number - 2)
// }

// console.time()
// console.log('Fibonacci number is : -> ', fibon(10))
// console.timeEnd()

function fibo(number) {
  let cache = {}
  let n = number
  if (n in cache) {
    return cache[n]
  }
  if (number < 3) {
    return 1
  }
  let result = fibo(number - 1) + fibo(number - 2)
  cache[n] = result
  return result
}
console.time()
console.log('Fibonacci number is : -> ', fibo(100))
console.timeEnd()
