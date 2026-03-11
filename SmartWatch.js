export class SmartWatch {
    constructor(brand, model, price, caseSize, batteryLife, isWaterproof) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.caseSize = caseSize;
        this.batteryLife = batteryLife;
        this.isWaterproof = isWaterproof;
        this.isOn = false;
        this.batteryLevel = 100;
        this.steps = 0;
        this.heartRate = 70;
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.brand} ${this.model} включены`);
        } else {
            console.log('Часы уже включены');
        }
    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            console.log(`${this.brand} ${this.model} выключены`);
        } else {
            console.log('Часы уже выключены');
        }
    }

    getInfo() {
        const waterproof = this.isWaterproof ? 'водонепроницаемые' : 'не для воды';
        return `${this.brand} ${this.model} | ${this.price} руб | ${this.caseSize}мм | батарея: ${this.batteryLife}дн | ${waterproof}`;
    }

    showTime() {
        const now = new Date();
        const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        console.log(`Текущее время: ${time}`);
    }

    checkBattery() {
        console.log(`Уровень заряда: ${this.batteryLevel}%`);
        if (this.batteryLevel < 20) {
            console.log('Низкий заряд! Поставьте часы на зарядку');
        }
    }

    countSteps(additionalSteps) {
        this.steps += additionalSteps;
        console.log(`Пройдено шагов: ${this.steps}`);
        return this.steps;
    }

    measureHeartRate() {
        this.heartRate = Math.floor(Math.random() * (85 - 65) + 65);
        console.log(`Пульс: ${this.heartRate} уд/мин`);
        return this.heartRate;
    }

    charge() {
        this.batteryLevel = 100;
        console.log('Часы полностью заряжены');
    }

    useBattery(amount) {
        this.batteryLevel = Math.max(0, this.batteryLevel - amount);
        if (this.batteryLevel === 0) {
            this.isOn = false;
            console.log('Часы разрядились и выключились');
        }
    }
}