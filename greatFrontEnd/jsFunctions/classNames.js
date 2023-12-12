// classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

// Implement the classnames function.

// Examples
// classNames('foo', 'bar'); // 'foo bar'
// classNames('foo', { bar: true }); // 'foo bar'
// classNames({ 'foo-bar': true }); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// Arrays will be recursively flattened as per the rules above.

// classNames('a', ['b', { c: true, d: false }]); // 'a b c'
// Values can be mixed.

// classNames(
//   'foo',
//   {
//     bar: true,
//     duck: false,
//   },
//   'baz',
//   { quux: true },
// ); // 'foo bar baz quux'
// Falsey values are ignored.

// classNames(null, false, 'bar', undefined, { baz: null }, '');

/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  // throw 'Not implemented!';
  if (!args.length) {
    return "";
  }
  return args
    .reduce((a, x) => {
      if (typeof x !== "object") {
        // let res = x ?
        return a + (x ? " " + x.toString() : "");
      } else if (Array.isArray(x)) {
        return a + " " + classNames(...x);
      } else {
        let res = "";
        // x.forEach((val) => {
        for (let val in x) {
          res += x[val] ? " " + val : "";
        }
        return a + res;
      }
    }, "")
    .trim();
}
