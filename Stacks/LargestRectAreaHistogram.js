class LargestStack {
  constructor() {
    this.items = []
  }

  //checkEmpty
  isEmpty() {
    return this.items.length === 0
  }

  // getPeekElement()
  getPeekElement() {
    return this.items[this.items.length - 1]
  }

  // remove the elements
  removeElements() {
    return this.items.pop()
  }

  // addElements()
  addElement(items) {
    return this.items.push(items)
  }
}

function prevSmallStack(array) {
  const prevStack = new LargestStack()
  const prevArr = []
  for (let index = 0; index < array.length; index++) {
    while (
      !prevStack.isEmpty() &&
      array[prevStack.getPeekElement()] >= array[index]
    ) {
      prevStack.removeElements()
    }
    if (prevStack.isEmpty()) {
      prevArr[index] = -1
    } else {
      prevArr[index] = prevStack.getPeekElement()
    }
    prevStack.addElement(index)
  }

  return prevArr
}

function nextSmallStack(array) {
  const nextStack = new LargestStack()
  const nextArr = []
  for (let index = array.length - 1; index >= 0; index--) {
    while (
      !nextStack.isEmpty() &&
      array[nextStack.getPeekElement()] >= array[index]
    ) {
      nextStack.removeElements()
    }
    if (nextStack.isEmpty()) {
      nextArr[index] = arr.length
    } else {
      nextArr[index] = nextStack.getPeekElement()
    }
    nextStack.addElement(index)
  }

  return nextArr
}

function LargestRectangleHistogram(arr) {
  // function for prevSmallStack
  const prevSmall = prevSmallStack(arr)
  console.log('Smalll Stack : -> ', prevSmall)

  // function for nextSmallStack
  const nextSmall = nextSmallStack(arr)
  console.log('Next Stack : -> ', nextSmall)
  let area = 0
  for (let index = 0; index < arr.length; index++) {
    let maximum = (nextSmall[index] - prevSmall[index] - 1) * arr[index]
    area = Math.max(area, maximum)
  }
  return area
}

const arr = [4, 2, 1, 5, 6, 3, 2, 4, 2]
console.log('Largest Rectangle Area : -> ', LargestRectangleHistogram(arr))
