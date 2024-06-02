//calback function, arrow function, map, filter, find, every/some, reduce

//---- 1 --------
//callback

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Ultracheese', deliverPizza));
// console.log(makeMessage('Royal Grand', makePizza));

//------ 2 -----

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza "${pizzaName}" is being prepared, please wait...`);
//   callback(pizzaName);
// }

// //Виклик функції "makePizza"
// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log('Deliver Pizza:', `Delivering pizza "${pizzaName}".`);
// });

// const eatPizza = pizzaName => console.log(`Eating pizza "${pizzaName}"`);
// makePizza('Ultracheese', eatPizza);

//---------------- 3 ---------------
//замовлення піци

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(`There is no pizza with a name "${pizzaName}" in the assortment.`);
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//------ 4 -----
//рефакторінг for...of  у  forEach

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(number => {
//     totalPrice += number;
//   });
//   console.log(totalPrice);

//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

//-------- 5 ----
//рефакторінг;

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // console.log(numbers.filter(number => number > value));
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);

//-------- 6 ------
//рефакторінг функції у стрілочну функцію

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));

//------- 7 -----

// function changeEven(numbers, value) {
//   const newArray = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });

//   return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

//------- 8 -----------------------------------------------------------

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//------ 9 -----------------------------------------------------------

// const getUserNames = users => users.map(user => user.name);

// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },

//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ]),
// );

//-------- 10 ------------------------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

//------- 11 --------------------------------------------------------------
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, index, array) => {
//   array.indexOf(book) === index;
//   console.table(array);
//   console.log(`Книга "${book}" під індексом "${index}" = "${array.indexOf(book)}"`);
// });

//-------- 12  Перебираючі методи [масиву] ----------------------------------------------------------

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// //повертає user з "певними" друзями ------------- (.filter())
// const getUsersWithFriend = (users, friendName) => {
//   const userwithFriend = users.filter(user => user.friends.includes(friendName));
//   console.log('UserwithFriend:', userwithFriend);
//   return userwithFriend;
// };

// //повернути всіх друзів, без повторюваннь -------------- (.flatMap(), .filter())
// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   console.log('AllFriends:', allFriends);
//   const uniqueFriend = allFriends.filter((friend, index, array) => {
//     return array.indexOf(friend) === index;
//   });
//   console.log('UniqueFriend:', uniqueFriend);
// };

// //повертає масиив активних друзів ------------- (.filter())
// const getActiveUsers = users => {
//   return users.filter(user => user.isActive);
// };
// //повертає масиив не активних друзів ------- (.filter())
// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive);
// };

// //повертає об'єкт користувача з вказанним email -------- (.find())
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// //перевіряє, чи всі користувачи зараз активні ----- (.every())
// const isEveryUserActive = users => users.every(user => user.isActive);

// //перевіряє, чи є хоч один активний user ---- (.some())
// const isAnyUserActive = users => users.some(user => user.isActive);

// //сума балансу усіх юзерів  -----  (.reduce((acc, el, ind, array) => {}, iniialValue;))
// const calculateTotalBalance = users =>
//   users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);

// //повертає масив users за зростанням балансу ------ (.sort((a,b) => a - b))
// const sortByAscendingBalance = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// };

// //юсери по спаданню кількості друзів ------- (.sort())
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// //за алфавітним порядком, за ім'ям ------ (.sort((a,b) => a.localeCompare(b));)
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };

// //повертає імена юзерівб відсортованих по збільшенню друзів  ------ .sort().map
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
// };

// //повертає [уікальні імена друзів] відсортованих за алфавітом ------ .flatMap().filter().sort()
// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// };

// //
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, user) => {
//       return acc + user.balance;
//     }, 0);
// };

// getUsersWithFriend(users, 'Briana Decker');
// getUsersWithFriend(users, 'Adrian Cross');

// getFriends(users);
// console.log('ActiveFriends:', getActiveUsers(users));
// console.log('NoActiveFriends:', getInactiveUsers(users));
// console.log('User with Email:', getUserWithEmail(users, 'shereeanthony@kog.com'));

// console.log('Active all:', isEveryUserActive(users));
// console.log('ActiveOne...:', isAnyUserActive(users));

// console.log('TotalBalance:', calculateTotalBalance(users));
// console.log('SortByAscendingBalance', sortByAscendingBalance(users));
// console.log('sortByDescendingFriendCount', sortByDescendingFriendCount(users));
// sortByName(users);
// console.log('getNamesSortedByFriendCount', getNamesSortedByFriendCount(users));
// console.log('getSortedFriends', getSortedFriends(users));

// console.log('Find male balance:', getTotalBalanceByGender(users, 'male'));
// console.log('Find female balance:', getTotalBalanceByGender(users, 'female'));
//-------- 13 .reduce((acc, el, ind, array) => {}, iniialValue;) ----------------------------------------
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log('Playtimes:', playtimes);
// const totalPlayTime = playtimes.reduce((acc, time) => {
//   console.log('acc:', acc);
//   console.log('time: +', time);
//   return acc + time;
// }, 0);
// console.log('TotalPlayTime:', totalPlayTime);

// -------- 14 .reduce((acc, el, ind, array) => {}, iniialValue;) ----------------------------------
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const averageTime = player.playtime / player.gamesPlayed;
//   return acc + averageTime;
// }, 0);

//-------- 15 .sort() -------------------------------------------------------------------------
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author)); //в алфавітному порядку по авторам
// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author)); //в зворотному порядку по авторам

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating); //зростання, по рейтенгу

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating); //спадання, по рейтенгу

//------------- 16 (.filter().map().sort())--------------------------------------
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log('Names:', names);

//========== 17. ПРАКТИКА перебираючі методи масиву -- Рисіч

// const cars = [
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 17256,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
//   {
//     make: 'Ford',
//     model: 'F-15',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
// ];
// console.table(cars);

// //повертає масив об'єктів з ціною із знижкою descount
// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => ({
//     ...car,
//     price: car.price * (1 - discount),
//   }));
// };

// //фільтрація по ціні, можна додати умову, наприклад, price < threshold && make === 'Ford' (фільтрація ще і за виробником)
// const filterByPrice = (cars, threshold) => {
//   return cars.filter(({ price, make }) => price < threshold);
// };

// //повертає car у яких onSale: true
// const getCarWithDiscount = cars => {
//   return cars.filter(({ onSale }) => onSale);
// };

// //фільтер по типу автомобіля; (поверне всі елементи, що задовільнять умову)
// const getCarsWithType = (cars, type) => {
//   return cars.filter(({ type: carType }) => carType === type); //дестиктуризація, також type: carType - перейменовуємо, уникаємо кофлікту з type, що приходить у параметрі
// };

// //find car by model; (поверне перший елемент, що задовільнить умову)
// const getCarByModel = (cars, model) => {
//   return cars.find(({ model: carModel }) => carModel === model);
// };

// //sort by modal, за афавітним і зворотнім порядком
// const sortByModal = (cars, order) =>
//   [...cars].sort(
//     (a, b) => (order === 'asc' ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model)),
//     //або розписати, а не тернарником
//     // if (order === 'asc') {
//     //   return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//     // } else {
//     //   return [...cars].sort((a, b) => b.model.localeCompare(a.model));
//     // }
//   );

// console.log('Ціна з 20% знижкою:', makeCarsWithDiscount(cars, 0.2)); // знижка 20%;
// console.log('Ціна з 30% знижкою:', makeCarsWithDiscount(cars, 0.4)); // знижка 30%;

// console.log('car, ціна якого не перевищує 30000:', filterByPrice(cars, 30000));
// console.log('car, ціна якого не перевищує 25000:', filterByPrice(cars, 25000));

// console.table(getCarWithDiscount(cars)); //onSale: true

// console.table(getCarsWithType(cars, 'truck'));
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.log('getCarByModel:', getCarByModel(cars, 'Sequoia'));

// console.log(sortByModal(cars, 'asc')); //алфавіт порядок
// console.log(sortByModal(cars, 'desc')); //зворотній

// //============ Рисіч, завдання на співбеседу
// const str = 'jfaofosjxjggjhggllk;hcrtfxlk';

// const result = str.split('').reduce((acc, item) => {
//   //1 варіант
//   // const keys = Object.keys(acc);
//   // keys.includes(item) ? (acc[item] += 1) : (acc[item] = 1);

//   //2 варіант
//   acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);

//   //3 варіант
//   // item in acc ? (acc[item] += 1) : (acc[item] = 1);

//   console.log('item:', item); //ключ
//   console.log('acc[item]', acc[item]); //значення ключа
//   console.log('acc', acc);
//   console.log('-----------------------------------------------------------------');

//   //console.log('Keys:', keys); //перший обєкт буде пустим, далі по одному добавляються 'item' (з 'str')

//   return acc;
// }, {});

// console.log('Result:', result);
