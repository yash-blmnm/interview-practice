// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let tempMagazine = magazine;
  let ransomNoteLength = ransomNote.length;
  for (let i = ransomNoteLength - 1; i >= 0; i--) {
    tempMagazine = tempMagazine.replace(ransomNote.charAt(i), "");
  }
  return magazine.length - tempMagazine.length === ransomNoteLength;
};
