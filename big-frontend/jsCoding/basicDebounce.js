// Debounce is a common technique used in Web Application, in most cases using lodash solution would be a good choice.

// could you implement your own version of basic debounce()?

// In case you forgot, debounce(func, delay) will returned a debounced function, which delays the invoke.

// Here is an example.

// Before debouncing we have a series of calling like

// ─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
// After debouncing at wait time of 3 dashes

// ─ ─ ─ ─ ─ ─ ─ ─ D ─ ─ ─ ─ ─ ─ ─ ─ ─ G

// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  let timeInterval = null;

  return function (...args) {
    clearTimeout(timeInterval);
    timeInterval = setTimeout(() => {
      func.call(this, args);
    }, wait);
  };
}
