/* Sometimes whitespace characters around strings are not wanted but are there. 
Typical processing of strings is to remove the whitespace at the start and end of it.
*/

// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line