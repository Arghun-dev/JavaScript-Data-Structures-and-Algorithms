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