// ! traccia 1

// let numeroUno = parseInt(prompt("scrivi un numero più grande"));
// console.log("numero uno" + numeroUno);
// let numeroDue = parseInt(prompt("scrivi un secondo numero più piccolo"));
// console.log("numero due" + numeroDue);

// let numeroGiusto =
//   Math.floor(Math.random() * (numeroUno - numeroDue)) + numeroDue;

// console.log(numeroGiusto);

// ! traccia 2

// let firstWord = prompt("scrivi una parola");
// let secondWord = prompt("scrivi un altra parola");

// if (firstWord.length == secondWord.length) {
//   console.log(firstWord + " " + secondWord);
// } else if (firstWord.length > secondWord.length) {
//   console.log(firstWord);
// } else {
//   console.log(secondWord);
// }

// ! traccia 3

// let result = [];

// let resultSum = 0;

// while (resultSum < 50) {
//   let userNumber = parseInt(prompt("Inserisci un numero"));
//   let checkUserNumber = resultSum + userNumber;
//   console.log(resultSum);
//   if (checkUserNumber <= 50) {
//     resultSum += userNumber;
//     result.push(userNumber);
//   }
//   console.log(result);
// }

// ! traccia 4

// let result = [];

// let resultSum = 0;

// while (resultSum < 50) {
//   let userNumber = parseInt(prompt("Inserisci un numero"));
//   let checkUserNumber = resultSum + userNumber;
//   console.log(resultSum);
//   if (checkUserNumber <= 50) {
//     resultSum += userNumber;
//     result.push(userNumber);
//   }
//   console.log(result);
// }

// console.log("Media è " + resultSum / result.length);

// ! traccia 5

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);

// dovrebbe restituire [1,3,5]
