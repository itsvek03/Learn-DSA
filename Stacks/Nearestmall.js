// Nearest smallest of an array
const arr = [4, 10, 5, 8, 20, 15, 3, 12]
// const newarr = []
// for (let i = 0; i < arr.length; i++) {
//   if (i == 0) {
//     newarr.push(-1)
//     continue
//   }
//   for (let j = i; j >= 0; j--) {
//     if (arr[j] < arr[i]) {
//       newarr.push(arr[j])
//       break
//     } else if (j == 0) {
//       newarr.push(-1)
//     }
//   }
// }
// console.log(newarr) //[-1, 4, 4, 5, 8, 8, -1, 3]
// time Complexity is O(N^2)

// Now for optimized version

class NearestSmallStack {
  constructor() {
    this.items = []
  }

  // addElements
  addElement(items) {
    this.items.push(items)
  }

  // isEmpty
  isEmpty() {
    return this.items.length === 0
  }

  // getPeekElement
  getPeekElement() {
    return this.items[this.items.length - 1]
  }

  // removeElement
  removeElement() {
    return this.items.pop()
  }
}

function nearestSmall(array) {
  const nearSmall = new NearestSmallStack()
  for (let index = 0; index < array.length; index++) {
    while (!nearSmall.isEmpty() && nearSmall.getPeekElement() >= array[index]) {
      nearSmall.removeElement()
    }
    if (nearSmall.isEmpty()) {
      console.log(-1)
    } else {
      console.log(nearSmall.getPeekElement())
    }
    nearSmall.addElement(array[index])
  }
  return nearSmall
}

console.log('New Array is formed : -> ', nearestSmall(arr))

// Time Complexity :-> O(N)
// Space COmplexity :-> O(N)
