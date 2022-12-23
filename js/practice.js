// const user = {
//   firstName: 'Andriy',
//   lastName: 'Lobash',
//   age: 37,
//   login: 'test@gmail.com',
// };

// console.log(user);

  // ? Напиши скрипт управління особистим кабінетом інтернет-банку.
  // ? Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
  // ? Типів транзакцій лише два.
  // ? Можна покласти або зняти гроші з рахункку.
  // ? Кожна транзакція це об'єкт із властивостями: id, type та account.

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }

// const account = {
//   startId:0,
//   balance:0,
//   transactions: [],
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.generateId()
//     }
//   },
//   generateId() {
//     return this.startId +=1
//   },
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
//     this.balance += amount;
// },
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
//       this.balance -= amount;
//     }
//     else {
//       console.log('Не можливо зняти суму більшу за тієї, що на рахунку:', this.balance);
//     }
//   },
//   getTransaktions() {
//     console.log(this.transactions);
//   }
// }
// console.log(account);
// account.deposit(5000);
// console.log(account);
// account.withdraw(1000);
// console.log(account);
// account.withdraw(4500);
// console.log(account);
// console.log(account.transactions);
// =================================================================

// Корзина товарів https://www.youtube.com/watch?v=nW2JV_ZX7jU&t=5558s

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
   },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const {name} = this.items[i];
      
      if (productName === name) {
        console.log('Знайшли такий продукт:', productName);
        console.log('Індекс:', i);

        items.splice(i, 1);
      }
    }
   },
  clear() {
    this.items = [];
   },
  countTotalPrice() { 
    const { items } = this;
    let total = 0;

    for (const {price, quantity} of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) { },
  decreaseQuantity(productName) { },
}

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'mango', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

console.log('Total:', cart.countTotalPrice());

cart.remove('mango');

console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());
console.log('Total:', cart.countTotalPrice());

