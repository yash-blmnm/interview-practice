// Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

// Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func.apply(this, args);
    }, wait);
  };
}

/* Question Part */

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0
