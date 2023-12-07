// Implement a queue data structure in JavaScript that contains the following operations:

// new Queue(): Creates an instance of a Queue class that doesn't contain any items. The constructor does not accept any arguments.
// enqueue(): Adds an item to the back of the queue. Required time complexity: O(1).
// dequeue(): Removes an item from the front of the queue. Required time complexity: O(1).
// isEmpty(): Determines if the queue is empty. Required time complexity: O(1).
// front(): Returns the item at the front of the queue without removing it from the queue. Required time complexity: O(1).
// back(): Returns the item at the back of the queue without removing it from the queue. Required time complexity: O(1).
// length(): Returns the number of items in the queue. Required time complexity: O(1).

export default class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    this.queue.push(item);
    return this.queue.length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    return this.queue.splice(0, 1).pop();
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return !this.queue.length;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    return this.queue[0];
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    return this.queue[this.queue.length - 1];
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this.queue.length;
  }
}
