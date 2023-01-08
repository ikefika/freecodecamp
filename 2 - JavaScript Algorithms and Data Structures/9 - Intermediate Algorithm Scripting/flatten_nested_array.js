/* Flatten a nested array. You must account for varying levels of nesting. 

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Global variables should not be used.
*/

function steamrollArray(arr) {
    const flatArr = [].concat(...arr);  // create an empty array (flatArr) and unpack the elements of arr (...arr) into it via concat
    return flatArr.some(Array.isArray) ? steamrollArray(flatArr) : flatArr;     // if some elements of flatArr are arrays, recursively unpack them, otherwise, return the flatArr
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  