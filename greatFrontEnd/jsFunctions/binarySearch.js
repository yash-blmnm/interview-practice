// Implement a function that performs binary search on an array of numbers. The function should take in a sorted array of integers and a target integer to find. It returns the index of the target element or -1, if the target element doesn't exist in the array.

// Examples
// binarySearch([1, 2, 3, 6, 9, 11], 6); // 3
// binarySearch([1, 2, 3, 12, 16, 14], 5); // -1

/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
export default function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end + 1) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
