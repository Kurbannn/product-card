// Задание 3 Мои данные
const person = {
    name: "Курбан",
    age: 30,
    city: "Каспийск", 
    from: "Россия",
    respublic: "Дагестан"
}; 

// 4. Данные автомобиля Kia Sorento
const car = {
    brand: 'Kia',
    model: 'Sorento',
    year: 2017,
    color: 'черный',
    transmissionType: 'автоматическая',
    fuelType: 'бензин',
    driveType: 'полный привод'
};

// я владелец авто
car.owner = person;
console.log(`Владелец ${car.brand} ${car.model}: ${car.owner.name}`);

// 5. максимальный разгон
function addMaxSpeedIfMissing(carObject) {
    if (!carObject.hasOwnProperty('maxSpeed')) {
        carObject.maxSpeed = 180;
        console.log(`Добавлено свойство "maxSpeed" со значением ${carObject.maxSpeed} км/ч`);
        return true;
    } else {
        console.log('Свойство "maxSpeed" уже существует');
        return false;
    }
}

// Применяем функцию к автомобилю
addMaxSpeedIfMissing(car);

// 6. Функция для вывода значения свойства объекта
function printPropertyValue(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
        console.log(`Значение свойства "${propertyName}":`, obj[propertyName]);
        return obj[propertyName];
    } else {
        console.log(`Свойство "${propertyName}" не найдено в объекте`);
        return undefined;
    }
}

// 7. продукты
const products = ['Семга', 'Урбеч', 'Cнюс', 'Перец']; 

// 8. список прочитанных книг
const books = [
    {
        title: 'Дон Кихот',
        author: 'Мигель де Сервантес',
        year: 1605,
        coverColor: 'коричневый',
        genre: 'роман'
    },
    {
        title: 'Психология масс',
        author: 'Гюстав Лебон',
        year: 1895,
        coverColor: 'синий',
        genre: 'психология'
    },
    {
        title: 'Война и мир',
        author: 'Лев Толстой',
        year: 1869,
        coverColor: 'зеленый',
        genre: 'роман-эпопея'
    },
    {
        title: 'Мертвые души',
        author: 'Николай Гоголь',
        year: 1842,
        coverColor: 'красный',
        genre: 'поэма'
    }
];

books.push({
    title: 'Преступление и наказание',
    author: 'Федор Достоевский',
    year: 1866,
    coverColor: 'черный',
    genre: 'роман'
});

console.log('\n Коллекция книг:');
books.forEach((book, index) => {
    console.log(`\n ${index + 1}. Книга: ${book.title}`);
    console.log(` Автор: ${book.author}`);
    console.log(` Год: ${book.year}`);
    console.log(` Цвет обложки: ${book.coverColor}`);
    console.log(` Жанр: ${book.genre}`);
});

console.log(`\n Итоговое количество книг: ${books.length}`);
const harryPotterBooks = [
    //9.
  {
    title: 'Гарри Поттер и философский камень',
    author: 'Джоан Роулинг',
    year: 1997,
    coverColor: 'красный',
    genre: 'фэнтези',
    universe: 'Гарри Поттер'
  },
  {
    title: 'Гарри Поттер и Тайная комната',
    author: 'Джоан Роулинг',
    year: 1998,
    coverColor: 'зеленый',
    genre: 'фэнтези',
    universe: 'Гарри Поттер'
  },
  {
    title: 'Гарри Поттер и узник Азкабана',
    author: 'Джоан Роулинг',
    year: 1999,
    coverColor: 'синий',
    genre: 'фэнтези',
    universe: 'Гарри Поттер'
  },
  {
    title: 'Гарри Поттер и Кубок огня',
    author: 'Джоан Роулинг',
    year: 2000,
    coverColor: 'оранжевый',
    genre: 'фэнтези',
    universe: 'Гарри Поттер'
  }
];
const allBooks = [...books, ...harryPotterBooks];
console.log('=== ОБЪЕДИНЕННАЯ КОЛЛЕКЦИЯ КНИГ ===');
console.log(`Всего книг: ${allBooks.length}`);
console.log(`Классических книг: ${books.length}`);
console.log(`Книг о Гарри Поттере: ${harryPotterBooks.length}`);


console.log('\nСписок всех книг:');
allBooks.forEach((book, index) => {
  const universeInfo = book.universe ? `[${book.universe}]` : '[Классика]';
  console.log(`${index + 1}. ${universeInfo} "${book.title}" - ${book.author} (${book.year})`);
});

console.log('\n=== СТАТИСТИКА ПО ВСЕЛЕННЫМ ===');
const universeStats = {};
allBooks.forEach(book => {
  const universe = book.universe || 'Классика';
  universeStats[universe] = (universeStats[universe] || 0) + 1;
});
for (const universe in universeStats) {
  console.log(`${universe}: ${universeStats[universe]} книг`);
}
function markHarryPotterRarity(booksArray) {
  if (!booksArray || !Array.isArray(booksArray)) {
    console.log('Ошибка: нужен массив книг');
    return [];
  }
  

  const result = [];
  
  for (let i = 0; i < booksArray.length; i++) {
    const book = { ...booksArray[i] };
    book.isRare = book.year > 2000;
    result.push(book);
  }
  
  return result;
}

const hpRareBooks = markHarryPotterRarity(harryPotterBooks);

console.log('\n✅ РЕЗУЛЬТАТ РАБОТЫ ФУНКЦИИ:');
hpRareBooks.forEach((book, i) => {
  console.log(`${i + 1}. "${book.title}" (${book.year}) - ${book.isRare ? 'РЕДКАЯ 🌟' : 'обычная'}`);
});