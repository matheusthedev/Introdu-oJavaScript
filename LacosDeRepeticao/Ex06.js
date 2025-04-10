var prompt = require('prompt-sync')();

let idade = 0;

do {
    idade = Number(prompt("Quantos anos voce tem: "))
} while (idade > 0);

console.log("idade invalida")