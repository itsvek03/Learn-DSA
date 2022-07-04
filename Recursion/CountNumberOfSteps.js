function CountNumber(number, steps) {
  if (number == 0) {
    return steps
  }
  if (number % 2 == 0) {
    return CountNumber(Math.ceil(number / 2), steps + 1)
  }
  return CountNumber(number - 1, steps + 1)
}

console.log('No of steps', CountNumber(14, 0))
