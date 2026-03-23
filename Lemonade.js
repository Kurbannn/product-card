import { Drink } from './Drink.js';
export class Lemonade extends Drink {
    constructor(name, size, price, fruit, carbonated, ice) {
        super(name, size, price);
        this.fruit = fruit;
        this.carbonated = carbonated;
        this.ice = ice;
        this._temperature = 4;
    }

    getInfo() {
        const carbonatedStr = this.carbonated ? 'газированный' : 'негазированный';
        return `${super.getInfo()} | Фрукт: ${this.fruit} | ${carbonatedStr} | Лед: ${this.ice}г`;
    }

    _prepare() {
        super._prepare();
        console.log(`  - Выжимаем сок из ${this.fruit}`);
        console.log(`  - Смешиваем с ${this.carbonated ? 'газированной' : 'негазированной'} водой`);
        console.log(`  - Добавляем ${this.ice}г льда`);
        console.log(`  - Украшаем долькой ${this.fruit}`);
    }

    addIce(grams) {
        this.ice += grams;
        console.log(`Добавлено ${grams}г льда. Всего льда: ${this.ice}г`);
    }

    setTemperature(temp) {
        if (temp <= 10) {
            super.setTemperature(temp);
        } else {
            console.log(`Ошибка: лимонад должен быть холодным! Температура ${temp}°C слишком высокая. Установлена температура 4°C`);
            this._temperature = 4;
        }
    }
}