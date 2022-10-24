const productName = 'Droid';
const pricePerItem = 2000;

pricePerItem = pricePerItem + 1500;
productName = 'Repair droid';

const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;

const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

const pricePerDroid = 800;
const deliveryFee = 50;
const messages = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

function sayHi() {
  console.log('Hello, this is my first function!');
}
sayHi();

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

function add(a, b, c) {
  return a + b + c;
}
add(2, 5, 8); // 15
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
