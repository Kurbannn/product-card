// 3 задание 
const person = {
    name: "Курбан",
    age: 30,
    city: "Каспийск", 
    from: "Россия",
    respublic: "Дагестан"
};
// 4 задание
const car = {
    brand: "Киа",
    model: "Соренто",
    year: 2017,
    transmission: "Автомат",
    color: "Черный",
};
  car.owner = person
  console.log(`Владелец ${car.brand} ${car.model}: ${car.owner.name}`);
// 5 задание
    function maxSpeed(carObject){
     if (carObject.maxSpeed){
    carObject.maxSpeed=190
  }
};
  maxSpeed(car);
//6 задание
   function propertyValue(obj, propertyName) {
    console.log(obj[propertyName]);
}
//7 задание 
const productlist = ['cheese' ,'milk', 'buhanka', 'banana'];
//8 задание 
const bookList = [
  { title: 'Book 1', author: 'Author 1', year: 1979 },
  { title: 'Book 2', author: 'Author 2', year: 1988 },
  { title: 'Book 3', author: 'Author 3', year: 2002 },
  { title: 'Book 4', author: 'Author 4', year: 2005 },
];
bookList.push({ title: 'Book 5', author: 'Author 5', year: 2012});
console.log(bookList);
// 9задание 
   const mangaList =[
    {title:'One piece',  author:'Eiichiro Oda', year:'1997',
     title:'Berserk', author:'Kentaro Miura' , yaer:'1989',
     title:'Naruto', author:'Kentaro Miura' , yaer:'1989',
     title:'Berserk', author:'Kentaro Miura' , yaer:'1989',   
     }
];
    const unitedBookOfManga =[...bookList, ...mangaList];
      console.log(unitedBookOfManga);
  //10 задание 
  function newProperty(object) {
    object.isRare = object.year <= 2000;
  return object;
}
  const updatedbookList = unitedBookOfManga.map( newProperty);
    console.log(updatedbookList);