// Magic 8 ball
const userName = 'Eugen';
userName === 'Eugen' ? console.log(`Hello, ${userName}`) : console.log('Hello');

const userQuestion = 'Am I a software developer?';
console.log(`${userName} wants to pose this question: "${userQuestion}".`);

const randomNumber = Math.floor(Math.random() * 8);
// const randomNumber = 'r';
console.log(randomNumber);

let eightBall = '';

if (randomNumber === 0) {
  eightBall = 'It is certain';
  console.log(eightBall);
} else if (randomNumber === 1) {
  eightBall = 'It is decidely so';
  console.log(eightBall);
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
  console.log(eightBall);
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
  console.log(eightBall);
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
  console.log(eightBall);
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
  console.log(eightBall);
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
  console.log(eightBall);
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
  console.log(eightBall);
} else {
  eightBall = 'It\'s a matter of hard work!!!';
  console.log(eightBall);
}