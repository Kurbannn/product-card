
const person = {
    name: "Курбан",
    age: 30,
    city: "Каспийск", 
    from: "Россия",
    respublic: "Дагестан"
};

const car = {
    brand: "Киа",
    model: "Соренто",
    year: 2017,
    transmission: "Автомат",
    color: "Черный",
}
car.owner = person
console.log(`Владелец ${car.brand} ${car.model}: ${car.owner.name}`);