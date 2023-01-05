// Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () { console.log("Chirp, chirp!");  } )();

// This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.


// Challenge: Write an anonymous immediately invoked function expression (IIFE)
/*

*/

(function () {console.log("A cozy nest is ready");} )()




/* Use IIFE to Create a Module */
// IIFE is often used to group related functionality into a single object or module.

// For instance instead of:
function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  }
  function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
  }

  // We can group these mixins into a module as follows:
  let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();

// To use the  module
motionModule.glideMixin(duck);
duck.glide();




// Challenge: Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
  })()
  
