import { Drink } from './Drink.js';
export class Coffee extends Drink {
    constructor(name, size, price, beanType, milkType, sugar) {
        super(name, size, price);
        this.beanType = beanType;
        this.milkType = milkType;
        this.sugar = sugar;
    }

    getInfo() {
        return `${super.getInfo()} | Зерна: ${this.beanType} | Молоко: ${this.milkType} | Сахар: ${this.sugar} лож.`;
    }

    _prepare() {
        super._prepare();
        console.log(`  - Используем зерна: ${this.beanType}`);
        console.log(`  - Добавляем молоко: ${this.milkType}`);
        if (this.sugar > 0) {
            console.log(`  - Добавляем сахар: ${this.sugar} ложек`);
        }
        console.log(`  - Варим кофе с помощью эспрессо-машины`);
    }

    addSugar(amount) {
        this.sugar += amount;
        console.log(`Добавлено ${amount} ложек сахара. Всего сахара: ${this.sugar} лож.`);
    }
}