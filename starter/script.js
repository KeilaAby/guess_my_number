'use strict';
/*
DOM est un representtaion complète du document HTML
grâce à l'objet "document", nous pouvions manipuler la structure originale de HTML
DOM ne fait partie du Language Javascript, ce dernier étant seulement un dialecte de ECMA International.
DOM fait partie de ce qu'on appelle les "API Web" écrit en javascript, ce sont des librairies que les 
navigateurs implémentent et auxquelles nous pouvons accéder à partir de notre code Javascript

API : Application Programming Interface
Ex d'API WEB : Timers, Fetch

*/

//SELECTING AND MANIPULATING ELEMENTS
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number !';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//HANDLING CLICK EVENT
/* Un evenement est ue chose quis se passe sur notre page web (click, hover, focus, ) */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  } 
  //When the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent = secretNumber;
    score > highScore ? highScore = score : '';
    document.querySelector('.highscore').textContent = highScore;

  } 
  //When Guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  } 
  //When guess is too lows
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !';
      document.querySelector('.score').textContent = 0;
      
    }
  }
});

//CHALLENGE

/* Implement a game rest functionnality, so that the player 
can make a new guessb! Her is How :

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial value of the score and secretNumber variables
3. Restore the initial condition of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width(15rem)
 */

//selecting the button Again
document.querySelector('.again').addEventListener('click', function(){
  //Restore score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;

  //Restore initial condition of the message, number and guess input field
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = '';

  //Restore the original Background color to #222 and width to 15rem
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'

});
