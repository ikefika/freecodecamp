/* Convert HTML Entities
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]); // replace() searches for a string, in this case using regex, and replaces it with the output of a function
  }
  
  // test here
  convertHTML("Dolce & Gabbana");

  /* Code Explanation
Create an object to use the Lookup functionality and easily find the characters.
Use replace() to replace characters with regex.
The first argument for replace() is a regex that catches all the target characters and puts them into a capturing group.
The second arguments for replace() is a function with the matched character as a parameter. It returns the correspondant entity from htmlEntities.
  */