// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Time Complexity :  O(n)
// Space Complexity : O(1)
var characterReplacement = function (s, k) {
  // Make a map of size 26...
  var map = [26];
  // Initialize largestCount, maxlen & beg pointer...
  let largestCount = 0,
    beg = 0,
    maxlen = 0;
  // Traverse all characters through the loop...
  for (let end = 0; end < s.length; end++) {
    const c = s[end];
    map[c] = (map[c] || 0) + 1;
    // Get the largest count of a single, unique character in the current window...
    largestCount = Math.max(largestCount, map[c]);
    // We are allowed to have at most k replacements in the window...
    // So, if max character frequency + distance between beg and end is greater than k...
    // this means we have considered changing more than k charactres. So time to shrink window...
    // Then there are more characters in the window than we can replace, and we need to shrink the window...
    if (end - beg + 1 - largestCount > k) {
      // The main equation is: end - beg + 1 - largestCount...
      map[s[beg]] -= 1;
      beg += 1;
    }
    // Get the maximum length of repeating character...
    maxlen = Math.max(maxlen, end - beg + 1); // end - beg + 1 = size of the current window...
  }
  return maxlen; // Return the maximum length of repeating character...
};
