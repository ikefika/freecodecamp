/* Pig Latin
    Pig Latin is a way of altering English Words. The rules are as follows:
    - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
    - If a word begins with a vowel, just add "way" at the end.
*/
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
// Using substring()
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }
  
  // test here
  translatePigLatin("consonant");

  /* Explanation
  Code Explanation
First, check to see if the string begins with a vowel.
The regex looks at the beginning of the string ^ for one of the specified characters [aeiou]
If it does, you only need to return the original string with “way” appended on the end.
If the string does not start with a vowel, we want to build a string which contains every consonant before the first vowel in the provided string.
To do this, look at the beginning of a string ^ for one or more characters + NOT specified [^aeiou].
If there is a match (and in this case, there always will be), match() returns an Array with the matched string as the first element, which is all we want. Grab it with [0].
Now, we can start building our Pig Latin string to return. This can be built in three parts:
The first part contains all of the characters in the original string, starting from the first vowel. We can easily get these characters by creating a substring of the original string, with its starting index being the first vowel.
The second part contains the consonant string we just built. (If you add the second and first parts of this string together, you will get the original string.)
The final part contains “ay”.
  */