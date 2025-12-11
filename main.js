   // Кнопка переключения цвета - вариант 1 (простейший)
    const toggleColorBtn = document.querySelector('#toggle-color-btn');
    toggleColorBtn.addEventListener('click', function() {
   
     // Переключаем два класса одним вызовом
    this.classList.toggle('bg-purple');
    this.classList.toggle('bg-green');
    this.classList.toggle('text-white');
    this.classList.toggle('text-black');
});
   // Покраска всех карточек 
    const productCards = document.querySelectorAll('.card-container');
    const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
    changeColorAllCardsButton.addEventListener('click', () => {
    productCards.forEach((card) => {
    card.classList.toggle('bg-green', true);
    });
});

   // Покраска первой карточки
    const firstProductCard = document.querySelector('.card-container');
    const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
    changeColorFirstCardButton.addEventListener('click', () => {
    // Переключаем фиолетовый фон
    firstProductCard.classList.toggle('bg-purple');
});

   // Открыть Google
    const openGoogleButton = document.querySelector('#open-google');
    openGoogleButton.addEventListener('click', function() {
    if (confirm('Вы действительно хотите открыть Google?')) {
    window.open('https://google.com');
    }
});

   // Вывести сообщение в консоль
    const outputConsoleButton = document.querySelector('#output-console-log');
    outputConsoleButton.addEventListener('click', function() {
    console.log('Кнопка "вывести сообщение в консоль лог" была нажата!');
});