// 3 задание — Создайте объект на основе ваших данных
const person = {
  name: "Курбан",
  age: 30,
  city: "Каспийск",
  from: "Россия",
  respublic: "Дагестан"
};

// 4 задание — Создайте объект, который будет хранить данные об автомобиле
const car = {
  brand: "Киа",
  model: "Соренто",
  year: 2017,
  transmission: "Автомат",
  color: "Черный"
};

car.owner = person;
console.log(`Владелец ${car.brand} ${car.model}: ${car.owner.name}`);

// 5 задание — Написать функцию, которая аргументом будет принимать объект
function setInfoMaxSpeed(carObject) {
  if (!carObject.maxSpeed) {
    carObject.maxSpeed = 190;
  }
}

setInfoMaxSpeed(car);

// 6 задание — Написать функцию, которая получает первым аргументом объект, 
// а вторым — имя свойства; выводит значение этого свойства в консоль
function addPropertyValue(obj, propertyName) {
  console.log(obj[propertyName]);
}


addPropertyValue(car, "maxSpeed"); 

// 7 задание — Создать массив, который содержит названия продуктов
const productList = [
  "cheese",
  "milk",
  "buhanka",
  "banana"
];

// 8 задание — Создать массив, состоящий из объектов, где объект представляет собой книгу
const findBookListArray = [
  {
    title: "Book 1",
    author: "Author 1",
    year: 1979
  },
  {
    title: "Book 2",
    author: "Author 2",
    year: 1988
  },
  {
    title: "Book 3",
    author: "Author 3",
    year: 2002
  },
  {
    title: "Book 4",
    author: "Author 4",
    year: 2005
  }
];

findBookListArray.push({
  title: "Book 5",
  author: "Author 5",
  year: 2012
});

console.log(findBookListArray);

// 9 задание — Создать ещё один массив, состоящий из тех же книг (манга)
const getMangaListArray = [
  {
    title: "One piece",
    author: "Eiichiro Oda",
    year: "1997"
  },
  {
    title: "Berserk",
    author: "Kentaro Miura",
    year: "1989"
  },
  {
    title: "Naruto",
    author: "Masashi Kishimoto",
    year: "1999"
  },
  {
    title: "Berserk",
    author: "Kentaro Miura",
    year: "1989"
  }
];

const unitedBookOfManga = [...findBookListArray, ...getMangaListArray];
console.log(unitedBookOfManga);

// 10 задание — Почитать про метод массива map

function assignRarityFlag(object) {
  object.isRare = object.year <= 2000;
  return object;
}

const updatedFindBookListArray = unitedBookOfManga.map(assignRarityFlag);
console.log(updatedFindBookListArray);
