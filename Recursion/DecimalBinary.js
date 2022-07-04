function DecimalBinary(num) {
  if (num == 0) {
    return num % 2
  }
  return DecimalBinary(Math.floor(num / 2))
    .toString()
    .concat(num % 2)
}

console.log('Binary Number is:->', DecimalBinary(16))
