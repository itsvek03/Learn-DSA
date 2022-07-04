function PassingNumbers(numbers) {
  if (numbers == 0) {
    return
  }
  console.log('Passing Numbers : ->', numbers)
  PassingNumbers(--numbers)
}

console.log(PassingNumbers(5))
