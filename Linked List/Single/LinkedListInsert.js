// Main Operations in linked list
// insertAt  -> Begin,End,Specific Position  -> Complete
// removeAt   -> Begin,End,Specific Position
// getAt  -> Begin,End,Specific Position
// clear  -> Complete
// reverse

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
  // InsertAt
  insertAtBegin(data) {
    // Create a new node
    const newnodeInsert = new ListNode(data)

    // Change the head position
    newnodeInsert.next = this.head
    this.head = newnodeInsert
    return this
  }

  // get First Element
  getFirst() {
    return this.head
  }

  insertAtEnd(data) {
    // Create a new Node
    const newNode = new ListNode(data)

    if (!this.head) {
      this.head = newNode
      return this.head
    }

    let node = this.head
    while (node.next !== null) {
      node = node.next
    }
    // Now its come to end
    node.next = newNode
    return this.head
  }

  transversing(index) {
    let count = 0
    let node = this.head
    while (count !== index) {
      count++
      node = node.next
    }
    return node
  }

  // Add element at specify position
  insertAtSpecificPosition(data, index) {
    // create a new node
    const newNode = new ListNode(data)
    const leaderNode = this.transversing(index - 1)
    const nextNode = leaderNode.next
    leaderNode.next = newNode
    newNode.next = nextNode
    return this.head
  }
}

class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const node1 = new ListNode(4)
// const node2 = new ListNode(5)
// const node3 = new ListNode(6)
// const node4 = new ListNode(7)

// node1.next = node2
// node2.next = node3
// node3.next = node4

const list = new LinkedList(node1)
// console.log(list)
// console.log('Insert', list.insertAtBegin(3))
console.log('Insert', list.insertAtBegin(2))
console.log('End', list.insertAtEnd(9))
console.log('Middle', list.insertAtSpecificPosition(6, 1))

// // Insert At
// console.log('First node', list.getFirst().data)
