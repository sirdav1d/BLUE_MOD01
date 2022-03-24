/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

const num = +prompt('Digite um número: ');
console.clear();
console.log();

if (num % 2 == 0) {
	console.log(`\nO número ${num} é par\n`);
} else {
	console.log(`\nO número ${num} é ímpar\n`);
}

