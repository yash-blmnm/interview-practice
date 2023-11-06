// Given a binary tree, determine if it is height-balanced
// Height-Balanced
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  return !!findLength(root);
};

function findLength(root) {
  if (!root) {
    return 0;
  }
  let leftLength = root.left ? findLength(root.left) : 0;
  let rightLength = root.right ? findLength(root.right) : 0;
  if (leftLength === false || rightLength === false) {
    return false;
  }
  let difference = Math.abs(leftLength - rightLength);
  if (difference > 1) {
    return false;
  }
  return 1 + (leftLength > rightLength ? leftLength : rightLength);
}
