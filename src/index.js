module.exports = function reverse (n) {
    b = Math.abs(n);
  str = b.toString();
  a = str.split("").reverse().join("");
  return a;

}
