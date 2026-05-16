//  constructors = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
  (((this.make = make),
  (this.model = model),
  (this.year = year),
  (this.color = color)),
    (this.drive = () => {
      console.log(`You drive ${this.make + " " + this.model}`);
    }));
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car1.drive();
