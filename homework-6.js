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
    function getMaxSpeed(carObject){
     if (carObject.getMaxSpeed){
    carObject.getMaxSpeed=190
  }
};
  getMaxSpeed(car);
//6 задание
   function propertyValue(obj, propertyName) {
    console.log(obj[propertyName]);
}
//7 задание 
const productlist = ['cheese' ,'milk', 'buhanka', 'banana'];
//8 задание 
const findBookList = [
  { title: 'Book 1', author: 'Author 1', year: 1979 },
  { title: 'Book 2', author: 'Author 2', year: 1988 },
  { title: 'Book 3', author: 'Author 3', year: 2002 },
  { title: 'Book 4', author: 'Author 4', year: 2005 },
];
findBookList.push({ title: 'Book 5', author: 'Author 5', year: 2012});
console.log(findBookList);
// 9задание 
   const keepMangaList =[
    {title:'One piece',  author:'Eiichiro Oda', year:'1997',
     title:'Berserk', author:'Kentaro Miura' , yaer:'1989',
     title:'Naruto', author:'Kentaro Miura' , yaer:'1989',
     title:'Berserk', author:'Kentaro Miura' , yaer:'1989',   
     }
];
    const unitedBookOfManga =[...findBookList, ...keepMangaList];
      console.log(unitedBookOfManga);
  //10 задание 
  function newProperty(object) {
    object.isRare = object.year <= 2000;
  return object;
}
  const updatedfindBookList = unitedBookOfManga.map( newProperty);
    console.log(updatedfindBookList);