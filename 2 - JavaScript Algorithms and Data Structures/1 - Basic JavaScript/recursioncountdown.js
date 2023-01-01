// Only change code below this line
function recursioncountdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = recursioncountdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line