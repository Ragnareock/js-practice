/*
 * Стрілочні функції, явне - неявне повернення, arguments, повернення об`єкта
 */
//? Два і більше параметрів
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

//? Один параметр
// const greet = username => {
//   console.log(`Hello ${username}`);
// };

// greet('Oleksii');

//? Без параметрів
// const greet = () => {
//   console.log('Hello!');
// };

// greet();

//? arguments
// const sum = (...args) => {
//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));

//? Неявне повернення
// const updateUser = user => ({ id: Date.now(), ...user });

// console.log(updateUser({ firstName: 'Oleksii', lastName: 'Repin' }));

//? Явне повернення

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// };

// const logProduct = product => console.log(product);
// const logTotalPrice = product => {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = message => console.log(`✅ Success! ${message}`);

// const handleError = message => {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

/*
 * Колбек-функції, функції вищого порядку
 */
// const greet = function (firstName, callback) {
//   // firstName = 'Oleksii';
//   // callback = simpleGreet;
//   callback(firstName);
// };

// const prettyGreet = function (username) {
//   console.log(`Hello ${username} 👋`);
// };

// const simpleGreet = function (firstName) {
//   console.log(`Hello ${firstName}`);
// };

// greet('Oleksii', simpleGreet);
// greet('Oleksii', prettyGreet);

//? Запит на сервер
// const fetchUser = async function (username, callback) {
//   const response = await fetch(`https://api.github.com/users/${username}`);
//   const result = await response.json();

//   callback(result);
// };

// const showInfoAboutUser = function (user) {
//   console.log(user);
// };

// const showAvatar = function (user) {
//   console.log(user.avatar_url);
// };

// fetchUser('olexiy-repin', showInfoAboutUser);
// fetchUser('olexiy-repin', showAvatar);

//? Реєстрація подій на сторінці
// const userEmailEl = document.querySelector('.js-contact-form-email');

// const logValues = function (event) {
//   console.log(event.target.value);
// };

// userEmailEl.addEventListener('blur', logValues);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.
*/
// const each = function (array, callback) {
//   const newArray = [];

//   for (const item of array) {
//     newArray.push(callback(item));
//   }

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];

// const multi = function (el) {
//   return el * 2;
// };

// const doubleAdd = function (el) {
//   return el + 2;
// };

// console.log(each(numbers, multi));
// console.log(each(numbers, doubleAdd));

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без id, а також колбек-функцію.
? Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор до властивості id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль
*/

// const createProduct = function (product, callback) {
//   const newProduct = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newProduct);
// };

// const logProduct = function (product) {
//   console.log(product);
// };

// const logTotalPrice = function (product) {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Додайте об'єкту account методи  withdraw(amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`) якщо amount більше this.balance
? інакше знімаємо гроші з балансу і викликаємо onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо onSuccess(`Account balance: ${this.balance}`)
*/
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! Account balance ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

/*
 * forEach() замість циклів for і for...of для масивів
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} - ${fruits[i]}`);
// }

// const logItems = (el, idx, arr) => {
//   console.log(`${idx + 1} - ${el}`);
// };

// const each = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };

// fruits.forEach((el, idx, arr) => {
//   console.log(`${idx + 1} - ${el}`);
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/
// function logItems(items) {
//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   items.forEach((el, idx, arr) => {
//     console.log(`${idx + 1} - ${el}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/
// function printContactsInfo({ names, phones } = {}) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   nameList.forEach((el, idx, arr) => {
//     console.log(`${el}: ${phoneList[idx]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/
// const calсulateAverage = (...args) => {
//   let total = 0;

//   // for (let i = 0; i < args.length; i += 1) {
//   //   total += args[i];
//   // }

//   args.forEach((el, idx, arr) => {
//     total += el;
//   });

//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2/
