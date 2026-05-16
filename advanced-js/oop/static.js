//  static = keyword that defines properties or methods that belong to a class itself
//                  rather than the objects created from that class
//                   (class owns anything static, not the object)

class mathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCIrcumference(radius) {
    return 2 * this.PI * Math.pow(radius, 2);
  }
}

console.log(mathUtil.PI);
console.log(mathUtil.getDiameter(5));
console.log(mathUtil.getCIrcumference(7).toFixed(2));

//  Another Example

class User {
  static counter = 0;

  constructor(username) {
    this.username = username;
    User.counter++;
  }

  static staticMethod() {
    console.log(`This is a static method`);
    console.log(`There are ${this.counter} users online.`);
  }

  nonStatic() {
    console.log(`This is a non-static method`);
    console.log(`There are ${this.counter} users online`);
  }
}

const user = new User("Spongebob");
const user2 = new User("Spongebob");
const user3 = new User("Spongebob");
const user4 = new User("Spongebob");

User.staticMethod();
user.nonStatic();
