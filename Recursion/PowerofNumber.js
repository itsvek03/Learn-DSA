// eg: 2,4 => 2 * 2 * 2 *2

function powerOfNumber(num, base) {
  if (base == 0) {
    return 1
  }

  return num * powerOfNumber(num, --base)
}

console.log('Power of Number : ->', powerOfNumber(2, 5))
