// console.log('sukanahuiblyat');

// let num = 1488;
// console.log(num);
// let str = 'ebat';
// console.log(str);
// num = 69;
// console.log(num);

// let userSapiens;
// userSapiens = prompt('4iy Krym?');
// console.log(userSapiens);

// const userHomo = confirm('ty dovboyob ?????');
// console.log(userHomo);

// // математичні операції
// const numA = 1488;
// const numB = 69;
// const sum = numA + numB;
// console.log('numA + numB: ', sum);
// const division = numA / numB;
// console.log('numA / numB: ', division);
// const multiply = numA * numB;
// console.log('numA * numB: ', multiply);
// const subtraction = numA - numB;
// console.log('numA - numB: ', subtraction);

// // залишок при діленні
// const result = numA % numB;
// console.log('залишок при діленні:', result);

// парні числа
// const numAb = 15;
// console.log(numAb % 2);
// const numBb = 20;
// console.log(numBb % 2);
// const numCb = 45;
// console.log(numCb % 2);
// const numDb = 30;
// console.log(numDb % 2);

// хвилин в годинах
// const totalMinutes = 90;
// let hours = totalMinutes / 60;
// console.log(hours);
// hours = Math.floor(hours);
// console.log(hours);
// const minutes = totalMinutes % 60;
// console.log(minutes);
// console.log(hours, 'hours', minutes, 'minutes');

// вивести число з рядка у консолі
// let num = prompt('napyshi chyslo');
// num = Number(num);
// console.log(typeof num);
// console.log(num);

// дістати з рядка ціле число
// const str = '24px';
// const num = Number.parseInt(str);
// console.log(num);

// дістати з рядка дробове число
// const str = '25.5%';
// const num = Number.parseFloat(str);
// console.log(num);

// з імпута скласти два числа
// const numA = Number(prompt('vvedy chislo pershe'));
// const numB = Number(prompt('vvedy chislo druge'));
// const sum = numA + numB;
// console.log(sum);

// заокруглення
// Math.floor, Math.ceil, Math.round.
// const num = 23.5;
// const result = Math.floor(num);
// console.log(result);

// Math.max, Math.min, Math.pow(), Math.random().
// зведіть число до ступеня з консолі
// const num = Number(prompt('vvedy chislo'));
// const pow = Number(prompt('vvedy stupin'));
// const result = Math.pow(num, pow);
// console.log(result);
// const resultB = num ** pow;
// console.log(resultB);

// console.log(Math.max(4, 8, 2, 7, 3));

// const randomNum = Math.random() * 10;
// console.log(randomNum);

// рандомне число з діапазону
// const numMin = Number(prompt('vvedy chislo Min'));
// const numMax = Number(prompt('vvedy chislo Max'));
// const randomNum = Math.round(numMin - 0.5 + Math.random() * (numMax - numMin + 1));
// console.log(randomNum);

// рядки рядочечки
// записати рядок з данних у консолі
// const userFirstName = prompt('Vashe ymia');
// const userAge = prompt('Vash vik');
// const result = userFirstName + ', tobi vzhe ' + userAge + ', a rozumu nihuya nema';
// console.log(result);

// шаблонний рядок та інтерполяція
// const userName = prompt('Vashe imya');
// const str = `Hello ${userName}`;
// console.log(str);

// довжина рядка
// const userFirstName = prompt('yakoi dovzhini u tebe?');
// const LengthOfUserName = userFirstName.length;
// console.log(userFirstName);
// console.log(LengthOfUserName);

// нормалізація рядків, привести до нижнього регістру
// const userEmail = prompt('Vkszhi sviy Email');
// const normalizeUserEmail = userEmail.toLowerCase();
// console.log(normalizeUserEmail);

// дізнатися чи є в рядку таке слово
// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.toLocaleLowerCase();
// const isJavascriptInStr = languages.includes('jS'.toLocaleLowerCase());
// console.log(isJavascriptInStr);
// const isJavascriptInStrB = languages.includes('JavaScript');
// console.log(isJavascriptInStrB);

// індексація, нумерація, з нуля початок
// const str = 'qwerty';
// console.log(str[4]);

// чи включає рядок
// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.toLocaleLowerCase();
// const idxOfJsInStr = languages.indexOf('React'.toLocaleLowerCase());
// console.log(idxOfJsInStr);

// на що закінчується рядок
// const str = '24px';
// console.log(str.endsWith('px'));

// заміна коми на крапку
// const num = prompt('Ввіедіть число');
// const replacedComa = num.replace(',', '.');
// console.log(replacedComa);

// скопіювати з рядка слово
// const userName = prompt('Як звати');
// const someStr = `${userName} common move`;
// console.log(someStr);
// const userFullName = someStr.slice(0, 7);
// console.log(userFullName);

// порівняння
// console.log(7 > 4);
// console.log('a' < 'A');
// console.log('123' == 123);
// console.log('123' === 123);
// console.log(123 != 123);

// логічні оператори (&& || !)
// const result = 20 && 30;
// console.log(result);

// const userName = prompt('Your name');
// const greet = `Hello ${userName || 'anonimus'}`;
// console.log(greet);

// розгалуження, умова
// const num = 12;
// if (num > 8) {
//   console.log('Ok');
// }

// перевірте з якої букви рядок
// const str = 'abcd';
// if (str[0] === 'a') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// const str = 'abcd';
// if (str.startsWith('a')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// число дорівнює
// const userNumber = prompt('You number');
// if (userNumber === '69') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// у яку чверть години потрапляє число
// const min = 69;
// if (min >= 0 && min < 15) {
//   console.log('перша чверть');
// } else if (min >= 15 && min < 30) {
//   console.log('друга чверть');
// } else if (min >= 30 && min < 45) {
//   console.log('третя чверть');
// } else if (min >= 45 && min < 60) {
//   console.log('четверта чверть');
// } else {
//   console.log('некоректна кількість хвилин');
// }

// чи вірна відповідь в імпуті
// const userImput = prompt('яка офіційна назва JavaScript?').toLowerCase();
// if (userImput === 'ecmacript') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// отримує число або більше або менше нуля
// const userNumber = Number(prompt('введіть число'));
// if (userNumber > 0) {
//   console.log(1);
// } else if (userNumber < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// switch перевірка однакових даних в умові на строгу рівність
// const num = 10;
// switch (num) {
//   case 3: {
//     console.log('You number');
//     break;
//   }
//   case 10: {
//     console.log('You number');
//     break;
//   }
//   case 8: {
//     console.log('You number');
//     break;
//   }
//   default: {
//     console.log('нічого не підійшло Ярік не тупи');
//   }
// }

// Переписати код за допомогою однієї конструкції switch

// const number = Number(prompt('введіть число між 0 та 3'));

// if (number === 0) {
//   alert('ви ввели число 0');
// } else if (number === 1) {
//   alert('ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('ви ввели число 2 а може і 3');
// } else {
//   alert('якесь інше число');
// }

// switch (number) {
//   case 0: {
//     alert('ви ввели число 0');
//     break;
//   }
//   case 1: {
//     alert('ви ввели число 1');
//     break;
//   }
//   case 2:
//   case 3: {
//     alert('ви ввели число 2 а може і 3');
//     break;
//   }
//   default: {
//     alert('якесь інше число');
//   }
// }

// переписати з if на тернарний оператор
// const a = 4;
// const b = 1;
// const result = a + b < 4 ? 'замало' : 'забагато';
// console.log(result);

// const login = 'співробітник';
// const message =
//   login === 'співробітник'
//     ? 'привіт'
//     : login === 'директор'
//     ? 'вітаю'
//     : login === ''
//     ? 'немає логіну'
//     : '';
// console.log(message);

// let iterator = 0;
// while (iterator < 10) {
//   console.log(iterator);
//   iterator = iterator + 1;
// }

// знайдіть суми чисел від 1 до 100
// let iterator = 1;
// let result = 0;
// while (iterator <= 100) {
//   result += iterator;
//   iterator += 1;
//   console.log(result);
// }

// 1000 ділити на 2 стільки разів поки не стане менше 50б скільки це вийдеб та скільки ітерацій
// let n = 1000;
// let num = 0;

// while (n / 2 >= 50) {
//   num += 1;
//   n /= 2;
// }
// console.log(num);
// console.log(n);

// do while тіло циклу гарантовано виконається навіть якщо брехня
// do {
//   console.log('do?');
// } while (false);

// ввести число більше 100
// let number = Number(prompt('введіть більше 100'));
// while (number <= 100) {
//   number = Number(prompt('введіть більше 100'));
// }
// console.log(number);

// do {
//   number = Number(prompt('введіть більше 100'));
// } while (number <= 100);
// console.log(number);

// For
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// вивести парні числа від 2 до 10
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
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

// for (let i = 1; i <= 100; i++) {
//   let str = '';

//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }
//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }
//   console.log(str || i);
// }

for (let i = 0, star = '*'; i < 7; i++) {
  console.log(star);
  star += '*';
}
