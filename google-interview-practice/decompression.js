// In this exercise, you're going to decompress a compressed string.

// Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

// The input

// 3[abc]4[ab]c

// Would be output as

// abcabcabcababababc

// Other rules
// Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

// One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

// Characters allowed as input include digits, small English letters and brackets [ ].

// Digits are only to represent amount of repetitions.

// Letters are just letters.

// Brackets are only part of syntax of writing repeated substring.

// Input is always valid, so no need to check its validity.

// Learning objectives
// This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency.

const decompressText = (compressed) => {
  let numTimes = "";
  let repeatChar = "";
  let result = "";
  let openBrackets = 0;

  for (let i = 0; i < compressed.length; i++) {
    let char = compressed.charAt(i);
    if (char === "[") {
      if (openBrackets > 0) {
        repeatChar += char;
      }
      openBrackets += 1;
    } else if (char === "]") {
      openBrackets -= 1;
      if (openBrackets === 0) {
        let decompressedRepeatChar = decompressText(repeatChar);
        numTimes = Number(numTimes);
        if (numTimes) {
          for (let j = 0; j < numTimes; j++) {
            result += decompressedRepeatChar;
          }
          repeatChar = "";
          numTimes = "";
        }
      } else {
        repeatChar += char;
      }
    } else if (!isNaN(char)) {
      if (!openBrackets) {
        numTimes += char;
      } else {
        repeatChar += char;
      }
    } else {
      if (openBrackets) {
        repeatChar += char;
      } else {
        result += char;
      }
    }
  }
  return result;
};

let val1 = decompressText("3[abc]4[ab]c");
console.log(val1);
let val2 = decompressText("2[3[a2[c]]b]");
console.log(val2);
