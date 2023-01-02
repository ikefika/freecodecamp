// In ES6, a class declaration has a constructor method that is invoked with the new keyword.
// If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.
// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
  }

// Implicit constructor 
class Rocket {
    launch() {
      console.log("To the moon!");
    }
  }
  
  const zeus = new SpaceShuttle('Jupiter');
  // prints To Jupiter! in console
  zeus.takeOff();
  
  const atlas = new Rocket();
  // prints To the moon! in console
  atlas.launch();


// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

// Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'