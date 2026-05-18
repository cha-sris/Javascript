const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "brown/white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

fruits.push({ name: "grapes", color: "green/purple", calories: 62 });

console.log(fruits);

// -------------------forEach()----------------------
fruits.forEach((fruitElement) => {
  console.log(fruitElement);
});

//---------------------map()--------------------------
const fruitName = fruits.map((fruit) => fruit.name);

console.log(fruitName);

//---------------------filter()--------------------------
const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

console.log(lowCalFruits);

//---------------------reduce()--------------------------
const maxCalFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max,
);

const minCalFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min,
);

console.log(maxCalFruit);
console.log(minCalFruit);
