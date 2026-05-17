//  super = keyword is used in classes to call the constructor or
//                 access the properties and methods of a parent (superclass)
//                     this = this.object
//                      super = parent

class Animal {
  constructor(name, age) {
    ((this.name = name), (this.age = age));
  }

  eat(food) {
    console.log(`${this.name} is eating ${this.food}`); //for fish
    // console.log(`${this.name} is eating ${food}`);  //for rabbit
  }
}

class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    (super(name, age), (this.runspeed = runspeed));
  }

  eating(food) {
    super.eat(food);
    //  to use this.food instead of just food, you need to define
    // this.food = food in the constructor like in Fish example
    // also in the parent class (Animal)
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed, food) {
    (super(name, age), (this.swimSpeed = swimSpeed), (this.food = food));
  }

  eating() {
    super.eat(this.food);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    (super(name, age), (this.flySpeed = flySpeed));
  }
}

const rabbit = new Rabbit("Rabbit", 1, 23);
const fish = new Fish("Fish", 2, 26, "toes");
const hawk = new Hawk("Hawk", 3, 30);

console.log(
  `${rabbit.name} aged ${rabbit.age} is running at ${rabbit.runspeed}mph.`,
);
console.log(
  `${fish.name} aged ${fish.age} is running at ${fish.swimSpeed}mph.`,
);
console.log(`${hawk.name} aged ${hawk.age} is running at ${hawk.flySpeed}mph.`);

// rabbit.eating("carrot");
fish.eating();
