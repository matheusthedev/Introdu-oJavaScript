var prompt = require('prompt-sync')();

let soma = 0;
let num = Number(prompt("Digite um numero: "));

while(num != 0) {
    soma += num;
    num = Number(prompt("Digite um numero(Digite 0 caso queira sair): "));
}

console.log(soma);