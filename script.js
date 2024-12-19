'use strict';
console.log('Hello');
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngrediant, ...otherIngrediants) {
    return [mainIngrediant, otherIngrediants];
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del; sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// // Destructuring Arrays
// const liverpool = ['Alison', 'Trent', 'Grav', 'Salah'];

// const [gk, def, mid, fwd] = liverpool;
// console.log(gk, def, mid, fwd);

// let [first, second] = restaurant.categories;

// console.log(first, second);

// // Switching variables

// [first, second] = [second, first];

// console.log(first, second);

// // receive 2 return values from a function
// restaurant.order(2, 0);

// console.log(restaurant.order(2, 0));

// const [starter, main] = restaurant.order(2, 0);

// console.log(starter, main);

// // With a nested array

// const nested = [2, 4, [5, 6]];

// const [firstValue, , nestedArray] = nested;

// console.log(firstValue, nestedArray);

// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// // Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Destructuring Objects

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters } = restaurant;

// console.log(menu, starters);

// Mutating Variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

// console.log(a, b);

// Nested Objects

const {
  fri: { open, close },
} = hours;

// The spread operator

// We use the spread operator whenever otherwise we would write multiple values seprated by commas

const arr = [3, 4, 5];

const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

const goodNewArray = [1, 2, ...arr];

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// Copying Arrays

const mainMenuCopy = [...restaurant.mainMenu];

// Joining Arrays

const joinedMenu = [...restaurant.starterMenu, restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets. Not OBJECTS!!

const str = 'Matthew';

const letters = [...str, ' ', 's.'];

// const ingrediants = [
//   prompt(`Lets make pasta! Ingrediant 1?`),
//   prompt(`Ingrediant 2?`),
//   prompt(`Ingrediant 3?`),
// ];

// Objects using spred operator

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';

// Rest Pattern

// Its called Rest because it takes the rest of the elements that are unused in the destructuring. Remember, Rest takes seperate values and pouts them in an array
const [e, f, ...otherFood] = [1, 2, 3, 4, 5];

// Rest pattern must always be the last element because its the REST!
const [pizza, , Risotto, ...fullMenu] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// Rest in Objects

// const { sat, ...weekDays } = restaurant.openingHours;

// Rest in functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('Chicken', 'Onion', 'Mushroom', 'Spinach');
restaurant.orderPizza('Chicken');

// Logical operators can use any data type, return any data type they also do short-circuiting

// Or operator returns first truthy value

// console.log('' || 'Matthew'); // Matthew
// console.log(true || 0); // true
// console.log(undefined || null); // null
// restaurant.numGuests = 23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

// AND operator returns first falsy value or the last value
// console.log(7 && 'Matthew');

if (restaurant.pizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Above and below are the same
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nulish Coalescing operator

// Nulish values are null and undefined, (NOT 0 or empty strings)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;

const guestsCorrect = restaurant.numGuests ?? 10;

// Logical Asignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: '20',
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// Remember: the or operator returns the first truthy value
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner &&= '<Anonymous>';

// Looping Arrays: The for of Loop

const loopMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of loopMenu) console.log(item);

// Entries methoud goes inside the parenthisis of the for of loop
for (const [i, el] of loopMenu.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

//Enhanced object literals
