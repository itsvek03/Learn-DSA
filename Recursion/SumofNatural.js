function sumOfNaturalNumbers(number) {
  if (number <= 1) {
    return number
  }
  return number + sumOfNaturalNumbers(number - 1)
}
console.time()
console.log('Sum of Natural Numbers is : ->', sumOfNaturalNumbers(50))
console.timeEnd()

function sumOfNaturalNumbersMemo(number) {
  let cache = {}
  let n = number

  if (n in cache) {
    return cache[n]
  }
  if (number <= 1) {
    return number
  }
  let result = number + sumOfNaturalNumbersMemo(number - 1)
  cache[n] = result
  return result
}
console.time()
console.log('Sum of Natural Numbers is : ->', sumOfNaturalNumbersMemo(50))
console.timeEnd()

// Formula

// Sum of n terms in AP : -> n/2[2a + (n – 1)d]

//d -> is the last number
// n  -> number of terms

// Sum of natural numbers : -> 	n(n+1)/2
// Sum of square of ‘n’ natural numbers :->	[n(n+1)(2n+1)]/6
// Sum of Cube of ‘n’ natural numbers :->	[n(n+1)/2]2
