// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let numSet = new Set(nums);
  let maxFrequency = 0;
  let maxVal = 0;
  numSet.forEach((elem) => {
    let numFrequency = nums.filter((val) => val === elem).length;
    if (numFrequency > maxFrequency) {
      maxFrequency = numFrequency;
      maxVal = elem;
    }
  });
  return maxVal;
};
