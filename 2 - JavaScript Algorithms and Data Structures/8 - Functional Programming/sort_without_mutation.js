/* Return a Sorted Array Without Changing the Original Array
    One way to avoid this is to first concatenate an empty array to the one being sorted
    (remember that slice and concat return a new array), then run the sort method.
*/
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort((a, b) => a-b);    // use concat to join the arr to an empty array to avoid mutation

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));