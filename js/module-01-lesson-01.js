/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/
// const numA = 18;
// const numB = 4;

// const sum = numA + numB;
// console.log('numA + numB: ', sum);

// const division = numA / numB;
// console.log('numA / numB: ', division);

// const multiply = numA * numB;
// console.log('numA * numB: ', multiply);

// const subtraction = numA - numB;
// console.log('numA - numB: ', subtraction);

// const result = numA % numB;
// console.log('numA % numB: ', result);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;
// console.log('numA = 15: ', numA % 2);

// const numB = 20;
// console.log('numB = 20: ', numB % 2);

// const numC = 45;
// console.log('numC = 45: ', numC % 2);

// const numD = 30;
// console.log('numD = 30: ', numD % 2);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log('hours: ', hours);
// console.log('minutes: ', minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// let num = prompt('Введіть якесь число');
// num = Number(num);

// console.log(typeof num);
// console.log(num);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';
// const num = Number.parseInt(str);

// console.log(num);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';
// const num = Number.parseFloat(str);

// console.log(num);

//? Спробуйте призвести до числа, строку 'abc'.
// const str = 'abc';
// const num = Number(str);

// console.log(num);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number(prompt('Введіть перше число'));
// const numB = Number(prompt('Введіть друге число'));
// const sum = numA + numB;

// console.log(sum);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.3;
// const result = Math.round(number);

// console.log(result);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = Number(prompt('Введіть якесь число'));
// const pow = Number(prompt('Введіть ступінь'));

// const result = num ** pow;

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;
*/

// const randomNum = Math.round(Math.random() * 10);

// console.log(randomNum);

//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача
// const min = Number(prompt('Введіть мінімальне число діапазону'));
// const max = Number(prompt('Введіть максимальне число діапазону'));

// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));

// console.log(randomNum);

// const generateRandomNumbure = (min, max) => {
//   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
// };

// let count1 = 0;
// let count2 = 0;
// let count3 = 0;

// for (let i = 0; i < 100; i += 1) {
//   const randomNumber = generateRandomNumbure(1, 3);

//   switch (randomNumber) {
//     case 1: {
//       count1 += 1;
//       break;
//     }

//     case 2: {
//       count2 += 1;
//       break;
//     }

//     case 3: {
//       count3 += 1;
//       break;
//     }
//   }
// }

// console.log(`1: ${count1}`);
// console.log(`2: ${count2}`);
// console.log(`3: ${count3}`);

/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.

// const result = 20 && 30 && 0 && 'Hello';

// console.log(result);

//* || - запинається на правді
//* Якщо операнд був преведенний до true, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до false, то повертається останній.

// const userName = prompt('Ваш вік');

// const greet = `Hello ${userName || 'anonymus'}`;

// console.log(greet);

//* ! - інвертує правду до брехні, а брехню до правди

// console.log(!'Hello');

//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Приведення типів
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);

/*
 * Примітивні типи даних: number, string, boolean, null та undefined, BigInt, Symbol.
 */

/*
 * Виведення даних: console.log та alert. Вкладка Console в Chrome Devtools.
 */

// console.log('Hello world');
// alert(10);

/*
 * Змінні: оголошення з let та const.
 */

// const num = 10;

// console.log(num);

// num = 20;

// console.log(num);

/*
 * Отримання даних: prompt та confirm.
 */

// const userAge = prompt('Ваш вік?');
// const isAdult = confirm('Вам є 18?');

// console.log(userAge);
// console.log(isAdult);

/*
 * Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)
 */

/*
 * Результатом порівняння буде бульове значення.
 * Рядки порівнюються по unicode.
 * При порівнянні рядків рядки порівнюються посимвольно.
 * При порівнянні різних типів, операнди приводяться до числа.
 * null не дорівнює нічому окрім себе та undefined.
 * undefined не дорівнює нічому окрім себе та null.
 */

/*
 * Приведення різних типів до числа:
 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

// * Оператор менше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('apple' < 'bananana');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

//* Оператор більше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор менше або дорівнює (<=)
// console.log(6 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор більше або дорівнює (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Рівність (==)
// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//* Строга рівність (===)
// console.log('123' === 123);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Нерівність (!=)
// console.log('4' != 4);

//* Строга нерівність (!==)
// console.log(4 !== 4);

/*
 * Примітивні типи даних: number, string, boolean, null та undefined, BigInt, Symbol.
 */

/*
 * Виведення даних: console.log та alert. Вкладка Console в Chrome Devtools.
 */

// console.log('Hello world');
// alert(10);

/*
 * Змінні: оголошення з let та const.
 */

// const num = 10;

// console.log(num);

// num = 20;

// console.log(num);

/*
 * Отримання даних: prompt та confirm.
 */

// const userAge = prompt('Ваш вік?');
// const isAdult = confirm('Вам є 18?');

// console.log(userAge);
// console.log(isAdult);

/*
 * Логічні оператори (&& || !)
 */

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.

// const result = 20 && 30 && 0 && 'Hello';

// console.log(result);

//* || - запинається на правді
//* Якщо операнд був преведенний до true, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до false, то повертається останній.

// const userName = prompt('Ваш вік');

// const greet = `Hello ${userName || 'anonymus'}`;

// console.log(greet);

//* ! - інвертує правду до брехні, а брехню до правди

// console.log(!'Hello');

//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Приведення типів
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/
// const numA = 18;
// const numB = 4;

// const sum = numA + numB;
// console.log('numA + numB: ', sum);

// const division = numA / numB;
// console.log('numA / numB: ', division);

// const multiply = numA * numB;
// console.log('numA * numB: ', multiply);

// const subtraction = numA - numB;
// console.log('numA - numB: ', subtraction);

// const result = numA % numB;
// console.log('numA % numB: ', result);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;
// console.log('numA = 15: ', numA % 2);

// const numB = 20;
// console.log('numB = 20: ', numB % 2);

// const numC = 45;
// console.log('numC = 45: ', numC % 2);

// const numD = 30;
// console.log('numD = 30: ', numD % 2);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log('hours: ', hours);
// console.log('minutes: ', minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// let num = prompt('Введіть якесь число');
// num = Number(num);

// console.log(typeof num);
// console.log(num);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';
// const num = Number.parseInt(str);

// console.log(num);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';
// const num = Number.parseFloat(str);

// console.log(num);

//? Спробуйте призвести до числа, строку 'abc'.
// const str = 'abc';
// const num = Number(str);

// console.log(num);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number(prompt('Введіть перше число'));
// const numB = Number(prompt('Введіть друге число'));
// const sum = numA + numB;

// console.log(sum);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.3;
// const result = Math.round(number);

// console.log(result);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = Number(prompt('Введіть якесь число'));
// const pow = Number(prompt('Введіть ступінь'));

// const result = num ** pow;

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;
*/

// const randomNum = Math.round(Math.random() * 10);

// console.log(randomNum);

//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача
// const min = Number(prompt('Введіть мінімальне число діапазону'));
// const max = Number(prompt('Введіть максимальне число діапазону'));

// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));

// console.log(randomNum);

// const generateRandomNumbure = (min, max) => {
//   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
// };

// let count1 = 0;
// let count2 = 0;
// let count3 = 0;

// for (let i = 0; i < 100; i += 1) {
//   const randomNumber = generateRandomNumbure(1, 3);

//   switch (randomNumber) {
//     case 1: {
//       count1 += 1;
//       break;
//     }

//     case 2: {
//       count2 += 1;
//       break;
//     }

//     case 3: {
//       count3 += 1;
//       break;
//     }
//   }
// }

// console.log(`1: ${count1}`);
// console.log(`2: ${count2}`);
// console.log(`3: ${count3}`);

'use strict';

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Привіт ім'я_користувача, ваш вік вік_користувача.
*/
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const result = 'Привіт ' + userFirstName + ',' + ' ваш вік ' + userAge + '.';

// console.log(result);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const result = `Привіт ${userFirstName}, ваш вік ${userAge}.`;

// console.log(result);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userFirstName = prompt('Ваше ім`я');
// const lengthOfUserName = userFirstName.length;

// console.log(userFirstName);
// console.log(lengthOfUserName);

//? Попросіть користувача ввести email і переведіть у нижній регістр.
// const userEmail = prompt('Ваш email');
// const normalizeUserEmail = userEmail.toLowerCase();

// console.log(normalizeUserEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр
// const userEmail = prompt('Ваш email');
// const normalizeUserEmail = userEmail.toUpperCase();

// console.log(normalizeUserEmail);

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/
// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// const isJavascriptInStr = languages.includes('JavaScript');
// const isJsInStr = languages.includes('JS');
// const idxOfJsInStr = languages.indexOf('JS');

// console.log('index of js: ', idxOfJsInStr);

// console.log('test JavaScript: ', isJavascriptInStr);
// console.log('test JS: ', isJsInStr);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
// const str = '24px';

// console.log(str.startsWith('24'));

//? У нас є рядок '23,4', замініть кому на крапку
// const num = prompt('Введіть якесь число');
// const replacedComma = Number.parseFloat(num.replace(',', '.'));

// console.log(replacedComma);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const replacedStr = str.replaceAll('dog', 'monkey');

// console.log(replacedStr);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const someDate = '12:05:21';
// const currentDate = someDate.replaceAll(':', '.');

// console.log(currentDate);

/*
  ? Дано рядок 'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем.
*/
// const userName = prompt('Ваше ім`я');
// const someStr = `${userName} is 24 years old`;

// console.log(someStr);

// const userFullName = someStr.slice();

                                    





