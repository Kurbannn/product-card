import { commentsList } from './comments.js';

// Задание 2: создать массив от 1 до 10.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter(number => number >= 5));

// Задание 3: Создать массив строк, относящихся к любой сущности
const objects = ['sofa', 'bed', 'armchair', 'throne', 'vestibule'];
console.log(objects.includes('throne'));

// Задание 4
function reverseArray(array) {
  array.reverse();
  return array;
}

const reversedNumbers = reverseArray(numbers);
const reversedObjects = reverseArray(objects);

console.log(reversedNumbers);
console.log(reversedObjects);

// Задание 7
const commentsWithComEmail = commentsList.filter(comment => 
  comment.email.includes('.com')
);
console.log(commentsWithComEmail);

// задание 8 
const modifiedComments = commentsList.map(comment => {
  const newComment = { ...comment };
  if (newComment.id <= 5) {
    newComment.postId = 2;
  } else {
    newComment.postId = 1;
  }
  return newComment;
});
console.log(modifiedComments);

// 9 задание 
const simplifiedComments = commentsList.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(simplifiedComments);

// 10 задание 
const commentsWithValidation = commentsList.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(commentsWithValidation);

// 11 Задание 
const emailsArray = commentsList.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsArray);

const emailsArrayFromMap = commentsList.map(comment => comment.email);
console.log(emailsArrayFromMap);

// 12 задание 
const emailsJoinDefault = emailsArray.join();
console.log(emailsJoinDefault);

const emailsToString = emailsArray.toString();
console.log(emailsToString); 