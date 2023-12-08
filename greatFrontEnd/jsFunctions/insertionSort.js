// Implement a function that performs an insertion sort. The function should take in an array of integers and return an array with the integers sorted in ascending order. The input array is modified.

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let cnt = i - 1;
    while (cnt >= 0) {
      if (cur >= arr[cnt]) {
        arr.splice(i, 1);
        arr.splice(cnt + 1, 0, cur);
        break;
      } else {
        if (cnt === 0) {
          arr.splice(i, 1);
          arr.splice(0, 0, cur);
          break;
        }
        cnt--;
      }
    }
  }
  return arr;
}
