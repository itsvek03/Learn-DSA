// GCD Number

// q) Use Euclidean Number

function GCDNumber(first, second) {
  if (a < 0 || b < 0) {
    return -1
  }
  if (second == 0) {
    return first
  }

  return GCDNumber(second, first % second)
}

console.log('GCD number is :->', GCDNumber(48, 18))
