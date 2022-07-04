function CountZeros(numbers, zeros) {
  if (numbers == 0) {
    return zeros
  }
  if (numbers % 10 == 0) {
    return CountZeros(Math.floor(numbers / 10), zeros + 1)
  }
  return CountZeros(Math.floor(numbers / 10), zeros)
}

console.log('Number of zeros is ', CountZeros(2027060, 0))
