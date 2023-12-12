//complete this code
class Animal {

	constructor(species){
		this.species = species;
	}

	get species(){
		return this.species;
	}

	makeSound(){
		console.log("animal sound")
	}
}

class Dog extends Animal {
	constructor(species) {
		 super(species);
  }

	 bark() {
    console.log("Woof");
  }

  
  makeSound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
	constructor(species) {
	   super(species);
  }
	 purr() {
    console.log("Purr");
  }

  
  makeSound() {
    console.log("Meow");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
