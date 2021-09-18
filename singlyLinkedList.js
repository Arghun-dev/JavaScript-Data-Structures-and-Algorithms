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

  shift() {
    if (!this.head) return undefined // for empty list
    let temp = this.head // to return removed value
    this.head = this.head.next
    this.length = this.length-1
    if(this.length == 0) { // in case of single node
        this.tail = null 
    }
    return temp
  }

  unshift(value) {
    // create a new node
    const newNode = new Node(value);

    // check if Singly Linked List is empty
    if (!this.length) {
      // set the new node as the Singly Linked List's `tail`
      this.tail = newNode;
    } else {
      // set the new node's `next` to the Singly Linked List's current `head`
      newNode.next = this.head;
    }

    // set the new node as the Singly Linked List's `head`
    this.head = newNode;

    // increase the Singly Linked List's length by 1
    this.length += 1;

    // return the new node
    return newNode;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;

    var current = this.head;
    var counter = 0;

    while (index !== counter) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  // insert add a node at the specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    foundNode.next = val;
    this.length++;
    return true;
  }

  // removing a node from the linked list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // reversing the linked list in place!
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null; 

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// Big O of Singly Linked Lists => 

// Insertion O(1)
// Removal - It depends... O(1) or O(N)
// Searching - O(N)
// Access - O(N)

var list = new SinglyLinkedList();
list.push('Hello');
list.push('GoodBye');
list.push('Hello Swedene');
list.shift();
list.unshift('Helloe');
console.log(list.get(1));
list.set(1, 'New GoodBye');
console.log('list: ', list);

// RECAP

// Singly Linked Lists are an excellent alternative to arrays when inseetion and deletion at the beginnning are 
// frequently required. (remember inserting and deletig at the end of an array is not a big deal we don't have to re-index the items)

// Arrays contain a built in index whereas Linked Lists do not

// The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.