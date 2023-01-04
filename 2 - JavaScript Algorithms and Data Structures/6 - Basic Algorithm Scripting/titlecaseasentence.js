/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function titleCase(str) {
    let newArr = str.split(" ");
    let updatedArr = [];
    for (let i = 0; i < newArr.length; i++) {
      updatedArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase();
    }
    
    return updatedArr.join(" ");
  }
  
  titleCase("I'm a little tea pot");