/* Apply Functional Programming to Convert Strings to URL Slugs
    Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes.
    For example, if you write a Medium post titled Stop Using Reduce, 
    it's likely the URL would have some form of the title string in it (.../stop-using-reduce).
    You may have already noticed this on the freeCodeCamp site.

    CHALLENGE:
    Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
    You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

    1. The input is a string with spaces and title-cased words
    2. The output is a string with the spaces between words replaced by a hyphen (-)
    3. The output should be all lower-cased letters
    4. The output should not have any spaces
*/

function urlSlug(title) {
    return title.split(" ")         // split string into array with individual words
      .filter(item => item != "")   // remove extra spaces
      .map(item => item.toLowerCase())  // convert to lowercase
      .join("-");                   // join words using hyphen (-) 
  }
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
  
  console.log(urlSlug(" Winter Is  Coming"));