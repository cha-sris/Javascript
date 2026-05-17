//  inheritance = allows a new class to inherit properties and methods
//                          from an existing class (parent -> child)
//                           helps with code reusablitlity

class Animal {
  // This is a class field – no let/const needed
  // using let/const here will throw an error
  alive = true;

  static eat() {
    // uses the class name itself rather than its property
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    // uses the property
    console.log(`This ${this.name} is sleeping `);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// rabbit.eat(); // will throw an error
Rabbit.eat();
rabbit.sleep();
rabbit.run();

Fish.eat();
fish.sleep();
fish.swim();

Hawk.eat();
hawk.sleep();
hawk.fly();
