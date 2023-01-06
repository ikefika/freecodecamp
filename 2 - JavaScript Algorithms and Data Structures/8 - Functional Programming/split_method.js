/* Split a String into an Array Using the split Method
    The split method splits a string into an array of strings.
    It takes an argument for the delimiter, which can be 
        a character to use to break up the string; or 
        a regular expression.
    
    For example, if the delimiter is a space, you get an array of words
    if the delimiter is an empty string, you get an array of each character in the string.

*/
const str = "Hello World";
const bySpace = str.split(" ");
// bySpace would have the value ["Hello", "World"]

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
// byDigits would have the value ["How", "are", "you", "today"].


/* CHALLENGE: Use the split method inside the splitify function to split str into an array of words.
    The function should return the array.
    Note that the words are not always separated by spaces, and the array should not contain punctuation.
*/
function splitify(str) {
    // Only change code below this line
    return str.split(/[^\w]/);  // Used regex to match all characters that are not alphabets
  
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));