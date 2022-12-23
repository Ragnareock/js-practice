/*
 *  Контекст виконання this
 */

/*
 * this існує тільки всередині функцій.
 * На this не впливає те де функція була //! ОГОЛОШЕНА.
 * На this впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 */

//TODO: Розглянемо як this поводиться в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     // this = user;
//     console.log('This --->', this);
//   },

//   showName() {
//     // this = user;
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

//TODO: Розглянемо як this поводиться у звичайних функціях (суворий, не суворий режим)
//? Function expression
// const greet = function () {
//   console.log('This --->', this);
//   console.log('Hello');
// };

// greet();

//? Function declaration
// function greet() {
//   console.log('This --->', this);
//   console.log('Hello');
// }

// greet();

//? Arrow function
// const greet = () => {
//   console.log('This --->', this);
//   console.log('Hello');
// };

// greet();

//TODO: Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showUserThis = showThis;
// user.showUserName = showName;

// showThis();
// user.showUserThis();

// // showName();
// user.showUserName();

// const anotherUser = {
//   name: 'Etta Burgess',
//   age: 40,
// };

// anotherUser.showUserName = showName;

// anotherUser.showUserName();

//TODO: Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
// };

// const showThis = user.showUserThis;
// const showName = user.showUserName;

// showThis();
// showName();

//TODO: This в callback функціях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
// };

// const someFunction = function (callback) {
//   // let callback = user.showUserThis;
//   callback();
// };

// someFunction(user.showUserThis);

//TODO: This у стрілочних функціях. Стрілочні функції не мають свого this, this в стрілках завжди посилається на батьківський this.
// const user = {
//   name: 'Luis',
//   age: 30,

//   changeUserAge(newAge) {
//     console.log(this);

//     const changeAge = newAge => {
//       console.log(`this ---->`, this);
//       this.age = newAge;
//     };

//     changeAge(newAge);
//   },
// };

// user.changeUserAge(40);
// console.log(user);

/*
? Яким буде результат виконання цього коду?
*/
// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;

// goFn();
// user.go();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/
// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user.ref.name);

/*
? Яким буде результат console.log
*/
// function makeUser() {
//   // this = undefined;

//   return {
//     name: 'Джон',
//     ref() {
//       // this = user;
//       return this;
//     },
//   };
// }

// const user = makeUser();

// console.log(user);
// console.log(user.ref().name);

/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/
// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//     return this;
//   },

//   down() {
//     this.step -= 1;
//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Змініть код методів up, down та showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
// ladder.up().up().down().showStep();

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує
? і повертає загальну вартість каменів з таким ім'ям.
*/
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const findedStone = this.stones.find(stone => stone.name === stoneName);

//     if (findedStone === undefined) {
//       return 'Такого каменя не знайдено';
//     }

//     return findedStone.price * findedStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Sdfd')); // Такого каменя не знайдено

/*
? Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
*/
// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// console.log(phonebook.contacts);

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.contacts);

/*
? Створіть об'єкт calculator із трьома методами:
?
? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
? add() - повертає суму збережених значень.
? mult() - перемножує збережені значення та повертає результат.
*/

// const calculator = {
//     read(a, b) {
//       this.firstNum = a;
//       this.secondNum = b;
//     },
  
//     add() {
//       return this.firstNum + this.secondNum;
//     },
  
//     mult() {
//       return this.firstNum * this.secondNum;
//     },
//   };
  
//   console.log(calculator);
  
//   calculator.read(10, 20);
  
//   console.log(calculator);
//   console.log(calculator.add());
//   console.log(calculator.mult());
  
//   calculator.read(40, 30);
  
//   console.log(calculator);
  
//   console.log(calculator.add());

/*
 *  Методи функцій call та apply
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const fn = function () {
//   console.log('Hello');
// };

// fn.test = 5;
// console.dir(fn);
// console.log(fn.test);

//* call та apply
//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, number) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
//   console.log(number);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 10);
// showFullName.apply(user, ['Hello', 10]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hi', 20);
// showFullName.apply(anotherUser, ['Hi', 20]);

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserFullName = function () {
//   this = user;
//   console.log(`${this.firstName} ${this.lastName}`);
// }

// const showUserFullName = showFullName.bind(user);

// showUserFullName();

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // callback = function() {
//   //   this = user;
//   //   console.log(`this name is: ${this.name}`);
//   // }

//   callback();
// };

// someFunction(user.showName.bind(user));

/*
? Що виведе код?
*/
// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();

/*
? Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль та викликати user.loginOk/loginFail залежно від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */
// const checkPassword = function (ok, fail) {
//   // ok = user.loginOk
//   // fail = user.loginFail

//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));