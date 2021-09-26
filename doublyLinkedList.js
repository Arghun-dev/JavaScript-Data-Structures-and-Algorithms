// Node
// val
// next
// prev

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList
// head
// tail
// length

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!head) return undefined;
    var popped
  }
}

let list = new DoublyLinkedList();
list.push('arghun');
list.push('moein');
list.push('mahsa');

console.log(list);