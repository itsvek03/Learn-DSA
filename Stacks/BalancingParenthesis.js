class CustomStack {
  constructor() {
    this.items = []
  }

  // add ELements id if Opening
  addElements(items) {
    return this.items.push(items)
  }

  isOpening(char) {
    if (char === '(' || char === '{' || char === '[') {
      return true
    }
    return false
  }

  // remove Elements

  removeElements() {
    return this.items.pop()
  }

  // getSize
  size() {
    return this.items.length
  }

  // isEmpty
  isEmpty() {
    return this.items.length === 0
  }

  getPeek() {
    return this.items[this.items.length - 1]
  }

  //getPeek
  checkGetPeek(stackcurrentElement, currentElement) {
    return (
      (stackcurrentElement == '(' && currentElement == ')') ||
      (stackcurrentElement == '{' && currentElement == '}') ||
      (stackcurrentElement == '[' && currentElement == ']')
    )
  }
}

const expression = '({[]}))'

// Step 1 : -> If opening brackets add the Element
// Step 2 :-> If Closing then,
// a) First checking isEmpty or not
// b) If not match the element for both closing
// c) If not else pop

// Step 3: check the condition is Empty or not

function balanceParenthesis(exp) {
  const stx = new CustomStack()
  for (let i = 0; i < exp.length; i++) {
    if (stx.isOpening(exp[i])) {
      stx.addElements(exp[i])
    } else {
      if (stx.isEmpty()) {
        stx.addElements(exp[i])
      } else if (stx.checkGetPeek(stx.getPeek(), exp[i])) {
        stx.removeElements()
      } else {
        return false
      }
    }
  }
  return stx.isEmpty()
}

console.log('Result is  :  => ', balanceParenthesis(expression))
