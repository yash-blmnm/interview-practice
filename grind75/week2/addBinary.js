// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let x = 0,
    y = 0,
    rem = 0;
  while (a != "" || b != "") {
    if (a != "") {
      x = parseInt(a.slice(-1));
      a = a.slice(0, -1);
    }
    if (b != "") {
      y = parseInt(b.slice(-1));
      b = b.slice(0, -1);
    }
    if (x + y + rem == 2) {
      rem = 1;
      result = "0" + result;
    } else if (x + y + rem == 3) {
      rem = 1;
      result = "1" + result;
    } else {
      result = (x + y + rem).toString() + result;
      rem = 0;
    }
    x = 0;
    y = 0;
  }
  if (rem == 1) result = "1" + result;
  return result;
};
