class Stack {
  // push the items

  constructor() {
    this.items = []
  }

  // pop the items
  remove() {
    if (this.items.length > 0) {
      return this.items.pop()
    }
  }

  // get the top Element
  getElement() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : []
  }

  addElement(items) {
    return this.items.push(items)
  }

  // check the stack is full or not
  clearStack() {
    return (this.items = [])
  }

  // getSize()

  getSize() {
    return this.items.length
  }
}

const newStack = new Stack()
newStack.addElement(2)
newStack.addElement(3)
newStack.addElement(4)
newStack.addElement(5)

console.log('Top Element is :-> ', newStack.getElement())
console.log('Size is  :- >', newStack.getSize())
console.log('remove Element:->', newStack.remove())
console.log('Top Element is :-> ', newStack.getElement())
console.log('Size is  :- >', newStack.getSize())
newStack.clearStack()
console.log('Top Element is :-> ', newStack.getElement())
console.log('Size is  :- >', newStack.getSize())
