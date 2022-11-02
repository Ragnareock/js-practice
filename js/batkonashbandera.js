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
