//Рисіч
import cars from '../js/data/04-cars-06.2.js';

//------- №1  -------Більше складний приклад розглянуто в завданні №5-----------------------------

// const container = document.querySelector('.js-container_cars');

// const markupCars = cars
//   .map(
//     ({ id = 'none', model, type, price, img }) => `
// <li data-id='${id}'>
//       <img src="${img}" alt="${model}" class="img" />
//       <h2>Марка - ${model}</h2>
//       <h3>Модель - ${type}</h3>
//       <p>Ціна - ${price}</p>
//     </li>`,
//   )
//   .join('');

// //додаємо ЗА ОДИН РАЗ усі картки
// container.insertAdjacentHTML('beforeend', markupCars);

// // //Для видалення 1-2 елемента використовуємо метод .remove, наприклад видалимо той, в якому є id
// // [...container.children].forEach(item => {
// //   if (item.dataset.id !== 'none') {
// //     item.remove();
// //   }
// // });

// // //Для повної очистки
// // container.innerHTML = '';

//-------- №2  -------------------------
const buttonClick = document.querySelector('.js-click');
const squareContainer = document.querySelector('.js-container_square');

buttonClick.addEventListener('click', onButtonClick); //клікая на кнопку - рухається квадрат
squareContainer.addEventListener('click', onButtonClick); //клікая на квадрат - рухається квадрат
document.addEventListener('keydown', onKey); //слухач на клавіатуру принатисканні клавіши

let step = 0;
//переміщення квадрата
function onButtonClick(event) {
  step += 5;
  squareContainer.style.marginLeft = `${step}px`;
  squareContainer.style.marginTop = `${step}px`;
}

// ховаємо/повертаємо квадрат
function onKey(event) {
  console.log(event.code); //консолимо все, що натиснули
  if (event.code === 'Escape') {
    squareContainer.classList.toggle('tog');
  }
}

//-------- №3  -------------------------
const title = document.querySelector('.js-title');
const maxLength = 14;
const totalLength = maxLength + 3; //14 літер + три крапки
title.addEventListener('click', onClickText);

function onClickText(event) {
  const title = event.currentTarget; //там де висить слухач

  const str = title.textContent.slice(0, maxLength); //рядок перші 14 літер
  //якщо рядок більше запланованого, то обрізаємо його та добавляємо '...'
  if (title.textContent.length > totalLength) {
    const remainder = title.textContent.slice(maxLength); //залишок рядка з 14 літери
    // Залишок зберігаємо на id, додамо до title дата-атрибут
    title.setAttribute('data-title', remainder);

    title.textContent = str + '...';
  } else {
    //або getAttribute замість dataset
    const remainder = title.dataset.title; //з title беремо датаатрібут data-title
    //якщо є дата-атрибут, то тоді додаємо
    if (remainder) {
      title.textContent = str + remainder;
    }
  }
}

//------- №4 Form----------
const formEl = document.querySelector('.js-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault(); //прибираємо дефолтну поведінку

  //деструктуризуємо з event.currentTarget.elements значення інпутів
  const { userName, userEmail, userAge } = event.currentTarget.elements;
  //   console.log(userName.value);
  //   console.log(userEmail.value);
  //   console.log(userAge.value);

  //Для відправки цих данних на бекенд
  const data = {
    name: userName.value,
    email: userEmail.value,
    age: userAge.value,
  };
  //console.log(data);
}

//-------- №5 Завдання---------------
//використовуємо масив з import cars from './data/04-cars-06.2.js';
const list = document.querySelector('.js-list');
const favoriteList = document.querySelector('.js-favorite-list');
const form = document.querySelector('.js-search-form');
form.addEventListener('submit', onSearch);
list.addEventListener('click', onCLick);

//рендерить(малює) розмітку
function createMarckup(arr) {
  return arr
    .map(
      ({ id = 'none', model, type, price, img }) => `
<li data-id="${id}">
    <img src="${img}" alt="${model}" width='300' loading="lazy">
    <div class='js-favorite'>★</div>
    <h2>${model}</h2>
    <h3>${type}</h3>
    <p>${price}</p>    
    </li>
`,
    )
    .join('');
}
list.insertAdjacentHTML('beforeend', createMarckup(cars));

//пошук авто, перемальвує розмітку із знайденеми авто
function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget; //доступ до форми
  const { query, select } = form.elements;

  //шукаємо потрібне авто, через filter, за тим що вкаже користувач(за model, чи за type)
  const searchCars = cars.filter(
    item => item[select.value].toLowerCase() === query.value.trim().toLowerCase(),
  );
  //item[select.value] - item це об'єкт, назва ключа прописана як value(те що вибере користувач (car або type) select.value = car або type), в []квадратних дужках  тому що прийде рядок
  //.trim() - прибирає пробіли
  //.toLowerCase() - приводимо до нижнього регістру

  //перемальовуємо викликаючи функцію і закидуючи в неї шукані авто
  list.innerHTML = createMarckup(searchCars);
  //   console.dir(query.value);
  //   console.dir(select.value);
}
//додаємо у обрані, використовуємо event.target
function onCLick(event) {
  //перевірка, чи клікнули на зірочку
  //метод contains - чи містить такий клас
  if (event.target.classList.contains('js-favorite')) {
    event.target.classList.add('favorite-active');
    //метод closest - підніме до 'батька' елемента (тут дасть нам першу батьківську li)
    // li вказуємо який елемент нам потрібен
    const { id } = event.target.closest('li').dataset; //забираємо значення id
    // дата-атрибут завжди повертає рядок, тому приводимо до числа через Number
    const currentCar = cars.find(({ id: carId }) => carId === Number(id)).model; //.car значить, що забираємо тільки car
    addFavorite(currentCar);
  }
}
function addFavorite(currentCar) {
  favoriteList.insertAdjacentHTML('beforeend', `<li>${currentCar}</li>`);
}
