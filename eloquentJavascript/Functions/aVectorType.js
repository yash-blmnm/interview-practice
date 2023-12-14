// Your code here.

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  minus(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
