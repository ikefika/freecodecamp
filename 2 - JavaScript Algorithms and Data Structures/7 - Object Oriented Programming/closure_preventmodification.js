// The simplest way to make a public property private is by creating a variable within the constructor function.
function Bird() {
    let hatchedEgg = 10;
  
    this.getHatchedEggCount = function() { 
      return hatchedEgg;
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount();

  // getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg.



// Challenge: 
function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
     
}
  
let duck = new Bird();
console.log(duck.getWeight());