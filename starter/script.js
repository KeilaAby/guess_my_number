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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !';
    // console.log(document.querySelector('body'));
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
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
