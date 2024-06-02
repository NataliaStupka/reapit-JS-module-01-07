//Репета  ../js/data/04-product.js
import products from '../js/data/04-product.js'; //для(№2) - доступ до масиву з об'єктами продуктів
import transactionHistory from '../js/data/transaction.js'; //для(№3)

//-------- №1 Створення елементів та додавання їх у розмітку ---------------
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerElement = document.querySelector('.js-color-picker'); //сюди повісимо нові кнопки

// //утворюється новий [масив кнопок]
// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button'); //створюємо кнопку
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker_option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

//функція приймає масив обьектів, перебирає і повертає новий масив елементів(ryjgjr)
const makeColorPickerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button'); //створюємо кнопку
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker_option');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl; //повертаємо в новий масив новий елемент
  });
};
const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerElement.append(...elements); //розпилюємо масив

//---------- №2 Створення колекції товарів ---------------
//зверху зробили імпорт масиву об'єктів продуктів
const productContainerEl = document.querySelector('.js-product');

//функція для створення 1картки продукта
const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h3');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Ціна: ${price} кредитів`;
  priceEl.classList.add('product__price');
  //приєднуємо все до article
  productEl.append(nameEl, descrEl, priceEl);
  return productEl; //повертає один елемент
};
//створення декількох/багатьох карток
const elementsCards = products.map(makeProductCard); //передаємо ссилку на функцію(callback)
productContainerEl.append(...elementsCards);

//-------- №3 заполнение через шаблонную строку-----------------

const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;
  return `
  <tr>
          <td>${id}</th>
          <td>${amount}</th>
          <td>${date}</th>
          <td>${business}</th>
          <td>${type}</th>
          <td>${name}</th>
          <td>${account}</th>
        </tr>
  `;
}; //возвращает строку
const tableEl = document.querySelector('.js-transaction-table');
const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join(''); //возвращает одну огромную строку
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

//--------- №4 ----------------------
const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', () => {
  console.log('Вішаємо слухача на цільову кнопку');
  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', () => {
  console.log('Знімаємо слухача з цільової кнопки');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick() {
  console.log('click по цільовій кнопці');
}

//----- №5 Form-------------------
//'input' для текстових полів, 'change' для радіобатонів і чекбоксів

const form = document.querySelector('.js-register-form');

//Завдання:1) заміняти анонім на те що буде введено в інпут; 2) робиту кнопку активною при прийняті ліценз.згоди
//назвати просто refs
const refs5 = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button__span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

form.addEventListener('submit', onFormSubmit); // на form використувується не 'click', а 'submit'
function onFormSubmit(event) {
  event.preventDefault(); // відміняє автоматичну перезагрузку сторінки

  const formElements = event.currentTarget.elements; //усі елементи форми

  console.dir(event.currentTarget); //де висить слухач (addEventListener)
  // console.dir(formElements); //усі елементи форми
  // console.dir(formElements.email.value); //значення email
  // console.dir(formElements.password.value); //значення password
  // console.dir(formElements.subscription.value);

  const formData = new FormData(event.currentTarget); //має метод forEach, який перебирає і видає усі значення
  formData.forEach((value, name) => {
    console.log(name);
    console.log(value);
  });
}

refs5.input.addEventListener('input', onInputChange); //
refs5.licenseCheckbox.addEventListener('change', onLicenseChange);

//замінює "Анонім"(на кнопці) на тещо буде введено в інпут
function onInputChange(event) {
  console.log(event.currentTarget.value); //виведе, що вводиться у інпут
  refs5.nameLabel.textContent = event.currentTarget.value;
}
//при натисканні на чекбокс активується кнопка
function onLicenseChange(event) {
  console.log(event.currentTarget.checked); //чи обрано
  console.log('чи є disabled:', refs5.btn.disabled); //чи кнопка не активна
  refs5.btn.disabled = !event.currentTarget.checked; //кнопка Не активна = коли Не вибраний чекбокс
}

//------ №6 'keydown'(на всі клавіші)/'keypress'(на ті що генерять символи)-----------

//--- 'code' - фізична назва на клавіатурі; 'key' - літера, що ввели на вказаній мові
//----- Події клавіатури -----

const refs6 = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-button__clear'),
};

window.addEventListener('keypress', onKeypress);
refs6.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  refs6.output.textContent += event.key;
}

function onClearOutput(event) {
  refs6.output.textContent = '';
}

//----- №7  Модалка --- event.currentTurget - там де слухач; event.target - там де клікнули-------------------
//відкриття; закриття по кнопці/бекдропу/Esc
const refsModal = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'), //закриття по бекдропу
};

refsModal.openModalBtn.addEventListener('click', onOpenModal);
refsModal.closeModalBtn.addEventListener('click', onCloseModal);
refsModal.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress); //коли відкриваємо модалку вішаємо слухача, для Esc
  document.body.classList.add('show-modal');
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress); //при закритті, знімаємо слухача, для Esc
  document.body.classList.remove('show-modal');
}
//закриття кліком по бекдропу
function onBackdropClick(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  if (event.currentTarget === event.target) {
    console.log('click на бекдроп');
    onCloseModal();
  }
}
//закриття по Esc
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModal();
  }
}
