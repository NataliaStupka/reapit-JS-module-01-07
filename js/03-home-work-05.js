//this, call/apply/bind,  прототипи, класи (class, extends, super),
//static(статичні властивості), # приватні властивості
// get/set (отримання/зміна)

//--------------------- 1 (this) -------------------------------
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//---------------- 2 (this) ----------------------------------------------------------------

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],

//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };

// console.table(historyService.getOrdersByEmail('solomon@topmail.net'));
// historyService.getOrdersByEmail('artemis@coldmail.net');

//------------------- 3 (Object.create(obj), _proto_) ---------------------------------
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// //-----
// ancestor.isPrototypeOf('parent'); // true
// ancestor.hasOwnProperty('surname'); //true
// ancestor.surname; // "Dawson"
// ancestor.heritage; // "Irish"
// parent.hasOwnProperty('surname'); //true
// parent.hasOwnProperty('heritage'); // false
// parent.surname; // "Moore"
// parent.heritage; // "Irish"
// child.hasOwnProperty('surname'); // false
// child.surname; // "Moore"
// child.hasOwnProperty('heritage'); // false
// child.heritage; // "Irish"

//-------- 4.1 (class, new) --- class Car { constructor() {}} -------------------------------------

// class Car {
//   constructor(brand, model, price) {
//     (this.brand = brand), (this.model = model), (this.price = price);
//   }
// }
// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));

//------ 4.2 ----------------------------------

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

//------------ 5 ----------------------------
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   //методи
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

//-----  6 --------------------
// class Storage {
//   //приймає масив елементів
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   //додає новий елемент до масиву
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   //видаляє певний елемент з масиву (також можна через filter) (this.items = this.items.filter(item => item !== itemToRemove))
//   removeItem(itemToRemove) {
//     console.log('itemToRemove:', itemToRemove);
//     const includesItem = this.items.includes(itemToRemove); //чи є в масиві елемент
//     const indexItem = this.items.indexOf(itemToRemove);

//     return includesItem ? this.items.splice(indexItem, 1) : this.items;
//   }
// }
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// console.log('getItems:', storage.getItems());
// storage.addItem('Droid');
// console.log('withAddItems:', storage.getItems());
// storage.removeItem('Prolonger');
// console.log('withRemoveItem:', storage.getItems());

//----------------- 7 ----------
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     //this.value = this.value + str;
//   this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     //this.value = str + this.value + str;
//  this.padStart(str);
//  this.padEnd(str);
//   }
// }

// const builder = new StringBuilder('.');

// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//------- 8 (# приватна властивість)-------
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   //видаляє itemToRemove
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//------ 9 заміна на гетери і сетери ------ get/set ------------------
// class Car {
//    #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

//--------------- 10 статична властивість -------------------
// class Car {
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     console.log(`newPrice: ${newPrice}, maxPrice: ${Car.MAX_PRICE}, this.#price: ${this.#price}`);
//     newPrice <= Car.MAX_PRICE ? (this.#price = newPrice) : this.#price;
//     //або
//     //if(newPrice <= Car.MAX_PRICE)
//     //{ this.#price = newPrice }
//     //return
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//---- 11 статичний метод -------------------------
// class Car {
//   static #MAX_PRICE = 50000;
//   // статичний метод
//   static checkPrice(price) {
//     return price >= Car.#MAX_PRICE
//       ? 'Error! Price exceeds the maximum'
//       : 'Success! Price is within acceptable limits';
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//
//============== ПРАКТИКА Рисіч =====================================
//--------- 1 - this, call, деструктуризація ------------------------

// //Магазин каміння-1
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     console.log('-----------------------------------------------------------');
//     console.log(`Рахуємо вартість '${stoneName}'`);
//     //шукаємо в масиві обєктів потрібний камінь(об'єкт), дестриктуризуємо потрібні властивості
//     const { price, quantity } = this.stones.find(({ name }) => name === stoneName);
//     console.log(`price - ${price}, quantity - ${quantity}`);

//     return price * quantity;
//   },
// };

// console.log('Emerald:', chopShop.calcTotalPrice('Emerald'));
// console.log('Diamond:', chopShop.calcTotalPrice('Diamond'));
// console.log('Sapphire:', chopShop.calcTotalPrice('Sapphire'));
// console.log('Ruby:', chopShop.calcTotalPrice('Ruby'));

// //Магазин каміння-2
// const shop2 = {
//   stones: [
//     { name: 'Щебінь', price: 1300, quantity: 4 },
//     { name: 'Пісок', price: 2700, quantity: 3 },
//   ],
// };

// //перевикористаємо функцію із chopShop, передаємо новий контекст(shop2) за допомогою call(інший об'єкт, stoneName)
// console.log('Щебінь:', chopShop.calcTotalPrice.call(shop2, 'Щебінь'));
// console.log('Пісок:', chopShop.calcTotalPrice.call(shop2, 'Пісок'));

//---------------- 2 - this, ?? оператор нульового поєднання------------------
//калькулятор

// const calculator = {
//   read(a, b) {
//     //створюємо ключ a, b
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     //беремо a/b, але за дефолтом підставляємо 0
//     return (this.a ?? 0) + (this.b ?? 0); // ?? оператор нульового поєднання, якщо нічого не передадуть a/b= 0, а не NaN (undefind + udefind = NaN). Дужки щоб не було конфліктів
//   },
//   mult() {
//     //беремо a/b, але за дефолтом підставляємо 1
//     return (this.a ?? 1) * (this.b ?? 1);
//   },
// };

// calculator.read(3, 2);
// console.log('add:', calculator.add());
// console.log('mult:', calculator.mult());

//--------------- 3 class, extends, super ------------------------------
// //головний клас:
// class User {
//   //порахує кількість створенних екземплярів
//   static counter = 0;
//   static addUser() {
//     this.counter += 1;
//     console.log(`Number of user ${this.counter}`);
//   }
//   #location;
//   constructor({ name, email, age = 18, location = 'World', pasword } = {}) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.#location = location;
//     this.password = pasword;
//     User.addUser();
//   }

//   sayHello() {
//     console.log('sayHello', this.name);
//   }
//   #getEmail() {
//     console.log('#getEmail', this.email);
//   }
//   get locale() {
//     return this.#location;
//   }
//   set locale(city) {
//     const value = prompt('Enter password');
//     this.#getEmail();
//     if (value === this.password) {
//       this.#location = city;
//       console.log(this.#location);
//     } else {
//       console.log('Пароль не вірний');
//     }
//   }
// }

// //на основі головного класу User, створюємо
// class Avatar extends User {
//   constructor({ name, email, location, password, age, damage }) {
//     //щоб використовувати бадьківський constructor
//     super({ name, email, location, password, age });
//     this.damage = damage;
//   }
//   //метод цього класу (доступний Avatar, але не User)
//   attack() {
//     console.log(`Attack with damage ${this.damage}`);
//   }
// }

// class Zombi extends User {
//   constructor({ name, email, location, password, age, poison }) {
//     super({ name, email, location, password, age });
//     this.poison = poison;
//   }
//   toBite() {
//     console.log(`Bite with ${this.poison}`);
//   }
// }

// class Dog extends Zombi {
//   constructor({ name, email, location, password, age, poison }) {
//     super({ name, email, location, password, age });
//   }
// }

// //екземпляр на основі класу Zombi
// const test1 = new Zombi({
//   name: 'User B',
//   email: 'gmail@gmail.com',
//   age: 99,
//   poison: 500,
// });

// //екземпляр на основі класу Avatar
// const test = new Avatar({
//   name: 'User A',
//   email: 'test@gmail.com',
//   location: 'Lviv',
//   password: 'qwerty111',
//   damage: 700,
// });

// console.log('test:', test);
// console.log('test1:', test1);

//-------------------- 4 практика (4.1) ---------------------

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     (this.email = name),
//       (this.age = age),
//       (this.numberOfPosts = numberOfPosts),
//       (this.topics = topics);
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo());
// poly.updatePostCount(4);
// console.log(poly.getInfo());

//-------------------- 4 практика (4.2) ---------------------
// Напиши клас який створює обєкти для керуванням складу товарів.
//При виклику приймає один масив
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     //якщо такий товар відсутній, то добавляємо його
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//       return;
//     }
//     console.log('Такий товар вже є:', item);
//   }
//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     // !! це приведення до буля; ~ це -(x-1);
//     // if(!!~idx)
//     if (this.items.includes(item)) {
//       this.items.splice(idx, 1);
//     }
//   }
// }

// const storage = new Storage(['яблуко', 'лимон', 'виноград']);
// console.log('?', storage.getItems());
// storage.addItem('банан');
// storage.addItem('яблуко');
// console.table(storage.getItems());
// storage.removeItem('лимон');
// console.table(storage.items);

//-------------- 4 практика (4.3) ---------------------
// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     (this.#login = login), (this.#email = email);
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     //змінюємо логін, якщо він відрізняється від нового
//     if (this.#login !== newLogin) {
//       this.#login = newLogin;
//     }
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (this.#email !== newEmail) {
//       this.#email = newEmail;
//     }
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });
// console.log(mango.login); //виклик геттера
// mango.login = 'Mangodoge'; //виклик сеттера
// console.log(mango.login);

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
// console.log(poly.login); //виклик геттера
// poly.login = 'Polycutie'; //виклик сетера
// console.log(poly.login);

//-------------- 4 практика (4.4) ---------------------
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(note) {
//     this.items = note;
//   }

//   addNote(note) {
//     const inArr = this.items.some(({ text }) => text === note);
//     if (!inArr) {
//       this.items.push(note);
//     }
//   }
//   removeNote(text) {
//     //шукаємо індех елемента, якщо він є (для видалення елемента)
//     // ({text : noteText}) - перейменували бо були однакові імена
//     const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
//   updateNote(text, newPriority) {
//     const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//     //якщо є елементи з індексом від нуля і вище (!!~idx)
//     if (!!~idx) {
//       this.items[idx].priority = newPriority;
//     }
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);
// myNotes.addNote({ text: 'Моя друга замітка', priority: Notes.Priority.NORMAL });
// console.log(myNotes.items);
// myNotes.addNote({ text: 'Моя третя замітка', priority: Notes.Priority.HIGH });
// console.log(myNotes.items);
// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);
// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);
