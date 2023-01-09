/* Caesars Cipher
    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
    In a shift cipher the meanings of the letters are shifted by some set amount.
    A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
    Write a function which takes a ROT13 encoded string as input and returns a decoded string.
    All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

// Prototype Pseudocode: Solution 1
    // have a string of the alphabet
    // have a string of the alphabet ciphered
    // do a replace based of of indexes

    function rot13(str) {
        // have a string of the alphabet
        const mainAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // have a string of the ciphered alphabet 
        const rot13Alpha = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        
        // do a replace based on indexes
        return str.replace(/[a-z]/gi, letter => rot13Alpha[mainAlpha.indexOf(letter)]);
      }
      
      console.log(rot13("SERR PBQR PNZC"));

// Prototype Pseudocode: Solution 2
//  get UTF code for letter 
//  add 13 or subtract 13 from that code (add if before m subtract after m)
//  get string based off that code
function rot13(str) {
    return str.replace(/[a-z]/gi,
        letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
  }
  
  console.log(rot13("SERR PBQR PNZC"));