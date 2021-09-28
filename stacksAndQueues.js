// where stacks are used 

// . Managing function invocations
// . Undo / Redo
// . Routing (the history object in browsers) is treated like a stack
// In many frontend frameworks like react we'll use a stack to model the history that the pages you've viewed
// . when we get to things like trees and graphs later on some of the algorithms that we'll be writing we actually use stacks and also queues


// there is more than on way of implementing a stack

// ... easiest way is to implement stacks are arrays and use push and pop and shift and unshift methods of array JavaScript does not. 


//  first step implementation of stacks using Linked List

// Wrting Our own Stack from scratch

 // first way is using an array 
   // it works, we didn't have to write any new code we didn't even defined a class we just used an array and used the built in methods we get for free nothing wrong with that but we don't need you know indices for example which we get for free and we don't need dozens of methods come with arrays


   // so here we're going to build our own stacks which doesn't using linked lists.

   // One note hwen we use and learn other algorithms later on some of them use a stack and Queues which we'll see in a second 
   // to help them to stroe data sort of to keep track of what's open process and what has yet to be processed, and we could use an
   // array implementation we could use her own class to keep it short.

  
// Pushing Pseudocode

// .The function should accept a value
// .Create a new node with that value
// .If there are no nodes in the stack, set the first and last property to be the newly created node
// .If there's at least one node, create a variable that stores the current first property on the stack
// .Reset the first property to be the newly created node
// .Set the next property on the node to be the previously created variable
// .Increment the size of the stack by 1


// Pop Pseudocode

// .If there are no nodes in the stack, return null
// .Create a temporary variavle to store the first property on the stack
// .If there is only one node, set the first and last property to be null
// .If there is more than one node, set the first property to be the next property on the current first
// .Return the value of the node removed

// Big O of Stacks

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)


// Intro to Queues

// Queus and Stacks are sister and very similar to each other

// Imagine some people waiting for something in a line.

// It's a data structure to add in and removing items from data structure but in another order, instead of last in first out for a stack, this is FIFO data structure! First in First out.

// How do we use them in programming?

// . Background tasks
// . Uploading resources 
// . Printing / Task processing

// the first thing that was added in is going to be processed first

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }

    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();
stack.push('arghun');
stack.push('sahand');
stack.push('shahla');
stack.pop();
stack.pop();
stack.pop();
console.log(stack);


// Building a Queue with an array => it's super easy

var q = [];
q.push('first');
q.push('second');
q.push('third');
q.shift();
q.shift();
q.shift();


// but it has a problem, imagine we have a large list, if we remove some element from the first of the element all the elements have to be re-indexed.

// So, it is defnitely make sense to create your own Queue Class for performance

// so queue is add to the end and remove from the first of the list

// adding to the end is called enque and removing from the first is called dequeu

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// Big O of Queues

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

