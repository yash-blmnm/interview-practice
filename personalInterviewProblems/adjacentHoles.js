function findAdjacentHoles(arr) {
  if (arr.length === 1) {
    return 0;
  }
  let newArr = [...arr];
  let rowMatch = 0;
  let colMatch = 0;
  for (let i = 0; i < newArr.length - 1; i++) {
    let val = newArr[i].split("");
    let nextVal = newArr[i + 1].split("");
    console.log(val, nextVal);
    for (let j = 0; j < val.length; j++) {
      console.log(val[j], nextVal[j]);
      console.log(val[j] === "0" && nextVal[j] === "0");
      if (val[j] === "0" && nextVal[j] === "0") {
        rowMatch += 1;
        val[j] = "1";
        nextVal[j] = "1";
      }
    }
    newArr[i] = val.join("");
    newArr[i + 1] = nextVal.join("");
  }
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i].split("");
    for (let j = 0; j < val.length - 1; j++) {
      if (val[j] === "0" && val[j + 1] === "0") {
        colMatch += 1;
        val[j] = "1";
        val[j + 1] = "1";
      }
    }
    arr[i] = val.join("");
  }

  return colMatch + rowMatch;
}

const res = findAdjacentHoles(["11101", "10101", "10010", "11111"]);
console.log(res);
