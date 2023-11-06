// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let tArr = new Array(26).fill(0);
  let sArr = [...tArr];

  for (let i = 0; i < t.length; i++) {
    tArr[t.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < s.length; i++) {
    sArr[s.charCodeAt(i) - 97] += 1;
  }
  return JSON.stringify(sArr) === JSON.stringify(tArr);
};

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) {
//         return false;
//     }
//     const strMap = {};
//     const sArr = s.split('')
//     const tArr = t.split('')
//     for(let i = 0; i < sArr.length; i++){
//         const x = sArr[i]
//         if(strMap[x]) {
//             strMap[x] = strMap[x] + 1;
//         }else {
//             strMap[x] = 1
//         }
//     }
//     console.log(strMap)
//     for(let i = 0; i < tArr.length; i++){
//         const x = tArr[i]
//         console.log(x, strMap[x])
//         if(strMap[x]) {
//             strMap[x] = strMap[x] - 1;
//         }else {
//             console.log(x)
//             return false;
//         }
//     }
//     console.log(strMap)
//     return (Object.keys(strMap).find(x => x !== 0))

// };
