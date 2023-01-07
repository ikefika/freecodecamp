/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
  
  
    return str.replace(/([a-z])([A-Z])/g, "$1 $2")  // Replace low-upper case to low-space-uppercase
      .toLowerCase()                                // Split on whitespace and underscores and join with dash
      .split(/(?:_| )+/)
      .join("-");
  }
  
  spinalCase('This Is Spinal Tap');
  
  // test here
  spinalCase("This Is Spinal Tap");

/* Code Explanation
regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
While returning the string, another replace() replaces spaces and underscores with dashes using regex.

*/









  /* Solution 2: More elegant
  function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
Code Explanation
Split the string at one of the following conditions (converted to an array)
a whitespace character [\s] is encountered
underscore character [_] is encountered
or is followed by an uppercase letter [(?=[A-Z])]
Join the array using a hyphen (-)
Lowercase the whole resulting string
  */