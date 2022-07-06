class InfixtoPostfixStack {
  constructor() {
    this.items = []
    this.result = ''
  }

  // addElements
  addElements(items) {
    return this.items.push(items)
  }

  // removeElemts
  removeElements() {
    return this.items.pop()
  }

  // isEmpty
  isEmpty() {
    return this.items.length == 0
  }

  // getPeekElements
  getPeekElements() {
    return this.items[this.items.length - 1]
  }
}

function infixtopostfix(str) {
  const postfix = new InfixtoPostfixStack()
  let result = ''
  for (let index = 0; index < str.length; index++) {
    // If open bracket, push to the stack
    if (str[index] === '(') {
      postfix.addElements(str[index])
      continue
    }

    // If open bracket, push to the stack
    if (str[index] === ')') {
      while (!/[(]/.test(postfix.getPeekElements())) {
        result += postfix.getPeekElements()
        postfix.removeElements()
      }
      postfix.removeElements()
      continue
    }

    // If operand,print the operand
    if (/[a-zA-Z0-9]/.test(str[index])) {
      result += str[index]
      continue
    }

    if (postfix.isEmpty()) {
      postfix.addElements(str[index])
    } else if (
      (/[+-x*/]/.test(str[index]) &&
        comparePrecendence(str[index]) &&
        comparePrecendence(postfix.getPeekElements())) ||
      postfix.getPeekElements() == '('
    ) {
      postfix.addElements(str[index])
    } else {
      while (comparePrecendence(str[index], postfix.getPeekElements())) {
        postfix.removeElements()
      }
    }
  }

  while (!postfix.isEmpty()) {
    result += postfix.getPeekElements()
    postfix.removeElements()
  }
  return result
}

function comparePrecendence(c) {
  if (c == '^') {
    return 3
  } else if (c == '/' || c == '*') {
    return 2
  } else if (c == '+' || c == '-') {
    return 1
  } else {
    return -1
  }
}

const str = 'a+b*(c^d-e)^(f+g*h)-i'

console.log('Result is :->', infixtopostfix(str))
