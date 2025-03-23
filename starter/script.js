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
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent= 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
