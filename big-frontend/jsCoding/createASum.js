function sum(num) {
  const fn = (num2) => sum(num + num2);
  fn.valueOf = () => num;
  return fn;
}
