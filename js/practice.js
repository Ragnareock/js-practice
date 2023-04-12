// const user = {
//   firstName: 'Andriy',
//   lastName: 'Lobash',
//   age: 37,
//   login: 'test@gmail.com',
// };

// console.log(user);

  // ? Напиши скрипт управління особистим кабінетом інтернет-банку.
  // ? Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
  // ? Типів транзакцій лише два.
  // ? Можна покласти або зняти гроші з рахункку.
  // ? Кожна транзакція це об'єкт із властивостями: id, type та account.

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }

// const account = {
//   startId:0,
//   balance:0,
//   transactions: [],
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.generateId()
//     }
//   },
//   generateId() {
//     return this.startId +=1
//   },
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
//     this.balance += amount;
// },
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
//       this.balance -= amount;
//     }
//     else {
//       console.log('Не можливо зняти суму більшу за тієї, що на рахунку:', this.balance);
//     }
//   },
//   getTransaktions() {
//     console.log(this.transactions);
//   }
// }
// console.log(account);
// account.deposit(5000);
// console.log(account);
// account.withdraw(1000);
// console.log(account);
// account.withdraw(4500);
// console.log(account);
// console.log(account.transactions);
// =================================================================

// Корзина товарів https://www.youtube.com/watch?v=nW2JV_ZX7jU&t=5558s

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = this.items[i];

//       if (productName === name) {
//         console.log('Знайшли такий продукт:', productName);
//         console.log('Індекс:', i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) { },
//   decreaseQuantity(productName) { },
// }

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'mango', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.remove('mango');

// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());
// console.log('Total:', cart.countTotalPrice());
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   console.log(words);
// }
// splitMessage("Mango", "");

// function calculateEngravingPrice(message, pricePerWord) {
//   const delim = message.split(" ");
//   const delimLength = delim.length;
//   console.log(delimLength * pricePerWord);
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);
//   console.log(string);
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")

// function slugify(title) {
//   const normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(" ");
//   console.log(words.join("-"));
// }
// slugify("Arrays for begginers");

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 1);
// const nonExtremeEls = fruits.slice(0, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   const allArray = firstArray.concat(secondArray);
//   if (allArray.length > maxLength) {
//     console.log(allArray.slice(0, maxLength));
//   }
//   console.log(allArray);
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i ++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// calculateTotal(7);

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i <= fruits.length; i++) {
//   console.log(fruits[i]);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//     console.log(total);
//   }
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function findLongestWord(string) {
//   let array = string.split(" ");
//   let word = array[0];
//   for (i = 0; i < array.length; i++) {
//     if (word.length < array[i].length) {
//       word = array[i];
//     }
//   }
// }
// findLongestWord("Google do a roll");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++){
//     numbers.push(i);
//   }
//   console.log(numbers);
// }
// createArrayOfNumbers(14, 17);

// function filterArray(numbers, value) {
//   let array = [];
//   for (let i = 0; i < numbers.length; i++){
//     if (value < numbers[i]) {
//       array.push(numbers[i]);
//     }
//   }
//   console.log(array);
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits.includes(fruit));
// }
// checkFruit("plum");

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let item of order) {
//     total += item;
//   }
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
// }
// filterArray([1, 2, 3, 4, 5], 3);

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// function getEvenNumbers(start, end) {
//   let EvenNumbersArray = [];
//   for (let i = start; i <= end; i++){
//     if (i % 2 === 0) {
//       EvenNumbersArray.push(i);
//     }
//   }
//   console.log(EvenNumbersArray);
// }
// getEvenNumbers(3, 11);

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(number);
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       console.log(i);
//       return i;
//     }
//   }
//   return number;
// }
// findNumber(2, 6, 5);

// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }
// includes([1, 2, 3, 4, 5], 3);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };
// console.log(apartment);

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptTags);

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];
// console.log(lastTag);

// const aptR = apartment["rating"];
// const aptD = apartment["descr"];
// const aptP = apartment["price"];
// const aptT = apartment["tags"];
// console.log(aptR);

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment);

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };
// console.log(apartment);

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product.price);

// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
//   [emailInputName]:"henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials.email);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// };
// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// };
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// };

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   console.log(propCount);
//   }
// countProps({ name: "Mango", age: 2 });

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   console.log(totalSalary);
// };
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// };
// getProductPrice("Radar");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   let arrayOfValues = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       arrayOfValues.push(product[propName]);
//     }
//   }
//   console.log(arrayOfValues);
//   return arrayOfValues;
// };
// getAllPropValues("name");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);
//   return totalPrice;
//  };
// calculateTotalPrice("Droid");

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// console.log(icon);

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// console.log(highYesterday);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// } = forecast;
// console.log(tomorrowIcon);

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh }
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   const compliteOfTask = { category, priority, ...data, completed };
// };
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   console.log(total);
// };
// add(15, 27);

// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//     console.log(total);
//   }
// };
// addOverNum(10, 12, 4, 11, 48, 10, 8);

// function findMatches(firstArgs, ...otherArgs) {
//   const matches = [];
//   for (const firstArg of firstArgs) {
//     for (const otherArg of otherArgs) {
//       if (firstArg === otherArg) {
//         matches.push(otherArg);
//       }
//     }
//   }
//   console.log(matches);
// };
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune");

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// }
// bookShelf.updateBook("Haze", "Dungeon chronicles");

// const atTheOldToad = {
//   potions:[],
// };
// console.log(atTheOldToad);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     console.log(potionIndex);
//     this.potions.splice(potionIndex, 1, newName);
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++){
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// SPLICE

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// console.log(makePizza());
// console.log(makePizza);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   console.log(callback);
//   return callback(pizzaName);
// }
// makeMessage("Royal Grand", makePizza);

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (i = 0; i < this.pizzas.length; i++) {
//       if (pizzaName === this.pizzas[i]) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (number, index) {
//     return totalPrice += number;
//   });
//   return totalPrice;
// }


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function (number, index) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//     console.log(filteredNumbers);
//   });
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//       console.log(commonElements);
//     }
//   });
//   return commonElements;
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }
// calculateTotalPrice(5, 100);

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// calculateTotalPrice(8, 60);

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => totalPrice += item);
//   return totalPrice;
// }


// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }
// filterArray([12, 24, 8, 41, 76], 38);

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// function changeEven(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//       continue;
//     }
//     newArray.push(numbers[i]);
//   }
//   return newArray;
// }
// changeEven([2, 8, 3, 7, 4, 6], 10);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books.map(book => book.title);
// console.log(titles);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// const getUserNames = users => {
//   return users.map(user => user.name);
// };

// const getUserEmails = users => {
//   return users.map(user => user.email);
// };

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => { return (number % 2) === 0 });
// const oddNumbers = numbers.filter(number => { return (number % 2) !== 0 });
// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );
// console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color)
// };

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge)
// };

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
// };

// const getFriends = (users) => {
//   const allFriendsArray = users.flatMap(user => user.friends);
//   return allFriendsArray.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
// };

// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive);
// };

// const getInactiveUsers = (users) => {
//   return users.filter(user => user.isActive === false)
// };

// const getInactiveUsers = (users) => {
//   return users.filter(user => !user.isActive)
// };

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// const bookWithTitle = books.find(option => option.title === BOOK_TITLE);
// const bookByAuthor = books.find(option => option.author === AUTHOR);

// const getUserWithEmail = (users, email) => {
//   return users.find(option => option.email === email)
// };

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// const isEveryUserActive = (users) => {
//   return users.every(value => value.isActive)
// };

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);
// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);
// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// const isAnyUserActive = users => {
//   return users.some(value => value.isActive)
// };

