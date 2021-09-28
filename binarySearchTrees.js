// Trees are a classic data structure and they're also very commonly used.

// What is a Tree?

// a data structure that consists of nodes in parent / child relationship

// Lists => linear => it's one thing and then the next and next ... everything is in a line => we have just one line path
// Trees => nonLinear => they are branches => in trees we have different paths

// so you can think of a SinglyLinkedList as a special case of a tree

// when we talk about trees, there are some rules

// 1. A node can only point to a child, parent child relationship, we can't have a child pointing to the parent, we can't have a node pointing to sibling


// TREE Terminology

// . Root - The top node in a tree
// . Child - A node directly connected to another node when moving away from the Root
// . Parent - The converse notion of a child
// . Siblings - A group of nodes with the same parent
// . Leaf - A node with no children
// . Edge - The connection between one node and another

// Use Cases for Trees

// Lots of different applications!

// . HTML DOM
// . Network Routing
// . Abstract Syntax Trees
// . Artificial Intelligence
// . Folder in Operating Systems
// . Computer File Systems
// . JSON

// Intro to Binary Trees

// Kind of Trees

// . Trees
// . Binary Trees
// . Binary Search Trees => Binary Search Trees are special type of Binary Tree

// Recap

// Trees => each node could have any number of child nodes 
// Binary Trees => each node could have at most two children at the binary part
// Binary Search Trees => they at most have two children per node and on top of that binary search trees are sorted in a particular way they are kept in order
// BST (Binary Search Tree) => are used to store data that can be compared that is sortable so often classically we're talking about numbers and that's what we'll be working with.

// How BSTS work?

// . Every parent node has at most two children
// . Every node to the left of a parent node is always less than the parent
// . Every node to the right of a parent node is always greater than parent