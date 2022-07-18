// Basics
//The code below shows the implementation of a linked list class with a constructor.
// Notice that if the head node is not passed, the head is initialized to null
class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  // get the size of the list
  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  // clear
  // if we make head =null then it will empty the linked list

  clear() {
    this.head = null
  }

  // get Last Item
  getLast() {
    let node = this.head
    if (node) {
      while (node.next) {
        node = node.next
      }
    }
    return node // Return the last node
  }

  // get First
  getFirst() {
    return this.head
  }
}

// Linked List functions :->
// size()
// clear()
// getLast()
// getFirst()

class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const node1 = new ListNode(3)
const node2 = new ListNode(4)
const node3 = new ListNode(5)
node1.next = node2
node2.next = node3

const list = new LinkedList(node1)

console.log(list) // LinkedList { head: ListNode { data: 3, next: ListNode { data: 4, next: [ListNode] } }}

// get Size of Linked List
console.log(list.size())

// console.log(list.clear())

// console.log(list.size())

// get the Last Element
console.log('Last Node', list.getLast().data)

// get the First Element
console.log('First Node', list.getFirst().data)
