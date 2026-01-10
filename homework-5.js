// Задание 3
  function showTemperature(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showTemperature("Каспийске", 6);

// задание 4
const SPEED_OF_LIGHT = 299792458; 

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

// вызов
checkSpeed(300000000); // Сверхсветовая скорость
checkSpeed(200000000); // Субсветовая скорость
checkSpeed(299792458); // Скорость света

//задание 5
const purchaseProduct = "Кувалда";
const price = 3000;
function buyProduct(budget) {
    if (budget >= price) {
        console.log(`(${purchaseProduct}) приобретён. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}
buyProduct(5000); // (Кувалда) приобретён. Спасибо за покупку!
buyProduct(3000); // (Кувалда) приобретён. Спасибо за покупку!
buyProduct(2000); // Вам не хватает 1000$, пополните баланс
buyProduct(0);    // Вам не хватает 3000$, пополните баланс

// задание 6-7
const name = "Razor";
const attribute = "dexterity";
const role = "BEST";

function showInfo() {
    console.log("Имя: " + name);
    console.log("Атрибут: " + attribute);
    console.log("Роль: " + role);
}

showInfo();