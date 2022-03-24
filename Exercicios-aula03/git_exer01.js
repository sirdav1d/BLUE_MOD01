/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

let n1 = +prompt(`Digite um número: `);
console.clear();
console.log(`Você esolheu o ${n1}\n`);

let n2 = +prompt(`Digite um número: `);
console.clear();
console.log(`Você esolheu o ${n2}\n`);

console.clear();
console.log();

if (n1 == n2) {
	console.log(`O número ${n1} é igual ao ${n2}\n`);
} else if (n1 > n2) {
	console.log(`O número ${n1} é maior que o ${n2}\n`);
} else {
	console.log(`O número ${n1} é menor que o ${n2}\n`);
}

console.log();
