// Use the delete Keyword to Remove Object Properties
// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

/* Check if an Object has a Property*/
users.hasOwnProperty('Alan');
'Alan' in users;
// Both of these would return true.

/* Iterate Through the Keys of an Object with a for...in Statement */
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  for (let user in users) {
    console.log(user);
  }
  // This would log Alan, Jeff, and Sarah - each value on its own line.

  /* Generate an Array of All Object Keys with Object.keys() */
  let users1 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users1));