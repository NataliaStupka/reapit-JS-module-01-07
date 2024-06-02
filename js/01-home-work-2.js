// ----- 1 ---
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// console.log('lastElementIndex:', lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log('lastElement:', lastElement);

// const newArray = fruits.splice(1, fruits.length - 2);
// console.log('newArray:', newArray);
// console.log('old array:', fruits);

//----- 2 ------
// let message = 'Web-development is creative work';
// let pricePerWord = 40;

// const words = message.split(' ').length;
// const price = words * pricePerWord;

// console.log(`'${message}' price: ${price}`);

//----- 3 ----
// const title = 'Arrays for begginers';
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

//----- 4 -----
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;

//     console.log(`total ${i}`, total);
//   }
// }
// calculateTotal(8);

//---- 5 ---
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i <= fruits.length - 1; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

//---- 6 ----

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
//   }
//   console.log('total =', total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);

//----- 7 ---
// function findLongestWord(string) {
//   let array = string.split(' ');
//   console.log('string:', string);
//   console.log('array:', array);

//   let longestWord = array[0];
//   console.log(`приймаємо перше слово за найдовше: ${longestWord} - ${longestWord.length}`);

//   for (let i = 0; i < array.length; i += 1) {
//     const wordLength = array[i].length;

//     console.log(`array[i]: '${array[i]}' довжина слова: ${wordLength}`);

//     if (wordLength > longestWord.length) {
//       longestWord = array[i];
//       console.log('довше за попереднє :', longestWord);
//     }
//   }
//   console.log(`Найдовше слово в реченні: ${longestWord} - ${longestWord.length} літер`);
//   return longestWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

//---- 8 ---

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);

//---- 9 ----
//повертає однакові номери з двох масивів

// function getCommonElements(array1, array2) {
//   console.log('array1:', array1);
//   console.log('array2:', array2);
//   let newArray = [];

//   for (let number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }
//   console.log(`newArray: [${newArray}]`);
//   return newArray;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// -------------  Object ----------
//----- 10 ----
//приклад додавання об'єкту властивості, ім'ям яке ми заздалегідь не знаємо

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

//------ 11 ---
//  for ...in

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// console.table(apartment);

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   console.log(`ключ: ${key} - значення властивості: ${apartment[key]}`);

//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(`Keys: ${keys}; Values: ${values}`);

// ----- 12 --

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     console.log(key);

//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   console.log(propCount);
//   return propCount;
// }

// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

//------- 13 ----
// "for ... of" замість "for ... in"

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(`Значення ключів - ${values}`);

//----- 14 ---

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);
//   console.log(values);

//   for (const value of values) {
//     totalSalary += value;
//   }

//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

//------ 15 ---

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// console.table(products);

// function getProductPrice(productName) {
//     let price = null;

//   for (const product of products) {
//     console.log(product);

//     if (product.name === productName) {
//       console.log(`name: ${product.name} - find product: ${productName}`);

//       price = product.price;
//     }
//   }

//   return price;
// }

// getProductPrice('Radar');
// getProductPrice('Grip');
// getProductPrice('Scanner');
// getProductPrice('Droid');
// getProductPrice('Engine');

//----- 16 ---

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// console.table(products);

// function getAllPropValues(propName) {

//   const arrayValues = [];

//   for (const product of products) {

//     if (Object.keys(product).includes(propName)) {
//       arrayValues.push(product[propName]);
//     }
//   }

//   console.log(arrayValues);
//   return arrayValues;
// }

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');

//------ 17 ----

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// console.table(products);

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }

//   console.log('totalPrice:', totalPrice);
//   return totalPrice;
// }

// calculateTotalPrice('Blaster');
// calculateTotalPrice('Radar');
// calculateTotalPrice('Droid');
// calculateTotalPrice('Grip');
// calculateTotalPrice('Scanner');

//------- 18
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   console.log('data', data);

//   const task = { completed, category, priority, ...data };
//   console.log('task', task);
//   return task;

// }

// makeTask({});
// makeTask({  category: 'Homemade', priority: 'Low', text: 'Take out the trash',});
// makeTask({ category: 'Finance', text: 'Take interest' });
// makeTask({ priority: 'Low', text: 'Choose shampoo' });
// makeTask({ text: 'Buy bread' });

//------ 19 ---
// function add(...args) {

//   let sum = 0;

//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// }

// add(15, 27);
// add(12, 4, 11, 48);

//------ 20
// function addOverNum(num, ...args) {
//   let total = 0;
//   console.log('num:', num);
//   console.log('...args:', ...args);

//   for (const arg of args) {
//     if (arg > num) {
//       total += arg;
//     }
//   }
//   console.log('total:', total);
//   return total;

// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);

//--------- 21

// Change code below this line
// function findMatches(array, ...args) {
//   console.log('array:', array);
//   console.log('args:', args);
//   console.log('...args:', ...args);

//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);

//------- 22

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   getBooks() {
//     console.table(this.books);
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     console.log('this.books:', this.books);
//     console.log('old Name:', oldName);
//     console.log('new Name:', newName);

//     for (const bookName of this.books) {
//       if (bookName === oldName) {
//         const indexBook = this.books.indexOf(bookName);

//         const newArray = this.books.splice(indexBook, 1, newName);
//         console.log('splice вирізало в новий масив (а старий - замінило):', newArray);

//         console.log('new this.books:', this.books);
//         return this.book;
//       }
//     }

//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// bookShelf.getBooks();
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// bookShelf.updateBook('The last kingdom', 'Dune');

//------ 23(1)
//крамниця зілля у старої жаби-1

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   removePotion(potionName) {
//     const indexElement = this.potions.indexOf(potionName);
//     console.log(indexElement);
//     this.potions.splice(indexElement, 1);

//     console.log(this.potions);
//     return this.potions;
//   },

//   updatePotionName(oldName, newName) {
//     console.log(this.potions);
//     console.log(`oldName: ${oldName}, newName: ${newName}`);
//     const index = this.potions.indexOf(oldName);
//     this.potions.splice(index, 1, newName);

//     console.log(this.potions);
//     return this.potions;
//   },
// };

//atTheOldToad.removePotion('Dragon breath');
//atTheOldToad.removePotion('Speed potion');

//atTheOldToad.updatePotionName;
//atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
//atTheOldToad.updatePotionName('Stone skin', 'Invisibility');

//------ 24(2)
//крамниця зілля у старої жаби-2
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//     getPotions() {
//     console.table('get start:', this.potions);
//     return this.potions;
//   },

//   //додавання зілля
//   addPotion(newPotion) {
//     for (const object of this.potions) {
//       if (object.name === newPotion.name) {
//         console.log(`Error! Potion '${newPotion.name}' is already in your inventory!`);
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     console.log('newPotion', newPotion);

//     this.potions.push(newPotion);
//     console.log('result add', this.potions);
//   },

//   //видалення зілля
//   removePotion(potionName) {
//     console.log('remove start:', this.potions);

//     for (const object of this.potions) {
//       console.log(`1) ObjectName: '${object.name}', potionName: '${potionName}'`);

//       if (object.name === potionName) {
//         console.log('index:', this.potions.indexOf(object));

//         const potionIndex = this.potions.indexOf(object);
//         return this.potions.splice(potionIndex, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   //переіменування зілля
//   updatePotionName(oldName, newName) {
//     console.log('update start:', this.potions);
//     console.log(`oldName - '${oldName}', newName - '${newName}'`);

//     for (const object of this.potions) {
//       if (object.name === oldName) {
//         return (object.name = newName);
//       }
//     }
//     console.log('udate result', this.potions);
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// atTheOldToad.getPotions(); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }); //в масиві potions останнім елементом буде цей об'єкт
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 }); //в масиві potions останнім елементом буде цей об'єкт

// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); // масив potions не змінюється
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); // массив potions не змінюється
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); //повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); //повертає рядок "Error! Potion Stone skin is already in your inventory!"

// atTheOldToad.removePotion('Dragon breath'); //у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion('Speed potion'); //у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'); //у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'); //у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

//------------- 25 ---(із практики)
//управління особистим кабінетом інтернет банку

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction);

// const account = {
//   balance: 0,
//   transaction: [
//     {
//       id: 16,
//       amount: 250,
//       type: 'deposit',
//     },
//   ],

//   //метод створює та повертає об'єкт транзакції
//   createTransaction(amount, type) {
//     return {
//       id: Date.now(),
//       amount,
//       type,
//     };
//   },

//   //метод додавання сумми до балансу
//   deposit(amount) {
//     if (amount <= 0) {
//       return 'Error';
//     }
//     const item = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//     this.transaction.push(item);
//   },

//   //метод зняття суми з балансу
//   withdraw(amount) {
//     if (amount > this.balance || amount <= 0) {
//       return 'Недостатньо коштів';
//     }
//     const item = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.balance -= amount;
//     this.transaction.push(item);
//   },

//   //метод повертає поточний баланс
//   getBalance() {
//     return this.balance;
//   },

//   //метод шукає і повертає обєкт транзакії по його id
//   getTransactionDetails(id) {
//     for (const transaction of this.transaction) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return 'Empty';
//   },

//   // метод повертає кількість коштів певного типу транзакцій
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transaction) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// account.deposit(1000);
// account.deposit(5);
// account.deposit(200);
// account.withdraw(150);
// account.withdraw(5000);
// console.log(account.withdraw(-5000));
// console.log(account.getTransactionDetails(16));

// console.log(account);
