/* There is a store and reducer in the code editor for managing to-do items. 
Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state. 
There are a few ways to accomplish this with standard JavaScript or ES6. 
See if you can find a way to return a new array with the item from action.todo appended to the end.
*/

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);



/* Use the Spread Operator on Arrays
One solution from ES6 to help enforce state immutability in Redux is the spread operator: .... 
The spread operator has a variety of applications, 
one of which is well-suited to the previous challenge of producing a new array from an existing array.

For example, if you have an array myArray and write:
    let newArray = [...myArray];

newArray is now a clone of myArray. Both arrays still exist separately in memory. 
If you perform a mutation like newArray.push(5), myArray doesn't change. 
The ... effectively spreads out the values in myArray into a new array. 
To clone an array but add additional values in the new array, you could write [...myArray, 'new value']. 
This would return a new array composed of the values in myArray and the string new value as the last value. 
The spread syntax can be used multiple times in array composition like this, 
but it's important to note that it only makes a shallow copy of the array. 
That is to say, it only provides immutable array operations for one-dimensional arrays.

CHALLENGE:
Use the spread operator to return a new copy of state when a to-do is added.
*/
const immutableReducer1 = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Don't mutate state here or the tests will fail
        return state = [...state, action.todo];
      default:
        return state;
    }
  };
  
  const addToDo1 = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store1 = Redux.createStore(immutableReducer1);


  /* Remove an Item from an Array
  Time to practice removing items from an array. 
  The spread operator can be used here as well. Other useful JavaScript methods include slice() and concat().

  CHALLENGE:
  The reducer and action creator were modified to remove an item from an array based on the index of the item. 
  Finish writing the reducer so a new state array is returned with the item at the specific index removed.
  */
  const immutableReducer2 = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Don't mutate state here or the tests will fail
        return state.filter( (item, index) => index != action.index)
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store2 = Redux.createStore(immutableReducer2);

