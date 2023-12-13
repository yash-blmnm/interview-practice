// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]

function flat(arr, depth = 1) {
  if (depth <= 0) {
    return arr;
  }
  let depthFlag = depth == "Infinity";
  let res = [];
  for (let val of arr) {
    // let val = arr[i];
    if (Array.isArray(val)) {
      res.push(...val);
      if (depthFlag) {
        depthFlag = val.some((x) => Array.isArray(x));
        depth = depthFlag ? "Infinity" : 1;
      }
    } else {
      res.push(val);
    }
  }
  return flat(res, depth - 1);
}

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const arr1 = [1, [2], [3, [4]]];

console.log(flat(arr1, 2));
console.log(flat(arr, Infinity));
