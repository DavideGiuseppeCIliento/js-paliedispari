// Palidroma

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const word = prompt("Inserisci una parola").toLowerCase();
let palindromo = false;

palindromo = isPalindromo(word);

palindromo ? alert("La parola inserita è Palindromo") : alert("La parola inserita non è Palindromo");

function isPalindromo(word) {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
    console.log(word[i]);
  }

  console.log(reverseWord);

  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }
}
