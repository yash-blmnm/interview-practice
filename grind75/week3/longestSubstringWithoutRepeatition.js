// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) {
    return s.length;
  }
  let start = 0;
  let res = 0;
  let curWord = "";
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let charFoundInRes = curWord.indexOf(char);
    if (charFoundInRes >= 0) {
      let newWord = s.substring(start, i);
      res = res > newWord.length ? res : newWord.length;
      curWord = curWord.substring(charFoundInRes + 1);
      start = start + charFoundInRes + 1;
    } else if (i === s.length - 1) {
      let newWord = s.substring(start, i + 1);
      res = res > newWord.length ? res : newWord.length;
    }
    curWord += char;
  }
  return res;
};
