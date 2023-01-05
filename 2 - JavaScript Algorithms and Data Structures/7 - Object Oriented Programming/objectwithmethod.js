let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => "This dog has " + this.numLegs + " legs."
  };
  
  dog.sayLegs();