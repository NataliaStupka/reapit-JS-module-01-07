//------- 1. play X-0  --------- модуль 7 урок 1, Рисіч (на 24хв)
const container = document.querySelector('.js-play_content');

//переможні
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let player = 'X';
let historyX = [];
let history0 = [];

//генерування розмітки
function createMarkup() {
  let markup = '';
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class='play_item js-play_item' data-id='${i}'></div>`;
  }
  container.innerHTML = markup;
}
createMarkup();

container.addEventListener('click', onClick);

function onClick(event) {
  //підчищаємо код (в коді використовуємо target)
  const { target } = event; //event.target

  //клікаємо тільки куди потрібно АБО якщо в клітинці щось вже є, ТО ВИХОДИМО
  if (!target.classList.contains('js-play_item') || target.textContent) {
    console.log('рядок вже не пустий, або не туди клікнули');
    return;
  }

  let result = false;
  //зберігаємо в масив куди ставили Х та 0
  const id = Number(target.dataset.id); //все що зберігається в дата-атрибуті приходить у вигляді РЯДКА
  if (player === 'X') {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    history0.push(id);
    result = isWinner(history0);
  }

  target.textContent = player;

  //якщо переможець (тобто true) перериваєму гру; або якщо нічия
  if (result) {
    console.log(`Winner: ${player}`);
    resetGame();
    return;
  } else if (historyX.length + history0.length === 9) {
    console.log(`Try again!`);
    resetGame();
    return;
  }
  //починаємо гру з 'Х', потім мінямо на '0' і так далі
  player = player === 'X' ? '0' : 'X';
}

//визначає переможця (приходить історія ходів у вигляді масива)
function isWinner(arr) {
  //перебираємо весь масив wins, шукаємо хоча б один із підмасиві, що задовільнить умову
  //умова, що кожен елемент вкладеного масивубуде входити в історію кодів гравця
  return wins.some(item => item.every(id => arr.includes(id)));
}

//очиcтка поля, очистка історіїї ходів Х та 0
function resetGame() {
  //перемальовуємо розмітку
  createMarkup();
  historyX = [];
  history0 = [];
  //гру починає Х
  player = 'X';
}

//----- 2 - підключення бібліотеки basiclightbox (https://www.jsdelivr.com/package/npm/basiclightbox?path=dist)------------
import cars from '../js/data/04-cars-06.2.js';

const containerCars = document.querySelector('.js-container_cars');
containerCars.addEventListener('click', onClickImg);

function markupCars(arr) {
  return arr
    .map(
      ({ img, model, id }) => `  <li class='js-target js-card' data-car-id='${id}'>
        <img class='js-target' width='300' height='150' loading='lazy' src="${img}" alt="${model}" />
        <h2 class='js-target'>${model}</h2>
      </li>`,
    )
    .join('');
}
containerCars.insertAdjacentHTML('beforeend', markupCars(cars));

function onClickImg(event) {
  if (!event.target.classList.contains('js-target')) {
    return;
  }

  // ?? null undefined
  //   // || '' 0 null false undefined NaN
  // ?? або з найближчого батька (метод .closest)
  const carId = event.target.dataset.carId ?? event.target.closest('.js-card').dataset.carId;

  const curentItem = cars.find(({ id }) => id === Number(carId)); //шукаємо той єлемент масиву, в якому id збігається з carId
  console.log(curentItem);

  //малюємо розмітку (модалку) вибранної машини за допомогою бібліотеки basiclightbox
  const instance = basicLightbox.create(`
   <div class='bg-car'>
      <img src="${curentItem.img}" width='700' alt="${curentItem.model}" />
      <h2>Модель: ${curentItem.model}</h2>
      <h3>Тип: ${curentItem.type}</h3>
      <p>Ціна: ${curentItem.price}</p>
    </div>
`);
  instance.show();
}

//---- 3 _.debounce/_.throttle -- використовуємо тільки event.target-----------------------------------------------------------
const input = document.querySelector('.js-input');
//виводе значення кожні, наприклад, 600 ms
// input.addEventListener('input', _.throttle(onSearch, 600)); //600 - час затримки

// function onSearch(event) {
//   console.log(event.target.value);
// }

const PASSWORD_LENGTH = 7;
//виведе після завершення вводу
input.addEventListener('input', _.debounce(onSearch, 700)); //700 - час затримки

function onSearch(event) {
  if (event.target.value.length < PASSWORD_LENGTH) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
}

//---- 4 практика----------------
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

import products from '../js/data/07-products.js';

function sortProduct(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    //console.log('Поточний:', arr[i]);
    for (let j = i + 1; j < arr.length; j += 1) {
      // console.log('2:', arr[j]);
      if (arr[i].id === arr[j].id) {
        arr[i].qty += arr[j].qty;
        arr.splice(j, 1); //видаляємо продукт, що приплюсували
        j -= 1; // відкочуємося на 1шаг назад, щоб ще раз пройти, томущо масив змістився із-за видаленого елмента
      }
    }
  }
}
sortProduct(products);
console.log(products);

//------ 5 практика----------------
// У кожному масиві, є унікальний рядок, у якому не повторюються літери. Знайдіть і виведіть цей рядок
// ["abc", "acb", "bac", "foo", "bca", "cab", "cba"]

// function findUniq(arr) {
//   console.log('1) arr:', arr);
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = arr[i].split('').every(item => {
//       for (let j = 0; j < arr.length; j += 1) {
//         if (i !== j) {
//           if (!arr[j].includes(item)) {
//             return true;
//           } else {
//             return false;
//           }
//         }
//       }
//     });
//     console.log('result:', result);
//     if (result) {
//       return arr[i];
//     }
//   }
// }

const findUniq = arr =>
  //(поточне слово, індекс цього слова)
  arr.find((current, i) =>
    current
      .split('') //abc розбиваємо по літерам a, b, c
      .every(item => arr.every((comparison, j) => (i !== j ? !comparison.includes(item) : true))),
  );

console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));
console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf']));
console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac']));
