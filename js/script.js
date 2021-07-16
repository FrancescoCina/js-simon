
/*
Descrizione:
Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
*/


/* 
PASSAGGI:

1- Creare array vuoto che contenga numeri;
2- Genera numeri Random (se non sono presenti nell'array sopra definito li pusho, altrimenti rigenero);
3- Alert con array dei numeri;
4- inserisco un timeout di 30sec (30000 millisecondi);
5- chiedo un prompt in un for fino a che la i è minore del primoarray.length; 
6- Li inserisco in un secondo array;
7- altro ciclo in cui definisco con un booleano se sono presenti o meno nell'array;
*/



// Stampo primo array 

var randomNumbersList = [];

var randomNumber = randomizeNumber(1, 100);


while (randomNumbersList.length < 5) {
    randomNumber = randomizeNumber(1, 100);
    if (randomNumbersList.includes(randomNumber)) {
        randomNumber = randomizeNumber(1, 100);
    } else {
        randomNumbersList.push(randomNumber);
    }
}


console.table(randomNumbersList);
alert(randomNumbersList);































// DECLARATION FUNCTIONS

function randomizeNumber(min, max) {

    randomNumber = Math.floor(Math.random() * max - min + 1) + min;
    return randomNumber;
}