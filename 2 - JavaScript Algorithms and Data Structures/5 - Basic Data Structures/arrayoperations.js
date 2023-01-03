// Basic functions: push(), unshift(), pop(), shift()

// Splice with two Arguments: splice(start_index, number_to_remove)
let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
// Here we remove 2 elements, beginning with the forth element (at index 3)..
// newArray has the value ['really', 'happy'].

// Splice with three arguments: splice(start_index, number_to_remove, array_of_items_to_add)
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
// The second occurrence of 12 is removed, and we add 13 and 14 at the same index.
// The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

// Slice: Copy out without affecting array
// slice(start_index, stop_index) Note, element at stop_index is excluded
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather would have the value ['snow', 'sleet']
// weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].


// Copy and Array with the Spread Operator
// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
// The function is supposed to return a new array made up of num copies of arr.
// 

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  console.log(copyMachine([true, false, true], 2));


/* Check For The Presence of an Element With indexOf() */
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
// indexOf('dates') returns -1, indexOf('oranges') returns 2, and 
// indexOf('pears') returns 1 (the first index at which each element exists).

// Using for loops to iterate through Arrays

