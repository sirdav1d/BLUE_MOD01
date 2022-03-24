/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

let num = prompt(`Digite um número par: `);

while (num % 2 != 0) {
	console.clear();
	console.log();
	num = prompt(`Número inválido, digite um número par: `);
}

console.clear();
console.log(`\nO número ${num} é par!\n`);
