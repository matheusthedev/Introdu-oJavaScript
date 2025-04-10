var prompt = require('prompt-sync')();
let nota = Number(prompt("Digite sua nota: "));

if (nota > 5){
    console.log("Você está aprovado!");
}
else{
    console.log("Você está reprovado!");
}