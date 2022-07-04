function patternOne(row, col) {
  if (row > 4 && col < 1) {
    return
  }
  console.log('* '.repeat(col))
  return patternOne(++row, --col)
}

patternOne(1, 4)
