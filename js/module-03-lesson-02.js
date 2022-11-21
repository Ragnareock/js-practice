/*
 * Операція spread замість concat і slice
 */

//* Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const anotherNumbers = [...numbers];

// console.log('numbers: ', numbers);
// console.log('anotherNumbers: ', anotherNumbers);

// anotherNumbers.push(10);

// console.log('numbers: ', numbers);
// console.log('anotherNumbers: ', anotherNumbers);

//* Об'єднання масивів
// const firstArr = [1, 2, 3];
// const secondArr = [10, 11, 12];
// const totalArr = [-1, 0, ...firstArr, ...secondArr];

// console.log('firstArr: ', firstArr);
// console.log('secondArr: ', secondArr);
// console.log('totalArr: ', totalArr);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(Math.max(...numbers));

/*
 * Операція spread замість Object.assign({}, obj)
 */
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const anotherUser = {
//   ...user,
//   gender: 'male',
//   firstName: 'Oleksii',
// };

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.age = 40;

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };
// const anotherUser = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.age = 40;

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.someArr.push(10);

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

/*
 * Операція rest
 */
//? Напишіть функцію sum, яка складає довільну кількість аргументів
// const sum = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));

/*
 * Деструктуризація об'єктів
 */
/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const firstName = user.firstName;
// const lastName = user.lastName;
// const userAge = user.age;
// const isAdmin = user.isAdmin || false
// const { lastName, age: userAge, firstName, isAdmin = false } = user;
// const { lastName, age: userAge, ...otherProps } = user;

// console.log('user: ', user);
// console.log(lastName, userAge);
// console.log(otherProps);
/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   number,
//   flag,
//   employees,
//   langs: { original, secondary },
// } = team;

// console.log(teamLangs, original, secondary);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const rgb = [210, 100, 50];

// const red = rgb[0];
// const green = rgb[1];
// cont blue = rgb[2];

// const [red, green, blue] = rgb;

// console.log(blue);

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/
// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/
// function getBotReport(obj) {
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = obj;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

/*
? Напиши функцію getStockReport(companyName, stock), щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт
? про кількість товарів на складі будь-якої компанії.
*/

// function getStockReport(obj) {
//   const { companyName, stock } = obj;

//   const stockValues = Object.values(stock);
//   let total = 0;

//   for (const value of stockValues) {
//     total += value;
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

/*
? Напиши функцію createContact(partialContact) так,
? щоб вона повертала новий об'єкт контакту з доданими властивостями id і createdAt,
? а також list зі значенням "default" якщо у partialContact немає такої властивості.
*/
// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.
*/

// function transformUsername(user) {
//   const { firstName, lastName, ...otherProps } = user;

//   //   console.log('user: ', user);
//   //   console.log('firstName: ', firstName);
//   //   console.log('lastName: ', lastName);
//   //   console.log('otherProps: ', otherProps);

//   const newUser = { ...otherProps, fullName: `${firstName} ${lastName}`, createdAt: new Date() };

//   return newUser;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// const logFunction = function (user) {
//   const { firstName, lastName, age, gender, userEmail, userPhoneNumber } = user;

//   console.log(firstName, lastName, age, gender, userEmail, userPhoneNumber);
// };

// logFunction('Amelia', 'Burgess', 30, 'female', 'apjez@eh.aq', '(096) 35-21-476');

// logFunction({
//   firstName: 'Amelia',
//   lastName: 'Burgess',
//   age: 30,
//   gender: 'female',
//   userEmail: 'apjez@eh.aq',
//   userPhoneNumber: '(096) 35-21-476',
// });

// logFunction({
//   firstName: 'Phoebe ',
//   lastName: 'Newton',
//   age: 40,
//   gender: 'male',
//   userEmail: 'apjez@eh.aq',
//   userPhoneNumber: '(096) 35-21-476',
// });