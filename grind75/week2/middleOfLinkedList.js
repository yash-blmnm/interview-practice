// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let firstNode = head;
  let length = 0;
  if (!firstNode.next) {
    return firstNode;
  }
  while (firstNode.next) {
    let tempLength = length;
    let tempNode = firstNode.next;
    let middleNode = null;
    while (tempLength > 0) {
      if (!tempNode.next) {
        middleNode = firstNode.val;
        break;
      }
      tempNode = tempNode.next;
      tempLength -= 1;
    }
    if (middleNode) {
      break;
    }
    length += 1;
    firstNode = firstNode.next;
  }
  return firstNode;
};
