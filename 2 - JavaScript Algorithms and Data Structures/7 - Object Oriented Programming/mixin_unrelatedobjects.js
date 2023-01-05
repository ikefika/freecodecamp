/* Inheritance does not work well for unrelated objects like Bird and Airplane.
For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions. */
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };

// The flyMixin function takes any object and gives it the fly method.
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
let plane = {
    model: "777",
    numPassengers: 524
};
  
flyMixin(bird);
flyMixin(plane);

// Test
bird.fly();
plane.fly();



// Challenge: Create a mixin named glideMixin that defines a method named glide.
// Then use the glideMixin to give both bird and boat the ability to glide.

let bird2 = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding, Yaay!");
    }
  };
  
  glideMixin(bird2);
  glideMixin(boat);
  
  bird2.glide();
  boat.glide();

