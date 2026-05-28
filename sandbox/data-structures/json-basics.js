//  JSON = (Javascript Object Notation) data-interchange format
//              Used for exchanging data between a server and a web application
//              JSON files {key:value} OR [value1, value2, value3]

//              JSON.stringify() = converts a JS object to a JSON string.
//              JSON.parse()  = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["JellyFishing", "Karate", "Cooking"],
};
const people = [
  {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Patrick",
    age: 34,
    isEmployed: false,
  },
  {
    name: "Squidward",
    age: 45,
    isEmployed: true,
  },
  {
    name: "Sandy",
    age: 27,
    isEmployed: false,
  },
];

const jsonString = JSON.stringify(people);

console.log(jsonString);

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["JellyFishing", "Karate", "Cooking"]
}`;
const jsonPeople = `[
  {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
  },
  {
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
  },
  {
    "name": "Squidward",
    "age": 45,
    "isEmployed": true
  },
  {
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
  }
]`;

const parseData = JSON.parse(jsonNames);

console.log(parseData);

fetch("data-structures/names.json")
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));