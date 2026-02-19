import { products } from './products-data.js';

const totalSum = products.reduce((sum, product) => sum + product.price, 0);
console.log('Общая стоимость всех продуктов:', totalSum);

// 4 Задание
const productDescriptionsArray = products.reduce((acc, product) => {
  const productObject = { [product.name]: product.description };
  acc.push(productObject);
  return acc;
}, []);

console.log('Результат:');
console.log(productDescriptionsArray);

// 5 задание
const productCardTemplate = document.getElementById('product-card-template');
const productCardList = document.querySelector('.product-card-list');
console.log(productCardTemplate);

const nameDescriptionArray = products.reduce((accum, product) => {
  accum.push({ [product.name]: product.description });
  return accum;
}, []);

console.log(nameDescriptionArray);

let cardsCount;
while (true) {
  cardsCount = prompt('Сколько карточек отобразить? (числа от 1 до 5)');
  if (cardsCount == null) break;
  if ((cardsCount != "" && !isNaN(cardsCount)) && (cardsCount >= 1 && cardsCount <= 5)) {
    cardsCount = Number(cardsCount);
    break;
  }
  alert("Введите корректный ответ (числа от 1 до 5)");
}

function renderProductCards(productsArray, numberOfCards) {
  for (let i = 0; i < numberOfCards; i++) {
    const cardCopy = productCardTemplate.content.cloneNode(true);

    if (i != 0) {
      const extraElement = cardCopy.querySelector('.extra-element');
      if (extraElement) extraElement.remove();
    }

    cardCopy.querySelector('.product-image').src = `image/${getImageName(productsArray[i].name)}`;
    cardCopy.querySelector('.product-image').alt = productsArray[i].name;
    cardCopy.querySelector('.product-category').textContent = productsArray[i].category;
    cardCopy.querySelector('h2').textContent = productsArray[i].name;
    cardCopy.querySelector('.product-description').textContent = productsArray[i].description;

    const compositionLabel = cardCopy.querySelector('.composition-label');
    if (compositionLabel) compositionLabel.textContent = "Состав:";

    const compositionItems = cardCopy.querySelectorAll('.composition-item');
    compositionItems.forEach((item, index) => {
      if (productsArray[i].composition[index]) {
        item.textContent = productsArray[i].composition[index];
      }
    });

    const priceLabel = cardCopy.querySelector('.price-label');
    if (priceLabel) priceLabel.textContent = "Цена";

    const priceValue = cardCopy.querySelector('.price-value');
    if (priceValue) {
      const formattedPrice = productsArray[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      priceValue.textContent = `${formattedPrice} ₽`;
    }

    productCardList.appendChild(cardCopy);
  }
}

function getImageName(productName) {
  const imageMap = {
    'Увлажняющий мусс': 'moisturizing-mousse.png',
    'Увлажняющая маска': 'moisturizing-mask.png',
    'Гель для умывания': 'face-wash.png',
    'Подарочный набор №1': 'gift-set-1.png',
    'Подарочный набор №5': 'gift-set-5.png'
  };

  return imageMap[productName] || 'default.png';
}

if (cardsCount) {
  renderProductCards(products, cardsCount);
}