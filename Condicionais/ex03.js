var prompt = require('prompt-sync')();

let numero = Number(prompt("Ola, Digite um numero: "));

if(numero %2 == 0){
    console.log("O numero é par");
}
else {
    console.log("O numero é impar");
}