var prompt = require('prompt-sync')();
const senha = 1234;

let senhaDigitada = prompt("Ola, Digite sua senha: ");

if (senhaDigitada == senha) {
    console.log("Acesso permitido");
}
else {
    console.log("Acesso negado");
}