/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

const par = [];
const impar = [];

let num = parseInt(+prompt(`Digite um número: `));

do {
	if (num % 2 == 0) {
		par.push(num);
		num--;
	} else {
		impar.push(num);
		num--;
	}
} while (num >= 0);

console.clear();
console.log();
console.log(
	`Números pares: ${par.sort((a, b) => a - b)} - Números ímpares: ${impar.sort(
		(a, b) => a - b
	)}`
);
console.log();
