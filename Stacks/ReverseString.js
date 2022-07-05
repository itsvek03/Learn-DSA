class ReverseStack {
  constructor() {
    this.items = []
  }

  // addElements
  addElements(items) {
    return this.items.push(items)
  }

  // remove elements

  // isEmpty
  isEmpty() {
    return this.items.length === 0
  }

  // convertString
  convertString() {
    return this.items.join('')
  }
}

function reversetring(fName) {
  const reverseName = new ReverseStack()

  for (let index = fName.length - 1; index >= 0; index--) {
    reverseName.addElements(fName[index])
  }
  return reverseName.convertString()
}

const fullname = 'Vivek'
console.log('Reverse String : -> ', reversetring(fullname))
