// Input:
// const str = 'Hello, world'; 
// const styleArr = [[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']];

// Output: 
// '<i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u>'


function encodeHTML(str, styleArr) {
    const strCharIndexMAp = {}
    let htmlStr = styleArr.reduce((result, arrVal, index) => {
        const [start, end, tag] = arrVal;
        str.split('')
    }, str)

    return htmlStr;
}