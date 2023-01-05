function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }


  
  /* If object has both Own and Prototype properties */
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps1 = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps1.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

console.log(ownProps1);
console.log(prototypeProps);

/* Understand the Constructor Property */
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}


/* Multiple Prototype Properties */
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,   //Remember to Set the Constructor Property when Changing the Prototype
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


/* Understand the isInstanceOf() and isPrototypeOf() methods  */
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

// Does duck inherit it's prototype from Bird
Bird.prototype.isPrototypeOf(duck);


/* Use prototype inheritance so you don't repeat yourself DRY */

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
  
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


