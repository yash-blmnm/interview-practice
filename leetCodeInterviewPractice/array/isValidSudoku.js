/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let rowArr = [];
    let colArr = [];
    for (let j = 0; j < board[i].length; j++) {
      // Checking row array matrix validation
      let rowVal = board[i][j];
      if (rowVal !== ".") {
        if (rowArr.includes(rowVal)) {
          return false;
        }
        rowArr.push(rowVal);
      }
      //   Checking column array matrix validation
      let colVal = board[j][i];
      if (colVal !== ".") {
        if (colArr.includes(colVal)) {
          return false;
        }
        colArr.push(colVal);
      }
    }
  }
  // Checking sub box 3*3 matrix validation
  let rowStart = 0;
  let colStart = 0;
  let subBoxLen = 3;
  while (rowStart < 9 && colStart < 9) {
    let subBoxArr = [];
    console.log("new arr");
    for (let i = rowStart; i < rowStart + subBoxLen; i++) {
      for (let j = colStart; j < colStart + subBoxLen; j++) {
        console.log(i, j);
        let val = board[i][j];
        if (val !== ".") {
          if (subBoxArr.includes(val)) {
            return false;
          }
          subBoxArr.push(val);
        }
      }
    }

    if (colStart + subBoxLen < board.length - 1) {
      colStart = colStart + subBoxLen;
    } else {
      rowStart = rowStart + subBoxLen;
      colStart = 0;
    }
  }
  return true;
};
