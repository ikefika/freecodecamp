/* Sort an Array Alphabetically using the sort Method
    The sort method sorts the elements of an array according to the callback function.
    The purpose of the compare function is to define an alternative sort order.
    The compare function should return a negative, zero, or positive value, depending on the arguments:


    For example: Sorting Numbers
*/
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
ascendingOrder([1, 5, 2, 3, 4]);
// This would return the value [1, 2, 3, 4, 5].

// Also: Sorting alphabets
function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  
  reverseAlpha(['l', 'h', 'z', 'b', 's']);
// This would return the value ['z', 's', 'l', 'h', 'b'].


/* Challenge: Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. 
The function should return the sorted array.
*/
function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort();
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));