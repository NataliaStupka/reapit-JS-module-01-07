import colors from '../js/data/05-colorpicker.js';
import tech from '../js/data/05-tech-07.js';

//---- 1-------------------------------------------------------
const tagsContainer = document.querySelector('.js-tags');
//початково нічого не вибрано
let selectedTag = null;
//console.log('selectedTag Begin:', selectedTag);

tagsContainer.addEventListener('click', onTagsContainerClick);

// 1) функція, яка вибирає одну кнопку
// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     console.log('Це не кнопка, ВИХОДИМО');
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   //якщо вже є такий класс то знімаємо його. Робимо перевірку, томущо якщо там null, то скрипт впаде
//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   } // if який має доступ до властивості, можна замінити таким записом
// (необов'язкова властивість): currentActiveBtn?.classList.remove('tags__btn--active');

//   //при 'click' додаємо класс 'active'
//   event.target.classList.add('tags__btn--active');
//   selectedTag = event.target.dataset.value;
//   console.log('selectedTag Next:', selectedTag);
// }

// 2) функція, яка вибирає декілька кнопок
const selectedTags = new Set(); //набір унікальних елементів, автоматично прибере повторення
function onTagsContainerClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    console.log('Це не кнопка, ВИХОДИМО');
    return;
  }
  const btn = event.target;
  const isActive = btn.classList.contains('tags__btn--active');

  // знімаємо/добавляємо класс
  if (isActive) {
    selectedTags.delete(btn.dataset.value);
  } else {
    selectedTags.add(btn.dataset.value);
  }
  btn.classList.toggle('tags__btn--active');

  console.log(selectedTags);
}

//------- 2. Colorpicker ---------------
const paletteContainer = document.querySelector('.js-palette');
const cardsMarckup = createColorCardsMarckup(colors); // (1)

paletteContainer.addEventListener('click', onPaletteContainerClick); // (2)

// (1) рендер
function createColorCardsMarckup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
<div class="color-card">
     <div class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}">
     </div>
     <div class='color-meta'>
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
     </div>
 </div> `;
    })
    .join('');
}
paletteContainer.insertAdjacentHTML('beforeend', cardsMarckup);

// (2) перевірка по чому клікаємо, предача шнформації в інші функції
function onPaletteContainerClick(event) {
  if (!event.target.classList.contains('color-swatch')) {
    return;
  }

  const swatchEl = event.target;
  const parentColorard = swatchEl.closest('.color-card'); //шукає найближчого (вище) предка з потрібним селектором

  //якщо є, знімаємо активний класс з картки, а на інший вішаємо
  removeActiveCardClass();

  //передаємо на що вішаємо класс
  addActiveCardClass(parentColorard);

  //передаємо вибраний колір
  setBodyBgColor(swatchEl.dataset.hex);
}

// знімаємо активний клас.
function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}
// додаємо активний клас.
function addActiveCardClass(card) {
  card.classList.add('is-active');
}

//отримали колір, пофарбували боді
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

//------- 3. input/filter/render/_.throttle/_.debounce (затримка виведення) ---------------
const refs = {
  list: document.querySelector('.js-list-tech'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));
const listItemsMarkup = createListItemsMarckup(tech);

//render початковий масив
function createListItemsMarckup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}
populateList(listItemsMarkup);

//пошук в масиві даних, по тому що ввів користувач/ перерендер
function onFilterChange(event) {
  const filter = event.target.value;
  //вибираємо фільтром те що ввів користувач
  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

  //передача в рендер,  з відфільтрованими label
  const listItemsMarkup = createListItemsMarckup(filteredItems);
  populateList(listItemsMarkup);
}

//рендер розмітки
function populateList(markup) {
  refs.list.innerHTML = markup;
}
