function Dog(name, color) {
    this.name = name;
    this.color = color;
  }
  Dog.prototype.numLegs = 4;    // Using prototype method to reduce duplicate code
  let terrier = new Dog("Rupert", "brown");