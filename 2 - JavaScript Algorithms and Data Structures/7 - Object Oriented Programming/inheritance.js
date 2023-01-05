// Creating a supertyp called Animal to define behaviours to be inherited by child objects
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Two method for reusing the methods within Animal
let animal = new Animal();

let animal1 = Object.create(Animal.prototype);   // This is better as it sets "Animal.prototype" as the new object's prototype

// You can test this using the below
animal.eat();
animal instanceof Animal;


// Challenge: Use Object.create to make two instances of Animal named duck and beagle.


// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line
let duck1 = Object.create(Animal.prototype); // Change this line
let beagle1 = Object.create(Animal.prototype); // Change this line


/* Set the Child's Prototype to an Instance of the Parent */
function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);    // Animal -> Dog -> beagle

let beagle2 = new Dog();


/* Reset an Inherited Constructor Property */
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);   // This will change the constructor property to Animal
let duck2 = new Bird();
duck2.constructor   // This will return "Animal"

Bird.prototype.constructor = Bird;  // This manually changes the constructor property back to Bird
duck.constructor    // This will now return Bird



// Challenge:Fix the code so duck.constructor and beagle.constructor return their respective constructors.
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck3 = new Bird();
let beagle3 = new Dog();

console.log(duck3.constructor);
console.log(beagle3.constructor);

