import { Coffee } from './Coffee.js';
import { Tea } from './tea.js';
import { Lemonade } from './Lemonade.js';
import { Cafe } from './cafe.js';

console.log('СИСТЕМА УПРАВЛЕНИЯ КАФЕ');
console.log('=' .repeat(50));
const myCafe = new Cafe('Кофейная Гавань', 'ул. Ленина, 25');


const espresso = new Coffee('Эспрессо', 'маленький', 150, 'арабика', 'без молока', 0);
const greenTea = new Tea('Зелёный чай', 'средний', 120, 'зелёный', ['жасмин'], 3);
const lemonade = new Lemonade('Цитрусовый лимонад', 'большой', 180, 'лимон', true, 100);

myCafe.addToMenu(espresso);
myCafe.addToMenu(greenTea);
myCafe.addToMenu(lemonade);


myCafe.getInfo();
myCafe.showMenu();
myCafe.order(espresso);
myCafe.order(greenTea);
myCafe.order(lemonade);
console.log('\nДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ:');
console.log('=' .repeat(50));
console.log('\nИЗМЕНЕНИЕ ТЕМПЕРАТУРЫ:');
espresso.setTemperature(85);
console.log(`Температура эспрессо: ${espresso.getTemperature()}°C`);
lemonade.setTemperature(30);
console.log(`Температура лимонада: ${lemonade.getTemperature()}°C`);


console.log('\nДОБАВЛЕНИЕ ИНГРЕДИЕНТОВ:');
espresso.addSugar(1);
greenTea.addAdditive('мята');
lemonade.addIce(50);
console.log('\nИНФОРМАЦИЯ О НАПИТКАХ ПОСЛЕ ИЗМЕНЕНИЙ:');
console.log(espresso.getInfo());
console.log(greenTea.getInfo());
console.log(lemonade.getInfo());

console.log('\n' + '=' .repeat(50));
console.log('Все тесты завершены успешно!');



//это страрое дз
import { user, validateEmail } from './homework-9.js';
import './homework-8.js';
import './products-data.js';
import { SmartWatch } from './SmartWatch.js';
import { SportsWatch } from './SportsWatch.js';

console.log('MAIN2.js загружен', user);

console.log('МАГАЗИН УМНЫХ ЧАСОВ');
console.log('=' .repeat(40));

const basicWatch = new SmartWatch(
    'Xiaomi', 'Mi Band 8', 3500, 18, 14, true
);

const garminWatch = new SportsWatch(
    'Garmin', 'Forerunner 255', 29990, 46, 14, true, true, true
);

const polarWatch = new SportsWatch(
    'Polar', 'Vantage V3', 34990, 47, 7, true, true, false
);

console.log('\nВСЕ ЧАСЫ В МАГАЗИНЕ:');
const watches = [basicWatch, garminWatch, polarWatch];
watches.forEach((watch, index) => {
    console.log(`${index + 1}. ${watch.getInfo()}`);
});

console.log('\nБАЗОВЫЕ ФУНКЦИИ:');
basicWatch.turnOn();
basicWatch.showTime();
basicWatch.measureHeartRate();
basicWatch.countSteps(1500);
basicWatch.checkBattery();

console.log('\nСПОРТИВНЫЕ ФУНКЦИИ (Garmin):');
garminWatch.turnOn();
garminWatch.startWorkout('бег');
garminWatch.measureAltitude();
garminWatch.finishWorkout();
garminWatch.showWorkoutStats();

console.log('\nНАВИГАЦИЯ (Polar):');
polarWatch.turnOn();
polarWatch.navigateTo('Стадион');
polarWatch.checkBattery();

console.log('\nВсе тесты завершены!');