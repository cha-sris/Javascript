//  object = A collection of related properties and/or methods
//                  Can create real world objects (people, products, places)
//                  object = {key : value,
//                                  fucntion()}

//  this = reference to the object where THIS is used
//            (the object depends on the immediate context)
//             person.name = this.name

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 23,
  isEmployed: true,
  introduce: function () {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old and employed? ${this.isEmployed}`,
    );
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 25,
  isEmployed: false,
  introduce() {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and unemployed? ${this.isEmployed}`)
  }
};

person1.introduce();
person2.introduce();

// The method already has everything it needs from the object's properties. No parameters are required.
// You add parameters when the method needs external data that isn't already part of the object. 

//  Example
// const person = {
//   name: "Spongebob",
//   greet(greetingWord) {           // ← parameter needed
//     console.log(`${greetingWord}, I'm ${this.name}!`);
//   }
// };

// person.greet("Hi");     // "Hi, I'm Spongebob!"
// person.greet("Hello");  // "Hello, I'm Spongebob!"