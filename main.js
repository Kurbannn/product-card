// Покраска всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');

changeColorAllCardsButton.addEventListener('click', () => {
    productCards.forEach((card) => {
        card.classList.toggle('green-bg');
    });
});
// Покраска первой карточки
const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.classList.toggle('purple-bg');
});
// Открыть Google
const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google');
    if (answer === true) {
        window.open('https://google.com');
    }
}
const toggleColorBtn = document.querySelector('#toggle-color-btn');
toggleColorBtn.addEventListener('click', function() {
    const isGreen = this.classList.toggle('color-green');
    this.classList.toggle('color-purple', !isGreen);
    console.log(`Цвет кнопки изменен на: ${isGreen ? 'зеленый' : 'фиолетовый'}`);
});