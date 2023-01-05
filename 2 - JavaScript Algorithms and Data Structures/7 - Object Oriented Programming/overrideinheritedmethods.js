/* It's possible to override an inherited method
by adding a method to ChildObject.prototype using the same method name as the one to override.
*/
function Animal() { }                   // Declare Animal object
Animal.prototype.eat = function() { 
  return "nom nom nom";
};
function Bird() { }                     // Declare Bird Object

Bird.prototype = Object.create(Animal.prototype);   // Make Bird a child of Animal

Bird.prototype.eat = function() {       // Override eat method from Animal (parent)
  return "peck peck peck";
};



// Challenge: Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function() { return "Alas, this is a flightless bird." };

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());