//  nested objects = Objects inside of other objects
//                                  Allows you to represent more complex data strucutres
//                                  Child Object is enclosed by Parent Object

//                                  Person{Address{}, ContaceInfo{}}
//                                  ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

const Person = {
    fullName : "Spongebob Squarepants",
    age : 23,
    isEmployed : true, 
    hobbies : ["karate", "jellyfishing", "cooking"],
    address : {
        street : "124 Conch St.",
        city : "Bikini Bottom",
        country : "Int. Water"
    }
}

console.log(Person.fullName);
console.log(Person.age);
console.log(Person.isEmployed);
console.log(Person.hobbies); 
// console.log(Person.hobbies[0], Person.hobbies[1], Person.hobbies[2]); 
console.log(Person.address);
// console.log(Person.address.street, Person.address.city, Person.address.country)

// Another Example
class newPerson {
    constructor(name, age, ...address){
        this.name = name,
        this.age = age,
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country){
        this.street = street,
        this.city = city, 
        this.country = country;
    }
}

const person1 = new newPerson("Spongebob", 23, "124 Conch St.",
                                                                                    "Bikini Bottom",
                                                                                    "Int. Waters"
)
const person2 = new newPerson("Patrick", 27, "128 Conch St.",
                                                                                    "Bikini Bottom",
                                                                                    "Int. Waters"
)
const person3 = new newPerson("Squidward", 23, "126 Conch St.",
                                                                                    "Bikini Bottom",
                                                                                    "Int. Waters"
)

function displayPerson(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.country}`);
    console.log('---');
}

displayPerson(person1);
displayPerson(person2);
displayPerson(person3);