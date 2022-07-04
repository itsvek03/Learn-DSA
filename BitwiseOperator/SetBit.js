/*
    if position bit is 0 set to 1 else 1

*/

// make a mask
function setBitPosition(num, position) {
  return (1 << (position - 1)) | num
}
console.log(`Position is  -> ${setBitPosition(182, 4)}`)
