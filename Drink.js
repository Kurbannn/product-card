export class Drink {
    constructor(name, size, price) {
        if (this.constructor === Drink) {
            throw new Error('Нельзя создать экземпляр абстрактного класса Drink');
        }
        this.name = name;
        this.size = size;
        this.price = price;
        this._temperature = 70;
    }

    getInfo() {
        return `${this.name} | ${this.size} | ${this.price} руб | ${this._temperature}°C`;
    }

    getTemperature() {
        return this._temperature;
    }

    setTemperature(temp) {
        if (temp >= 0 && temp <= 100) {
            this._temperature = temp;
            console.log(`Температура напитка "${this.name}" изменена на ${temp}°C`);
        } else {
            console.log(`Ошибка: некорректная температура ${temp}°C. Допустимо от 0 до 100°C`);
        }
    }

    _prepare() {
        console.log(`Приготовление "${this.name}"...`);
        console.log(`  - Наливаем в стакан объемом ${this.size}`);
        console.log(`  - Добавляем базовые ингредиенты`);
    }
    
    serve() {
        this._prepare();
        console.log(`Напиток "${this.name}" готов! Температура: ${this._temperature}°C`);
        console.log(`Напиток подан. Приятного аппетита!`);
    }
}