module.exports = function reverse (n) {
  str = n.toString();
  a = str.split("").reverse().join("");
  return Math.abs(a);
}
