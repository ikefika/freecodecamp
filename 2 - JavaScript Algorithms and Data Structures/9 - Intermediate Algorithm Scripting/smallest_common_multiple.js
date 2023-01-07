/* Smallest Common Multiple
    Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
    as well as by all sequential numbers in the range between these parameters.

    The range will be an array of two numbers that will not necessarily be in numerical order.

    For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
    that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/


// Solution 1 - Looping approach (Click to Show/Hide)
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

/* Explanation: In this solution, we check every multiple of the largest value in the range 
    until we find a value that is divisible by every value in the range.

    The upper bound for this loop is the product of all values in the provided range, 
    because this number will be divisible by every value in the range.
*/


//  Solution 2 - ES6 looping (Click to Show/Hide)
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

// This solution uses ES6 syntax to condense the logic in Solution 1.




