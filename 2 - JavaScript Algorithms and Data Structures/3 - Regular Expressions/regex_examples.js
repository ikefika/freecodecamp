// Write a regex fccRegex to match freeCodeCamp, no matter its case.
// Apply the method .test to the regex with the string in parentheis

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

// Write a regex fccRegex1 to search for more than one string pattern.
// Apply the method .test with | within the regex with the string in parentheis

let myString1 = "The cat sits in the shade";
let fccRegex1 = /cat|dog|sheep/; // Change this line
let result1 = fccRegex.test(myString);


// Extract Regex Matches
// Apply the .match method on a string and pass in the regex inside the parentheses.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result2 = extractStr.match(codingRegex); // Change this line

// Find more than the first literal match: the global flag:  g
let extractmultipleStr = "Repeat Repeat Repeat";
let multipleRegex = /Repeat/gi;
let result3 = extractmultipleStr.match(multipleRegex);

// Using the wild card . to match similar patterns
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result4 = unRegex.test(exampleStr);

// Character matching
/*Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result5 = quoteSample.match(vowelRegex); // Change this line

// Match a range of Characters including numbers, the hyphen - operator
/* Match all the letters in the string quoteSample.
Note: Be sure to match both uppercase and lowercase letters.
*/
let quoteSample1 = "The quick brown fox jumps over the lazy dog. 123456789";
let alphabetRegex = /[a-z2-6]/gi; // Change this line
let result6 = quoteSample1.match(alphabetRegex); // Change this line

// Specify character that you do not want to match. the ^ operator
//Create a single regex that matches all characters that are not a number or a vowel.
// Remember to include the appropriate flags in the regex.
let quoteSample2 = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result7 = quoteSample2.match(myRegex); // Change this line

// Find characters that repeat one or more times, the + operator
let difficultSpelling = "Mississippi";
let myRegex1 = /s+/g; // Change this line
let result8 = difficultSpelling.match(myRegex1);

// Find characters that repeat zero or more times, the * operator
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

// Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex2 = /<.*?>/; // returns <h1>, instead of <h1>Winter is coming</h1>
let result9 = text.match(myRegex2);

// Match beginning string patterns: using ^ outside a character set
// The first test call would return true, while the second would return false.
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

// Match Ending String patterns, $ character
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// The first test call would return true, while the second would return false.

// Shorthand Character classes: 
// \w = [A-Za-z0-9_]    This character class matches upper and lowercase letters plus numbers.
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// \W = [^A-Za-z0-9_]    This character will return special (non-alphanumeric) characters (opposite of alphanumerics).
let shortHand1 = /\W/;
let numbers1 = "42%";
let sentence = "Coding!";
numbers1.match(shortHand1);
sentence.match(shortHand1);

// Shorthand \d = [0-9]
// Shorthand \D = [^0-9]
// Use the shorthand character class \d to count how many digits are in movie titles. 
// Written out numbers ("six" instead of 6) do not count.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result10 = movieName.match(numRegex).length;
