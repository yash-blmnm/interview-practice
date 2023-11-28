// Given a string S, containing special characters and all the alphabets, reverse the string without
// affecting the positions of the special characters.

// Example 1:
// Input: S = "A&B"
// Output: "B&A"
// Explanation: As we ignore '&' and
// then reverse, so answer is "B&A".

// Example 2:
// Input: S = "A&x#
// Output: "x&A#"
// Explanation: we swap only A and x.

let reverseString = function (str) {
  let strLen = str.length;
  //   let res = ''
  let pointer = getRightPointer(strLen - 1, str);
  //   for(let i = 0; i < strLen; i++) {
  //     let char = str.charAt(i);
  //     if(/[a-z]/i.test(char)) {
  //       res += str.charAt(pointer)
  //       pointer = getRightPointer(pointer - 1, str);
  //     }else {
  //       res += char;
  //     }
  //   }
  return str.split("").reduce((res, char) => {
    if (/[a-z]/i.test(char)) {
      return res + str.charAt(pointer);
      pointer = getRightPointer(pointer - 1, str);
    } else {
      return res + char;
    }
  }, "");
  //   return res
};

function getRightPointer(ptr, str) {
  while (ptr >= 0 && !/[a-z]/i.test(str.charAt(ptr))) {
    ptr -= 1;
  }
  return ptr;
}

let r1 = reverseString('"A&x#');
console.log(r1);
