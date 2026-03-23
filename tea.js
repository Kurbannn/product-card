import { Drink } from './Drink.js';
export class Tea extends Drink {
    constructor(name, size, price, teaType, additives, brewingTime) {
        super(name, size, price);
        this.teaType = teaType;
        this.additives = additives;
        this.brewingTime = brewingTime;
    }

    getInfo() {
        const additivesStr = this.additives.length > 0 ? this.additives.join(', ') : 'нет';
        return `${super.getInfo()} | Тип чая: ${this.teaType} | Добавки: ${additivesStr} | Заварка: ${this.brewingTime} мин.`;
    }

    _prepare() {
        super._prepare();
        console.log(`  - Завариваем чай: ${this.teaType}`);
        console.log(`  - Время заваривания: ${this.brewingTime} минут`);
        if (this.additives.length > 0) {
            console.log(`  - Добавляем: ${this.additives.join(', ')}`);
        }
        console.log(`  - Процеживаем и разливаем по чашкам`);
    }

    addAdditive(additive) {
        this.additives.push(additive);
        console.log(`Добавлена добавка: ${additive}`);
    }
}