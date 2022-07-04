function ReverseNumbers(numbers, base) {
  if (numbers == 0) {
    return numbers
  }
  return (
    (numbers % 10) * Math.pow(10, base - 1) +
    ReverseNumbers(Math.floor(numbers / 10), base - 1)
  )
}

console.log(
  'Reverse of numbers is : ->',
  ReverseNumbers(100, Math.floor(Math.log10(100) + 1)),
)

//eg: 123 -> 100 *10^2 + 20 * 10^1 + 3 * 10^0
