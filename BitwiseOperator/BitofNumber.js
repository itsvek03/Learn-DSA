// Step 1 : Make the mask Number

// Return 1 if greater if operation greater than 0 else 0

// eg: 182 -> 1 0  1  1  0  1  1  0

// for finding for 5th position we have to make mask :  0  0  0  1  0  0  0  0
// for finding for 4th position :  0  0  0  0  1  0  0  0

// so, for making mask based on position -> 1 << (numofpostion-1)
function findBitNumber(num, position) {
  return ((1 << (position - 1)) & num) > 0 ? 1 : 0
}

console.log('Bit is : ->', findBitNumber(182, 5))
