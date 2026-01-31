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
    function setInfoMaxSpeed(carObject){
     if (carObject.setInfoMaxSpeed){
    carObject.setInfoMaxSpeed=190
  }
};
  setInfoMaxSpeed(car);
//6 задание
   function addPropertyValue(obj, propertyName) {
    console.log(obj[propertyName]);
}
//7 задание 
const productlist = ['cheese' ,'milk', 'buhanka', 'banana'];
//8 задание 
const findBookListArray = [
  {  title: 'Book 1',
     author: 'Author 1', 
     year: 1979 },

  {  title: 'Book 2',
     author: 'Author 2',
     year: 1988 },

  {  title: 'Book 3',
     author: 'Author 3',
     year: 2002 },

  {  title: 'Book 4',
     author: 'Author 4',
     year: 2005 },
];
    findBookListArray.push({
      title: 'Book 5',
      author: 'Author 5',
      year: 2012});
console.log(findBookListArray);
// 9задание 
   const getMangaListArray =[
    {title:'One piece',  author:'Eiichiro Oda', year:'1997',
     title:'Berserk', author:'Kentaro Miura' , yaer:'1989',
     title:'Naruto', author:'Kentaro Miura' , yaer:'1989',
     title:'Berserk', author:'Kentaro Miura' , yaer:'1989',   
     }
];
    const unitedBookOfManga =[...findBookListArray, ...getMangaListArray];
      console.log(unitedBookOfManga);
  //10 задание 
  function assignRarityFlag(object) {
    object.isRare = object.year <= 2000;
  return object;
}
  const updatedfindBookListArray = unitedBookOfManga.map( assignRarityFlag);
  console.log(updatedfindBookListArray);