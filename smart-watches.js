export { SmartWatch, SportsWatch };

class SmartWatch {
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

class SportsWatch extends SmartWatch {
    constructor(brand, model, price, caseSize, batteryLife, isWaterproof, hasGPS, hasBarometer) {
        super(brand, model, price, caseSize, batteryLife, isWaterproof);
        this.hasGPS = hasGPS;
        this.hasBarometer = hasBarometer;
        this.sportModes = ['бег', 'ходьба', 'велосипед'];
        this.currentSport = null;
        this.caloriesBurned = 0;
        this.distance = 0;
    }

    getInfo() {
        const gpsInfo = this.hasGPS ? 'GPS' : 'без GPS';
        const baroInfo = this.hasBarometer ? 'барометр' : '';
        return `${super.getInfo()} | ${gpsInfo} ${baroInfo}`;
    }

    startWorkout(sportType) {
        if (!this.isOn) {
            console.log('Сначала включите часы');
            return;
        }

        if (!this.sportModes.includes(sportType)) {
            console.log(`Режим "${sportType}" недоступен. Доступно: ${this.sportModes.join(', ')}`);
            return;
        }

        this.currentSport = sportType;
        console.log(`Начата тренировка: ${sportType}`);
        console.log('Часы отслеживают вашу активность');
        this.useBattery(10);
    }

    finishWorkout() {
        if (this.currentSport) {
            const workoutCalories = Math.floor(Math.random() * (300 - 100) + 100);
            const workoutDistance = (Math.random() * 5).toFixed(1);
            
            this.caloriesBurned += workoutCalories;
            this.distance += parseFloat(workoutDistance);
            
            console.log('Тренировка завершена!');
            console.log(`Сожжено калорий: ${workoutCalories}`);
            console.log(`Дистанция: ${workoutDistance} км`);
            
            this.currentSport = null;
            this.useBattery(5);
        } else {
            console.log('Нет активной тренировки');
        }
    }

    showWorkoutStats() {
        console.log('СТАТИСТИКА ТРЕНИРОВОК:');
        console.log(`   Всего сожжено калорий: ${this.caloriesBurned}`);
        console.log(`   Всего пройдено: ${this.distance} км`);
    }

    measureAltitude() {
        if (this.hasBarometer) {
            const altitude = Math.floor(Math.random() * (500 - 50) + 50);
            console.log(`Текущая высота: ${altitude} м над уровнем моря`);
        } else {
            console.log('В этой модели нет барометра');
        }
    }

    navigateTo(destination) {
        if (this.hasGPS) {
            console.log(`Построение маршрута до ${destination}...`);
            console.log('Следуйте за подсказками на экране');
            this.useBattery(15);
        } else {
            console.log('Для навигации требуется GPS');
        }
    }
}


