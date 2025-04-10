var prompt = require('prompt-sync')();

let idade = Number(prompt("Ola, Digite sua idade: "));

if (idade >= 18) {
    console.log("Voce pode tirar a carteira");
} else if (idade < 18) {
    console.log("Voce não pode tirar a carteira");
} else {
    console.log("Essa informação não é valida");
}