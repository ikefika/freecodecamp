// Bird is a constructor that inherits its prototype from Animal
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// add behavior that is unique to Bird objects
Bird.prototype.fly = function() {
    console.log("I'm flying!");
  };

// Now instances of Bird will have both eat() and fly() methods:
let duck = new Bird();
duck.eat();
duck.fly();


/* Challenge: Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
Then add a bark() method to the Dog object so that beagle can both eat() and bark().
The bark() method should print Woof! to the console.
*/
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
}

// Only change code above this line
let beagle = new Dog();

beagle.eat();
beagle.bark();