/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

// let iterator = 0;

// while (iterator < 10) {
//   console.log(iterator);
//   iterator = iterator + 1;
// }

/*
? Виведіть числа від 1 до 50
*/
// let iterator = 1;

// while (iterator < 50) {
//   console.log(iterator);

//   iterator = iterator + 1;
// }

/*
? Знайдіть суму чисел від 1 до 100
 */
// let iterator = 1;
// let result = 0;

// while (iterator <= 100) {
//   //result = result + iterator;
//   result += iterator;

//   //iterator = iterator + 1;
//   iterator += 1;
// }

// console.log(result);

/*
? Дано число n = 1000.
? Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
? Яке число вийде?
? Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
*/
// let n = 1000;
// let num = 0;

// while (n / 2 >= 50) {
//   // num = num + 1
//   num += 1;

//   // n = n / 2;
//   n /= 2;
// }

// console.log(num);
// console.log(n);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

// do {
//   console.log('block do');
// } while (false);

/*
? Напишіть цикл, який пропонує в prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/
// let number = Number(prompt('Введіть число більше 100'));

// while (number <= 100) {
//   number = Number(prompt('Введіть число більше 100'));
// }

// console.log(number);

// let number;

// do {
//   number = Number(prompt('Введіть число більше 100'));
// } while (number <= 100);

// console.log(number);

/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

// let num = 0;
// let n;

// for (n = 1000; n / 2 >= 50; n /= 2) {
//   num += 1;
// }

// console.log(n);
// console.log(num);

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// 1 Варіант
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 2 Варіант
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';

//   if (i % 3 === 0) {
//     // str = str + 'Fizz';
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     // str = str + 'Fizz';
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// for (let i = 0, star = ''; i < 7; i += 1) {
//   star += '*';

//   console.log(star);
// }

// for (let star = '*'; star.length < 7; star += '*') {
//   console.log(star);
// }

/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const num = 10;

// if (num > 5) {
//   console.log('Умова вірна');
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/
// const str = 'abcde';

// if (str.startsWith('ab')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
// const userNumber = Number(prompt('Введіть якесь число'));

// if (userNumber === 10) {
//   console.log('Вірно');
// } else {
//   console.log('Не вірно');
// }

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/
// const min = 20;

// if (min >= 0 && min < 15) {
//   console.log('перша чверть години');
// } else if (min >= 15 && min < 30) {
//   console.log('друга чверть години');
// } else if (min >= 30 && min < 45) {
//   console.log('третя чверть години');
// } else if (min >= 45 && min < 60) {
//   console.log('четверта чверть години');
// } else {
//   console.log('Некоректна кількість хвилин');
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/
// const userInput = prompt('Яка «офіційна» назва JavaScript?').toLowerCase();

// if (userInput === 'ecmascript') {
//   console.log('Вірно');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/
// const userNumber = Number(prompt('Введіть число'));

// if (userNumber > 0) {
//   console.log(1);
// } else if (userNumber < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// const num = 12;

// switch (num) {
//   case 1: {
//     console.log('У вас число 1');
//     break;
//   }

//   case 10: {
//     console.log('У вас число 10');
//     break;
//   }

//   case 5: {
//     console.log('У вас число 5');
//     break;
//   }

//   default: {
//     console.log('Число не підійшло');
//   }
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   alert('Ви ввели число 0');
// } else if (number === 1) {
//   alert('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Ви ввели число 2, а може і 3');
// } else {
//   alert('Ви ввели якесь інше число');
// }

// switch (number) {
//   case 0: {
//     alert('Ви ввели число 0');
//     break;
//   }

//   case 1: {
//     alert('Ви ввели число 1');
//     break;
//   }

//   case 2:
//   case 3: {
//     alert('Ви ввели число 2, а може і 3');
//     break;
//   }

//   default: {
//     alert('Ви ввели якесь інше число');
//   }
// }

/*
 * Тернарний оператор
 */

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 4;
// const b = 1;
// const result = a + b < 4 ? 'Мало' : 'Багато';

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

// const login = 'Директор';
// const message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login === 'Директор'
//     ? 'Вітаю'
//     : login === ''
//     ? 'Немає логіну'
//     : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);