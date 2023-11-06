// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let charMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    } 
    const resStack = s.split('').reduce((a,x) => {
        const lastChar = a[a.length - 1];
        if(charMap[lastChar] === x) {
            a.pop();
        }else {
            a.push(x);
        }
        return a;
    }, []);

    return !resStack.length;
    
};