/*
 * Функції з побічними ефектами та чисті функції
 */
//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (array, ...args) => {
//   const copyNumbers = [...array];

//   copyNumbers.push(...args);

//   return copyNumbers;
// };

// const newNumbers = pushNumbers(numbers, 9, 6, 8);

// console.log('numbers: ', numbers);
// console.log('newNumbers: ', newNumbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   const copyArr = [...arr];

//   for (let i = 0; i < copyArr.length; i += 1) {
//     copyArr[i] *= 2;
//   }

//   return copyArr;
// };

// const doubleNumbers = doubleMulti(numbers);

// console.log('numbers: ', numbers);
// console.log('doubleNumbers: ', doubleNumbers);

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/*
? Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
*/

// const getAvailableCarNames = allCars => {
//   return allCars.filter(el => el.onSale).map(el => el.model);
// };

// console.log(getAvailableCarNames(cars));

/*
? Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (властивість onSale),
? відсортованих за зростанням ціни.
*/
// const getSortedCarsOnSale = allCars => {
//   return allCars.filter(el => el.onSale).sort((a, b) => a.price - b.price);
// };

// console.table(getSortedCarsOnSale(cars));

/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Відфільтруйте масив, щоб залишилися тільки парні
*/
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(el => el % 2 === 0);

// console.log('numbers: ', numbers);
// console.log('evenNumbers: ', evenNumbers);

/*
? Відфільтруємо масив, залишивши в ньому лише позитивні числа:
*/
// const numbers = [-2, 5, 1, -5, -1, 1, 0, 3, 4, -1];
// const positiveNumbers = numbers.filter(el => el >= 0);

// console.log('numbers: ', numbers);
// console.log('positiveNumbers: ', positiveNumbers);

/*
? Відфільтруйте масив heroes за властивістю об'єкта franchise.
*/
// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const marvelHeroes = heroes.filter(el => el.franchise.toLowerCase() === 'marvel');
// const dcHeroes = heroes.filter(el => el.franchise.toLowerCase() === 'dc');

// console.log('heroes: ', heroes);
// console.log('marvelHeroes: ', marvelHeroes);
// console.log('dcHeroes: ', dcHeroes);

/*
? Нехай функція filterByPrice повертає масив автомобілів ціна яких
? менше ніж значення параметра threshold.
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// Повна версія функції filterByPrice
// const filterByPrice = (allCars, threshold) => {
//   return allCars.filter((el, idx, arr) => {
//     return el.price <= threshold;
//   });
// };

// Скорочена версія функції filterByPrice
// const filterByPrice = (allCars, threshold) => allCars.filter(el => el.price <= threshold);

// console.table(filterByPrice(cars, 25000));
// console.table(filterByPrice(cars, 30000));

/*
? Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/
// Повна версія функції getCarsWithDiscount
// const getCarsWithDiscount = allCars => {
//   return allCars.filter((el, idx, arr) => {
//     return el.onSale;
//   });
// };

// Скорочена версія функції getCarsWithDiscount
// const getCarsWithDiscount = allCars => allCars.filter(el => el.onSale);

// console.table(getCarsWithDiscount(cars));

/*
? Нехай функція getCarsWithType повертає масив автомобілів, тип яких
? збігається із значенням параметра type.
*/
// Повна версія функції getCarsWithType
// const getCarsWithType = (allCars, type) => {
//   return allCars.filter((el, idx, arr) => {
//     return el.type === type;
//   });
// };

// Скоречена версія функції getCarsWithType
// const getCarsWithType = (allCars, type) => allCars.filter(el => el.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

/*
 *  Метод find()
 */

// масив.find((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Знайдіть перше непарне число
*/
// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const oddNumber = numbers.find(el => el % 2 !== 0);

// console.log('numbers: ', numbers);
// console.log('oddNumber: ', oddNumber);

/*
? Знайдіть автомобіль за моделлю
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// Повна версія функції getCarByModel
// const getCarByModel = (allCars, model) => {
//   return allCars.find((el, idx, arr) => {
//     return el.model === model;
//   });
// };

// Скорочена версія функції getCarByModel
// const getCarByModel = (allCars, model) => allCars.find(el => el.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колбек-функції
// });

//? Помножте всі числа на 2
// const numbers = [1, 2, 3, 4, 5];
// Повна версія
// const doubleNumbers = numbers.map((el, idx, arr) => {
//   return el * 2;
// });
// Скорочена версія
// // const doubleNumbers = numbers.map(el => el * 2);

// console.log('numbers: ', numbers);
// console.log('doubleNumbers: ', doubleNumbers);

/*
? Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, що містить їх довжини:
*/
// const wordsArr = ['Есть', 'жизнь', 'на', 'Марсе'];

// const getElementsLength = words => {
//   // const wordsLengthArr = [];

//   // for (const word of words) {
//   //   wordsLengthArr.push(word.length);
//   // }

//   // return wordsLengthArr;

//   return words.map(el => el.length);
// };

// console.log(getElementsLength(wordsArr)); // [4, 5, 2, 5]

/*
? Створіть масив значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// const fahrenheits = celsius.map(el => el * 1.8 + 32);

// console.log('celsius: ', celsius);
// console.log('fahrenheits: ', fahrenheits);

/*
? Нехай функція getModels повертає масив моделей (властивість model) всіх автомобілів.
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
// Повна версія функції getModels
// const getModels = allCars => {
//   const models = allCars.map((el, idx, arr) => {
//     return el.model;
//   });

//   return models;
// };

// Скорочена версія функції getModels
// const getModels = allCars => allCars.map(el => el.model);

// console.log(getModels(cars));

/*
? Нехай функція makeCarsWithDiscount(cars, discount) повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/
// const makeCarsWithDiscount = (allCars, discount) => {
//   return allCars.map(el => {
//     const car = { ...el };

//     car.price = car.price - car.price * discount;

//     return car;
//   });
// };

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.5));

'use strict';

// /* ============== Метод map() ============== */
// Array.prototype.ownMap = function (callback) {
//   const newArr = [];

//   for (let i = 0; i < this.length; i += 1) {
//     newArr.push(callback(this[i], i, this));
//   }

//   return newArr;
// };

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// console.log(planets);

// const planetsInUpperCase = planets.ownMap(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.ownMap(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

/* ============== Метод filter() ============== */
// const ownFilter = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// };

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = ownFilter(values, value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = ownFilter(values, value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = ownFilter(values, value => value > 1000);
// console.log(bigValues); // []

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

/* ============== Метод find() ============== */
// const ownFind = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }

//   return undefined;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFind(colorPickerOptions, option => option.label === 'blue')); // { label: 'blue', color: '#2196F3' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'white')); // undefined

/* ============== Метод findIndex() ============== */
// const ownFindIndex = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return i;
//     }
//   }

//   return -1;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'blue')); // 2
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'pink')); // 3
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'white')); // -1

/* ============== Метод every() ============== */
// const ownEvery = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);
//     if (result) {
//       continue;
//     }

//     return false;
//   }

//   return true;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = ownEvery(fruits, fruit => fruit.amount > 0); // false
// console.log(allAvailable);

/* ============== Метод some() ============== */
// const ownSome = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);

//     if (result) {
//       return true;
//     }
//   }

//   return false;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = ownSome(fruits, fruits => fruits.amount > 0); // true
// console.log(anyAvailable);

/* ============== Метод reduce() ============== */
// const ownReduce = function (arr, callback, initialValue = 0) {
//   for (let i = 0; i < arr.length; i += 1) {
//     initialValue = callback(initialValue, arr[i], i, arr);
//   }

//   return initialValue;
// };

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const totalScore = ownReduce(
//   students,
//   (total, student) => {
//     return total + student.score;
//   },
//   0
// );

// const averageScore = totalScore / students.length;
// console.log(averageScore);

/*
 *  Метод reduce()
 */

// масив.reduce((previousValue, element, index, array) => {
// Тіло колбек-функції
// }, initialValue);

/*
? Порахуємо суму масива чисел
*/
// const numbers = [1, 2, 3, 4, 5];

/*
1 ітерація
acc = 0
el = 1
2 ітерація
acc = 1
el = 2
3 ітерація
acc = 3
el = 3
4 ітерація
acc = 6
el = 4
5 ітерація
acc = 10
el = 5
-------------
acc = 15
*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(total);

/*
? Нехай функція getTotalAmount повертає загальну кількість автомобілів(значення властивості amount).
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getTotalAmount = allCars => {
//   return allCars.reduce((acc, el, idx, arr) => {
//     return acc + el.amount;
//   }, 0);
// };

// console.log(getTotalAmount(cars));

/*
 *  Метод sort()
 */

//? Сортування чисел та рядків за замовчуванням
// const numbers = [3, 7, 2, 8, 1, 45, 58];
// const newNumbers = [...numbers].sort();

// console.log('numbers: ', numbers);
// console.log('newNumbers: ', newNumbers);

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abc'];
// const newStrArr = [...strArr].sort();

// console.log('strArr: ', strArr);
// console.log('newStrArr: ', newStrArr);

//? Сортировка чисел и строк по условию
// const numbers = [3, 7, 2, 8, 1, 42, 56];
// const copyNumbers = [...numbers].sort((a, b) => {
//   return b - a;
// });

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abs'];
// const copytStrArr = [...strArr].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log('strArr: ', strArr);
// console.log('copytStrArr: ', copytStrArr);

/*
? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
? по збільшенню значення властивості amount.
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// Повний запис функції sortByAscendingAmount
// const sortByAscendingAmount = allCars => {
//   return [...allCars].sort((a, b) => {
//     return a.amount - b.amount;
//   });
// };

// Скорочений запис функції sortByAscendingAmount
// const sortByAscendingAmount = allCars => [...allCars].sort((a, b) => a.amount - b.amount);

// console.table(cars);
// console.table(sortByAscendingAmount(cars));

/*
? Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
? за зменшенням значення властивості price.
*/
// Повний запис функції sortByDescendingPrice
// const sortByDescendingPrice = allCars => {
//   return [...allCars].sort((a, b) => {
//     return b.price - a.price;
//   });
// };

// Скорочений запис функції sortByDescendingPrice
// const sortByDescendingPrice = allCars => [...allCars].sort((a, b) => b.price - a.price);

// console.table(cars);
// console.table(sortByDescendingPrice(cars));

/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/
// 1 Варінат
// const sortByModel = (allCars, order) => {
//   if (order === 'asc') {
//     return [...allCars].sort((a, b) => {
//       return a.model.localeCompare(b.model);
//     });
//   }

//   return [...allCars].sort((a, b) => {
//     return b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// 2 Варіант
// const sortByModel = (allCars, order) => {
//   return [...allCars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     }

//     return b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));