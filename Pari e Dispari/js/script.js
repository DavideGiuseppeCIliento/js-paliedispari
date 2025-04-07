// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const rounds = parseInt(prompt("Quanti ROUNDS vuoi effettuare?"));

const PlayerChoice = prompt("Vuoi essere PARI o DISPARI?").toLowerCase();
let scorePlayer = 0;
let scoreComputer = 0;

// ALGORITMO

for (let i = 0; i < rounds; i++) {
  let PlayerNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

  const ComputerNumber = randomNumber();
  console.log("Numero random per Computer: " + ComputerNumber);

  let totalResult = isTotalEvenOrOdd(PlayerNumber, ComputerNumber);
  console.log("Risultato è " + totalResult);

  AssignPoint(PlayerChoice, totalResult, scorePlayer, scoreComputer);
  console.log("Punteggio PLAYER: " + scorePlayer + "Punteggio COMPUTER: " + scoreComputer);
}

theWinnerIs(scoreComputer, scorePlayer);

// FUNZIONI

function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function isTotalEvenOrOdd(PlayerNumber, ComputerNumber) {
  let sum = PlayerNumber + ComputerNumber;
  console.log("Somma: " + sum);
  let result = "";
  return sum % 2 === 0 ? "pari" : "dispari";
}

function AssignPoint(PlayerChoice, totalResult) {
  return PlayerChoice === totalResult ? scorePlayer++ : scoreComputer++;
}

function theWinnerIs(scoreComputer, scorePlayer) {
  if (scorePlayer > scoreComputer) {
    console.log(" -------------------- VITTORIA DEL PLEYER1! -------------------- ");
  } else if (scorePlayer < scoreComputer) {
    console.log(" -------------------- VITTORIA DEL COMPUTER! -------------------- ");
  } else {
    console.log(" -------------------- È PAREGGIO! -------------------- ");
  }
}
