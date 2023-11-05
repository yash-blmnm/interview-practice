// Implement a stack data structure in JavaScript that contains the following operations:

// new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor not accept any arguments.
// push(): Pushes an item onto the top of the stack. Required time complexity: O(1).
// pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
// isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
// peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
// length(): Returns the number of items in the stack. Required time complexity: O(1).

export default class Stack {
  constructor() {
    this.stack = new Array();
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    return this.stack.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.stack.length;
  }
}
