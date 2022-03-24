var prompt = require("prompt-sync")();
console.clear();
console.log();

/*Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1,
 o valor unitário de cada peça 1, o nome de uma peça 2, o número de peças 2
 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.*/

let nomepc1 = prompt("Digite o nome da peça 1: ");
console.clear();
console.log();

let nomepc2 = prompt("Digite o nome da peça 2: ");
console.clear();
console.log();

let numpc1 = +prompt(`Digite a quantidade de ${nomepc1}: `);
console.clear();
console.log();

let numpc2 = +prompt(`Digite a quantidade de ${nomepc2}: `);
console.clear();
console.log();

let valorpc1 = +prompt(`Digite o valor de ${nomepc1}: `);
console.clear();
console.log();

let valorpc2 = +prompt(`Digite o valor de ${nomepc2}: `);
console.clear();
console.log();

let valorpago = numpc1 * valorpc1 + valorpc2 * numpc2;

console.log(`O valor total a ser pago em R$ é ${valorpago}`);

console.log();
