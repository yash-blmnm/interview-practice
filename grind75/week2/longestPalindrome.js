// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) {
    return 1;
  }
  let charSet = new Set(s.split(""));
  let result = 0;
  let singleCharLength = 0;
  charSet.forEach((char) => {
    const length = s.match(new RegExp(char, "g")).length;
    if (length % 2 === 0) {
      result += length;
    } else {
      result += Math.floor(length - 1);
      singleCharLength += 1;
    }
  });
  return result + (singleCharLength > 1 ? 1 : singleCharLength);
};
