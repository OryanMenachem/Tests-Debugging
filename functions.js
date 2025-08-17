export function sumTo(n) {
  // if (n < 0 || typeof n != "number") {
  //   return false;
  // }
  let s = 0;
  for (let i = 1; i < n; i++) {
    s += i;
  }
  return s;
}

console.log(sumTo(4));
