// 2 Импортируем нужные функции и переменные
import { user, validateEmail, getFormData } from './homework-9.js';
import './homework-8.js';
import './products-data.js';

console.log('MAIN2.js загружен', user);

import { SmartWatch, SportsWatch } from './smart-watches.js';

console.log('МАГАЗИН УМНЫХ ЧАСОВ');
console.log('=' .repeat(40));

// Создаем экземпляры
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