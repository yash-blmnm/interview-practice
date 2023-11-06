// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

var MyQueue = function () {
  this.queue = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
  return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.queue.length !== this.stack.length) {
    this.queue = new Array();
    let i = this.stack.length - 1;
    while (i >= 0) {
      this.queue.push(this.stack[i]);
      i -= 1;
    }
  }
  this.stack.shift();
  return this.queue.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.queue.length !== this.stack.length) {
    this.queue = new Array();
    let i = this.stack.length - 1;
    while (i >= 0) {
      this.queue.push(this.stack[i]);
      i -= 1;
    }
  }
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
