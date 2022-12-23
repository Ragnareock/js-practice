/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

// class User {
//     #userLogin;
//     #password;
  
//     static test = 5;
  
//     constructor(userInfo) {
//       // this = {};
//       const { firstName, lastName, age = null, phoneNumber, login, password } = userInfo;
  
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//       this.phoneNumber = phoneNumber;
//       this.#userLogin = login;
//       this.#password = password;
//       // return this;
//     }
  
//     get login() {
//       return this.#userLogin;
//     }
  
//     set login(newLogin) {
//       this.#userLogin = newLogin;
//     }
  
//     changeFirstName(newFirstName) {
//       this.firstName = newFirstName;
//       User.validateEmail();
//     }
  
//     static validateEmail() {
//       console.log('Hello');
//     }
//   }
  
//   const user1 = new User({
//     lastName: 'Smith',
//     age: 30,
//     phoneNumber: '(096) 58-05-459',
//     login: 'id@si.pg',
//     password: '123456',
//     firstName: 'Edward',
//   });
  
//   console.log(user1);
  
//   user1.changeFirstName('Oleksii');
  
//   console.dir(User);
  
//   const obj = new Object();

/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор
// const User = function (userInfo) {
//     const { firstName, lastName, age = null, phoneNumber, login, password } = userInfo;
  
//     // this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.phoneNumber = phoneNumber;
//     this.login = login;
//     this.password = password;
//     // return this;
//   };
  
//   User.prototype.changeFirstName = function (newFirstName) {
//     this.firstName = newFirstName;
//   };
  
//   console.dir(User);
  
//   const user1 = new User({
//     lastName: 'Smith',
//     age: 30,
//     phoneNumber: '(096) 58-05-459',
//     login: 'id@si.pg',
//     password: '123456',
//     firstName: 'Edward',
//   });
  
//   console.log(user1);
  
//   const user2 = new User({
//     firstName: 'Michael',
//     lastName: 'Gill',
//     age: 20,
//     login: 'cu@hecekalo.edu',
//     phoneNumber: '(097) 60-62-231',
//     password: 'qwerty123',
//   });
  
//   console.log(user2);
  
//   user1.changeFirstName('Oleksii');
//   user2.changeFirstName('Marvin');
  
//   console.log(user1);
//   console.log(user2);
  
  // const user1 = {
  //   firstName: 'Edward',
  //   lastName: 'Smith',
  //   age: 30,
  //   phoneNumber: '(096) 58-05-459';
  //   login: 'id@si.pg';
  //   password: '123456'
  // };
  
  // const user2 = {
  //   firstName: 'Michael',
  //   lastName: 'Gill',
  //   age: 20,
  //   login: 'cu@hecekalo.edu';
  //   phoneNumber: '(097) 60-62-231';
  //   password: 'qwerty123'
  // };
  
  //? Створюємо методи для наших екземплярів

  /*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? email - email
? age - вік, число
? numberOfPosts - кількість постів, число
? topics - масив тем, на яких спеціалізується блогер
? Клас очікує один параметр – об'єкт налаштувань з однойменними властивостями.
? Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${вік} years old and has ${кількість постів} posts.
? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
*/

// class Blogger {
//   constructor(bloggerInfo) {
//     // this = {};
//     const { email, age, numberOfPosts, topics } = bloggerInfo;

//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//     // return this;
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     if (value > 0) {
//       this.numberOfPosts += value;
//     }
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

/*
? Напиши клас Storage, який створює об'єкти для управління складом товарів.
? При виклику ми отримуємо один аргумент - початковий масив товарів, і записуватиме його у властивість items.
? Додай методи класу:
? getItems() – повертає масив товарів.
? addItem(item) - отримує новий товар та додає його до поточних.
? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
*/
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     if (this.items.includes(item)) {
//       const idxOfItem = this.items.indexOf(item);

//       this.items.splice(idxOfItem, 1);
//     }
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.log(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.
*/

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// console.log(mango.email);
// mango.email = 'hacag@ce.ie';
// console.log(mango.email);

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
/*
? Напиши клас Notes, який управляє колекцією нотаток у властивості items.
? Нотатка це об'єкт із властивостями text та priority.
? Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.
?
? {
? LOW: 'low',
? NORMAL: 'normal',
? HIGH: 'high'
? }
?
? Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(notesArr) {
//     this.items = notesArr;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const idxOfNote = this.items.findIndex(el => el.text === text);

//     this.items.splice(idxOfNote, 1);
//   }

//   updatePriority(text, newPriority) {
//     const note = this.items.find((el, idx, arr) => {
//       return el.text === text;
//     });

//     note.priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });
// console.log(myNotes);

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes);

// myNotes.removeNote('Моя перша нотатка');
// console.log(myNotes);

// myNotes.updatePriority('Моя друга нотатка', Notes.Priority.HIGH);
// console.log(myNotes);

/*
? Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean}
? та оголошує одну властивість on - стан вкл/викл (true/false).
? За замовчуванням значення властивості on має бути false.
*/

// class Toggle {
//     constructor(settings = {}) {
//       const { isOpen = false } = settings;
  
//       this.on = isOpen;
//     }
  
//     toggle() {
//       this.on = !this.on;
//     }
//   }
  
//   const firstToggle = new Toggle({ isOpen: true });
  
//   console.group('firstToggle');
//   console.log(firstToggle.on);
//   firstToggle.toggle();
//   console.log(firstToggle.on);
//   firstToggle.toggle();
//   console.log(firstToggle.on);
//   console.groupEnd('firstToggle');
  
//   const secondToggle = new Toggle();
  
//   console.group('secondToggle');
//   console.log(secondToggle.on);
//   secondToggle.toggle();
//   console.log(secondToggle.on);
//   console.groupEnd('secondToggle');

/*
 * Наслідування з extends та super
 */
// class User {
//     #login;
//     #email;
  
//     constructor({ firstName, lastName, age, login, email }) {
//       // this = {}
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.userAge = age;
//       this.#login = login;
//       this.#email = email;
//       // return this;
//     }
  
//     get login() {
//       return this.#login;
//     }
  
//     set login(newLogin) {
//       this.#login = newLogin;
//     }
  
//     get email() {
//       return this.#email;
//     }
  
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
  
//     getFullName() {
//       return `${User.trimStr(this.firstName)} ${User.trimStr(this.lastName)}`;
//     }
  
//     static trimStr(str) {
//       return str.trim();
//     }
//   }
  
//   class Developer extends User {
//     constructor(developerInfo) {
//       const { countOfProjects, ...otherProps } = developerInfo;
  
//       super(otherProps);
  
//       this.countOfProjects = countOfProjects;
//     }
  
//     doDeveloperWork() {
//       console.log(`Роблю якусь роботу`);
//     }
//   }
  
//   class Manager extends User {
//     constructor(managerInfo) {
//       const { managerProp, ...otherProps } = managerInfo;
  
//       super(otherProps);
  
//       this.managerProp = managerProp;
//     }
  
//     doManagerWork() {
//       console.log(`Роблю якусь роботу`);
//     }
//   }
  
//   const user = new Developer({
//     countOfProjects: 10,
//     firstName: 'Nicholas',
//     lastName: 'West',
//     age: 30,
//     login: 'vcvd',
//     email: 'iseegi@sak.sx',
//   });
  
//   console.log(user);
  
//   const someManager = new Manager({
//     managerProp: 343,
//     firstName: 'Caleb',
//     lastName: 'Murray',
//     age: 20,
//     login: 'bgff',
//     email: 'uwigicnaf@ra.be',
//   });
  
//   console.log(someManager);

/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
// const user = {
//     firstName: 'Oleksii',
//     age: 40,
//   };
  
//   const user2 = Object.create(user);
  
//   user2.firstName = '';
//   user2.lastName = 'Brock';
  
//   console.log('user: ', user);
//   console.log('user2: ', user2);
//   console.log(user2.firstName);
  
//   const user3 = Object.create(user2);
  
//   user3.firstName = 'Celia';
  
//   console.log('user3: ', user3);
  
  // https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg
  
  //* Власні та не власні властивості об'єкта
  
  //* Перевірка власних властивостей obj.hasOwnProperty()
  // console.log(user3.hasOwnProperty('firstName'));
  
  //* Цикл for...in, перебирає і власні, і не власні властивості.
//   for (const prop in user3) {
//     if (user3.hasOwnProperty(prop)) {
//       console.log(`${prop}: ${user3[prop]}`);
//     }
//   }