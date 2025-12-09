// Покраска всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';
changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash);
});
// Покраска первой карточки
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const lavenderColorHash = '#9669c9ff';
changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = lavenderColorHash;
});
// Открыть Google
  const openGoogleButton = document.querySelector('#open-google');
  openGoogleButton.addEventListener('click',openGoogle);
  function  openGoogle() {
  const answer = confirm ('Вы действительно хотите открыть Google');
  if (answer === true) {
      window.open('https://google.com');
 }else{
        return
    }
 }
   const toggleColorBtn = document.querySelector('#toggle-color-btn');
   const color1 = '#9669c9ff'; 
   const color2 = '#00FF00';
    toggleColorBtn.addEventListener('click', function() {
    const isNowFirstColor = this.classList.toggle('first-color');
    if (isNowFirstColor) {
        this.style.backgroundColor = color1;
        this.style.color = '#fff';
    } else {
        this.style.backgroundColor = color2;
        this.style.color = '#000';
    }
    console.log(`Цвет кнопки изменен на: ${this.style.backgroundColor}`);
});