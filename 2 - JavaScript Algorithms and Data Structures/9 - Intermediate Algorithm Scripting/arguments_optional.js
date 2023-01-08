/* Arguments Optional
    Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
    Calling this returned function with a single argument will then return the sum:
        var sumTwoAnd = addTogether(2);
        sumTwoAnd(3) returns 5.

    If either argument isn't a valid number, return undefined.
*/

function addTogether(...args) {
    const [first, second] = args;
    if (args.length === 1 && typeof first === 'number') {
      return num => {
        if (typeof num === 'number') {
          return first + num;
        }
      }
    }
    if (typeof first === 'number' && typeof second === 'number') {
      return first + second;
    }
  }

/* Another Solution */
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}
