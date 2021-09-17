class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // no node in the list, therefore return null
    if (!this.length) {
      return null;
    } else {
      /*
       * find the second to last node (it should become the new tail):
       * - set the current head as currentNode (we always have to start from the List's head node)
       * - set the current head as secondToLastNode (we can't go back a node, therefore we have to save the second to last)
       * - as long as the current node has a next node (so it is not the last node)
       * - then set the current node to the second to last
       * - then set the current node's `next` as the current node
       */
      let currentNode = this.head;
      let secondToLastNode = this.head;
      while (currentNode.next) {
        secondToLastNode = currentNode;
        currentNode = currentNode.next;
      }
      // set the second to last node's `next` to `null` (the second to last should "cut" its connection to the next node)
      secondToLastNode.next = null;
      // set it as `tail`
      this.tail = secondToLastNode;
      // decrease the Singly Linked List's `length` by 1
      this.length -= 1;
      // if the Singly Linked List now is empty, set its `head` and `tail` to `null`
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      // return the popped node (found some lines above)
      return currentNode;
    }
  }

  shift(){
    if (!this.head) return undefined // for empty list
    let temp = this.head // to return removed value
    this.head = this.head.next
    this.length = this.length-1
    if(this.length == 0) { // in case of single node
        this.tail = null 
    }
    return temp
}
}

var list = new SinglyLinkedList();
list.push('Hello');
list.push('GoodBye');
list.push('Hello Swedene');
list.pop('Hello Swedene');
console.log('list: ', list);