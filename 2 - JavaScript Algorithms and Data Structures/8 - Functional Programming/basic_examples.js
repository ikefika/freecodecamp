// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

/* Principles of Functional Programming 
1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
    Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the 
    existing variable and not a copy. So changing a value in newArr would change the value in arrVar.
2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, 
    and not on any global object or variable.
*/