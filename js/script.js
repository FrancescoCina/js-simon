
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

// VARIABILI PER STAMPA IN HTML

var displayNumbersGuessed = document.getElementById("guessed-numbers");
var displayHowManyNumbersGuessed = document.getElementById("u-guess");


// Stampo primo array 

var randomNumbersList = [];

// RANDOMIZZO 5 NUMERI

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

// ALERT CON ARRAY DI NUMERI RANDOM
alert(randomNumbersList);


// INSERISCO LA FUNZIONE DEL TIMEOUT CON ALL'INTERNO LA LOGICA DEL GIOCO

var userNumber;

var userNumbersList = [];

setTimeout(function () {
    //    CHIEDO IL NUMERO ALL'UTENTE FINO A CHE NON è UN VALORE VALIDO CONTINUO A CHIEDERE
    for (var i = 0; i < randomNumbersList.length; i++) {
        userNumber = prompt("Inserisci i numeri visti in precedenza...");
        while (!userNumber || isNaN(userNumber) || userNumber.trim() === "") {
            userNumber = prompt("Inserisci i numeri visti in precedenza...");
        }
        // PUSHO IL NUMERO ALL'INTERNO DELL'ARRAY DEI NUMERI SCELTI DALL'UTENTE
        userNumbersList.push(parseInt(userNumber));
    }
    console.table(userNumbersList);
    console.log(userNumber);

    // CREO ARRAY NUMERI INDOVINATI
    var guessedNumbers = [];
    // FACCIO CICLARE PER VERIFICARE SE I NUMERI SONO PRESENTI NELL'ARRAY DEI NUMERI RANDOM. SE NON PRESENTI LI PUSHO NELL'ARRAY DEI NUMERI INDOVINATI


    for (var i = 0; i < userNumbersList.length; i++) {
        if (randomNumbersList.includes(userNumbersList[i])) {
            guessedNumbers.push(userNumbersList[i]);
            console.table(guessedNumbers);
        } else {
            console.table(guessedNumbers);
        }
    }

    // CICLO PER STAMPA IN HTML
    var guessedNumberElement = "";

    for (var i = 0; i < guessedNumbers.length; i++) {
        guessedNumberElement += "<li>" + guessedNumbers[i] + "</li>";
        displayNumbersGuessed.innerHTML = guessedNumberElement;
    }


    // STAMPO IL RISULTATO DEL GIOCO

    console.log("I numeri da te indovinati sono: ", guessedNumbers);

    console.log("Hai indovinato: ", guessedNumbers.length, "numeri!");
    displayHowManyNumbersGuessed.innerHTML = "Hai indovinato: " + guessedNumbers.length + " numeri!";
}, 2000)




























// DECLARATION FUNCTIONS

function randomizeNumber(min, max) {

    randomNumber = Math.floor(Math.random() * max - min + 1) + min;
    return randomNumber;
}