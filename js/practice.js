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

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}