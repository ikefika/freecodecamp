/* Palindrome Checker
    Return true if the given string is a palindrome. Otherwise, return false.
    A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
    Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
    We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
    We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  // return leftArr === rightArr
    return str.replace(/[\W_]/g, "")  // Remove all spaces and special characters
    .split("")    // Convert to Array with individual characters
    .filter( (char, index, arr) => index < ((arr.length)-1)/2)  // filter out leftArr
    .join("").toLowerCase()   // Convert leftArr to string and make lowercase
    ===
    str.replace(/[\W_]/g, "")  // Remove all spaces and special characters
    .split("")    // Convert to Array with individual characters
    .filter( (char, index, arr) => index > ((arr.length)-1)/2)    // filter out rightArr
    .reverse().join("").toLowerCase()    // Reverse rightArr, convert to string and make lowercase
  
  
    /* Prototype code
    // Remove all spaces and special characters: Regex and replace()
    let newStr = str.replace(/[\W_]/g, "");
    
    // Convert to Array with individual characters
    newStr = newStr.split("");
  
    // Split into two Arrays: leftArr and rightArr
      //  if even: two arrays normal split
      //  if: odd: two arrays, remove centre character
    let leftArr=[];
    let rightArr=[];
    
      
    if (newStr.length % 2 == 0) {
      leftArr = newStr.slice(0, ((newStr.length)/2));
      rightArr = newStr.slice(((newStr.length)/2), newStr.length);
    } else {
      leftArr = newStr.slice(0, ((newStr.length)-1)/2);
      rightArr = newStr.slice((((newStr.length)-1)/2)+1, newStr.length);
    }
    
    // Convert leftArr and the reverse of rightArr to lowercase strings
    let leftStr = leftArr.join("").toLowerCase();
    let rightStr = rightArr.reverse().join("").toLowerCase();
  
    // Return true if leftStr is same as rightStr
    return leftStr === rightStr;
    */
  }
  
  //palindrome("eye");
  console.log(palindrome("_eye"));