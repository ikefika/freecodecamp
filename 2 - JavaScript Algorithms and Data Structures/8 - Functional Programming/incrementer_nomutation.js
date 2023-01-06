// Challenge: Build the function incrementer, so that it returns the global variable fixedValue plus 1, without mutation
// The global variable
let fixedValue = 4;

function incrementer(value) {    // Rule of FP: declare dependencies clearly as arguments
  // Only change code below this line
  return value + 1;    // Rule of FP: don't mutuate

  // Only change code above this line
}

incrementer(fixedValue);