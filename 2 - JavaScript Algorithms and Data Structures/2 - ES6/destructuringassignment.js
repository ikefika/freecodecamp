const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  /*ES5 code
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  */
  
  /*ES6 version - Destructuring Assignment*/
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line

  /*Here's how you can give new variable names in the assignment:*/
  const user = { name: 'John Doe', age: 34 }; //initial declaration
  const { name: userName, age: userAge } = user; //using destructuring to rename properties

  /* Freecodecamp challenge Example 
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  // Only change code above this line

  */