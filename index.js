var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

console.log('Hey yah :)');
var userName = readlineSync.question('Please provide your good name to continue with the game : ');

console.log('Hello '+userName+',\n');
console.log('Welcome to '+chalk.yellowBright.bold(' DO YOU KNOW ME ?\n'));
console.log('Let\'s see how much you know about '+ chalk.yellow.bold(' Ayushi ')+'?\n');
 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.green('Guide'));
console.log(chalk.magenta('> There are multiple choice questions'));
console.log(chalk.magenta('> Choose the options given below by selecting any of the key 1,2,3,4\n'));
 console.log(chalk.yellowBright('-----------------------------------------------'));



var questionBank = [
  {
    question : 'When is my BirthDay?',
    options : ['29 September', '28 September','29 October','28 October'],
    answer :'28 September'
  },
  {
    question : 'Where is my Hometown ?',
    options : ['Lucknow', 'Kanpur', 'Ayodhya','Barabanki'],
    answer : 'Barabanki'
  },
  {
    question :  'From where i am doing my graduation',
    options : ['IET, Lko', 'RMLU, Ayodhya','PSIT, Kanpur', 'NIET, Noida'],
    answer : 'RMLU, Ayodhya'
  },
  {
    question : 'What is my majors during my graduation ?',
    options : ['Computer Science','Information Technology','Electronics and Communication','Electrical'],
    answer : 'Information Technology' 
  },
    
  {
    question : 'What is my favourite Game?',
    options : ['Basketball','Football','Volleyball','Badminton'],
    answer : 'Basketball'
  },

  
  {
    question : 'Which is my favourite ice-cream ?',
    options : ['Chocolate', 'Vanilla', 'Straberry','Butterscotch'],
    answer : 'Chocolate'
  },
  {
    question : 'Can you guess my favourite television series ?',
    options : ['Friends', 'Brooklyn 99', 'Game Of Thrones', 'The Office'],
    answer : 'Friends'
  }
]


function displayQuestion(questionObj){
  console.log(chalk.yellowBright.bold(questionObj.question)+'\n')
  for(var i =1;i<=4;i++){
    console.log('['+i+'] '+questionObj.options[i-1]);
  }
  var index = readlineSync.keyIn('\n\nChoose your Answer : ', {limit: '$<1-4>'});

  var userAnswer = questionObj.options[index - 1];
  if(userAnswer === questionObj.answer){
    console.log(chalk.bgGreen.black.bold('\nCorrect\n'));
    score = score +2;
  }
  else{
    console.log(chalk.bgRed.black.bold('\nWrong Answer\n'));
  }
}

for(var i =0;i< questionBank.length ;i++){
  displayQuestion(questionBank[i]);
  console.log(chalk.yellowBright('-----------------------------------------------'));
}

 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.yellow.bold('\n\n Final Score : ', score+'\n\n'));
if(score === 14){
  console.log(chalk.green.bold('Yoo hoo! Congratulations \nYour All Answers are Correct \n'));
  
}

 console.log(chalk.yellowBright('-----------------------------------------------'));