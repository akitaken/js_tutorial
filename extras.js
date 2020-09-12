// Adds a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines)

String.prototype.blank = function() {
  blanko = /^\s+$/;
  return ((this == "") ||
  (blanko.test(this))
  )
}








// Adds a last method to the Array object prototype that returns the last element of an array
Array.prototype.last = function() {
  return this.slice(-1);
}
