const accounts = [
  [1, 3, 4],
  [8, 16, 2],
  [9, 4, 8],
]
function MaxWealth(accounts) {
  let weailth = 0
  for (let row = 0; row < accounts.length; row++) {
    let temp = 0
    for (let col = 0; col < accounts[row].length; col++) {
      temp += accounts[row][col]
      if (temp > weailth) {
        weailth = temp
      }
    }
  }
  return weailth
}

console.log('Max Wealth is :->', MaxWealth(accounts))
