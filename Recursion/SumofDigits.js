function sumOfDigits(number) {
  if (number == 0) {
    return 0
  }
  return (number % 10) + sumOfDigits(Math.floor(number / 10))
}

console.time()
console.log('Sum of Digits is  : -> ', sumOfDigits(1342))
console.timeEnd()
