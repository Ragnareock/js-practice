/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 40,
//   login: 'test@gmail.com',
// };

// console.log(user);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// console.log(user.firstName);
// console.log(user['age']);

// user.age = 50;
// console.log(user);

// user.gender = 'male';
// console.log(user);

/*
 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// const firstName = 'Oleksii';
// const userEmail = 'test@gmail.com';

// const user = {
//   firstName,
//   userEmail,
// };

// console.log(user);

/*
 * Присвоєння за посиланням
 */

// const user = {
//   firstName: 'Brett',
//   lastName: 'Romero',
//   age: 20,
// };
// const copyUser = user;

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

// user.age = 21;

// console.log('user: ', user);
// console.log('copyUser: ', copyUser);

/*
 * Все у цьому світі об'єкти
 */

// const arr = [1, 2, 3, 4, 5];

// console.log(arr);

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   4: 5,
//   length: 5,
// };
// console.log(obj);

// const fn = function () {
//   console.log('Hello');
// };

// console.dir(fn);

/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає властивість mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: false,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди.
? Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній total.
? Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
*/
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// const salariesValues = Object.values(salaries);

// for (const salary of salariesValues) {
//   total += salary;
// }

// console.log(total);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }



// // const book = {
// //   title: "The Last Kingdom",
// //   author: "Bernard Cornwell",
// //   genres: ["historical prose", "adventure"],
// //   rating: 8.38,
// // };

// // for (const key in book) {
// //   // Якщо це власна властивість - виконуємо тіло if
// //   if (book.hasOwnProperty(key)) {
// //     console.log(key);
// //     // console.log(book[key]);
// //   }

//   // Якщо це невласна властивість - нічого не робимо
// }


/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/
// const stones = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 200, quantity: 2 },
//   ];
  
//   const calcTotalPrice = function (stones, stoneName) {
//     for (const stone of stones) {
//       if (stone.name === stoneName) {
//         return stone.price * stone.quantity;
//       }
//     }
  
//     return 'Каменя за такою назвою не знайдено';
//   };
  
//   console.log(calcTotalPrice(stones, 'Смарагд')); // 5200
//   console.log(calcTotalPrice(stones, 'Діамант')); // 8100
//   console.log(calcTotalPrice(stones, 'Аконіт')); // Каменя за такою назвою не знайдено

// const filmoteka = [
//     {
//       id: 1,
//       title: 'Duna',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 10,
//       actors: ['Amelia Gibson', 'Cameron Clayton', 'Viola Vasquez', 'Lula Collins', 'Victor Nichols'],
//       adult: false,
//     },
//     {
//       id: 2,
//       title: 'Venom',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 8,
//       actors: ['Inez Greer', 'Barry Curtis', 'Blanche Rios', 'Glen Perry', 'Logan Powers'],
//       adult: true,
//     },
//     {
//       id: 3,
//       title: 'Luca',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 9,
//       actors: ['Marguerite Gibbs', 'Lora Alvarez', 'Jorge Simpson', 'Thomas Hall', 'Darrell Hunter'],
//       adult: false,
//     },
//     {
//       id: 4,
//       title: 'Free Guy',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 6,
//       actors: ['Calvin Andrews', 'Mamie Myers', 'Madge Townsend', 'Ralph Kim', 'Jorge Reese'],
//       adult: true,
//     },
//     {
//       id: 5,
//       title: 'Saw',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 7,
//       actors: ['Adele Marsh', 'Melvin Burgess', 'Jesus Reese', 'Harriet Moreno', 'Curtis Cox'],
//       adult: true,
//     },
//   ];
  
  //? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.
  // const getAllTitlesOfFilms = function (films) {
  //   const titlesArr = [];
  
  //   for (const film of films) {
  //     titlesArr.push(film.title);
  //   }
  
  //   return titlesArr;
  // };
  
  // console.log(getAllTitlesOfFilms(filmoteka));
  
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key])
// }
// console.log(values);


  //? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
  // const findFilmByName = function (films, filmTitle) {
  //   // 1 Варіант
  //   // let findedFilm = null;
  //   // for (const film of films) {
  //   //   if (film.title.toLowerCase() === filmTitle.toLowerCase()) {
  //   //     findedFilm = film;
  //   //     break;
  //   //   }
  //   // }
  //   // return findedFilm;
  //   // 2 Варіант
  //   // for (const film of films) {
  //   //   if (film.title.toLowerCase() === filmTitle.toLowerCase()) {
  //   //     return film;
  //   //   }
  //   // }
  // };
  
  // console.log(findFilmByName(filmoteka, 'Venom'));
  
  //? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.
  // const getAdultFilms = function (films) {
  //   const adultFilms = [];
  
  //   for (const film of films) {
  //     if (film.adult) {
  //       adultFilms.push(film);
  //     }
  //   }
  
  //   return adultFilms;
  // };
  
  // console.log(getAdultFilms(filmoteka));
  
  //? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.
  // const getNotAdultFilms = function (films) {
  //   const notAdultFilms = [];
  
  //   for (const film of films) {
  //     if (!film.adult) {
  //       notAdultFilms.push(film);
  //     }
  //   }
  
  //   return notAdultFilms;
  // };
  
  // console.log(getNotAdultFilms(filmoteka));

  /*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// 1 Варіант через цикл for...in
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// const newSalaries = Object.create(salaries);
// newSalaries.Oleksii = 100;

// console.log('salaries: ', salaries);
// console.log('newSalaries: ', newSalaries);

// let total = 0;

// for (const salary in salaries) {
//   //   console.log(salary);
//   //   console.log(salaries[salary]);

//   if (salaries.hasOwnProperty(salary)) {
//     total += salaries[salary];
//   }
// }

// console.log(total);

// 2 Варіант Object.keys() + for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

const salariesKeys = Object.keys(salaries);
let total = 0;

for (const key of salariesKeys) {
    console.log(key);
    console.log(salaries[key]);

  total += salaries[key];
}

console.log(total);






function countProps(object) {

  const keys = Object.keys(object);
  let propCount = 0;
  for (const key of keys) {
    propCount += key;

    return propCount;
  }

}

// 3 Варіант Object.values() + for...of
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   };
  
//   const salariesValues = Object.values(salaries);
//   let total = 0;
  
//   for (const salary of salariesValues) {
//     total += salary;
//   }
  
//   console.log(total);

/*
 * Методи об'єкта. this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

// const filmDuna = {
//   title: 'Duna',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
//   rating: 10,
//   actors: [
//     'Rosetta Pena',
//     'Clayton Crawford',
//     'Larry Norton',
//     'Georgia Garrett',
//     'Jackson Ballard',
//   ],
//   adult: false,

//   changeTitle(newTitle) {
//     this.title = newTitle;
//   },

//   addActor(newActor) {
//     this.actors.push(newActor);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   isAdult() {
//     return this.adult;
//   },
// };

// filmDuna.changeTitle('Venom');
// console.log(filmDuna);

// filmDuna.addActor('Chad');
// console.log(filmDuna);

// filmDuna.updateRating(8);
// console.log(filmDuna);

// console.log(filmDuna.isAdult());


