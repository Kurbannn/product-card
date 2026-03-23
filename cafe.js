export class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.menu = [];
    }

    getInfo() {
        console.log(`\nКафе "${this.name}"`);
        console.log(`Адрес: ${this.location}`);
        console.log(`Город: Каспийск, Россия`);
        console.log(`В меню: ${this.menu.length} напитков`);
        return {
            name: this.name,
            location: this.location,
            city: 'Каспийск',
            country: 'Россия',
            menuCount: this.menu.length
        };
    }

    addToMenu(drink) {
        this.menu.push(drink);
        console.log(`В меню добавлен: ${drink.name}`);
    }

    order(drink) {
        console.log(`ЗАКАЗ: ${drink.name}`);
        console.log(`Кафе: ${this.name} (Каспийск, Россия)`);
        const isInMenu = this.menu.some(item => item.name === drink.name);
        if (!isInMenu) {
            console.log(`Ошибка: "${drink.name}" нет в меню`);
            return;
        }
        
        console.log(`Стоимость: ${drink.price} руб`);
        
        drink.serve();
        console.log(`Заказ выполнен! Спасибо за посещение кафе в Каспийске!\n`);
    }

    showMenu() {
        console.log(`\nМЕНЮ КАФЕ "${this.name}" (Каспийск, Россия):`);
        console.log(`----------------------------------------`);
        this.menu.forEach((drink, index) => {
            console.log(`${index + 1}. ${drink.getInfo()}`);
        });
    }
}