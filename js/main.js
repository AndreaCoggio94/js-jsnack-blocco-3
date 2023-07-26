console.log("Hello world");

let numeroUno = parseInt(prompt("scrivi un numero"));
console.log("numero uno" + numeroUno);
let numeroDue = parseInt(prompt("scrivi un secondo numero"));
console.log("numero due" + numeroDue);

// let numeroCasuale = Math.floor(Math.random() * (numeroUno - numeroDue));

// console.log(numeroCasuale);

// let numeroFinale = numeroCasuale + numeroDue;

// console.log(numeroFinale);

let numeroGiusto =
  Math.floor(Math.random() * (numeroUno - numeroDue)) + numeroDue;

console.log(numeroGiusto);

// let numero = parseInt(numeroGiusto) + parseInt(numeroDue);
// console.log(numero);
