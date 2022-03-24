/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();

const nA = +prompt(`Digite um número: `);
console.clear();
console.log();

const nB = +prompt(`Digite outro número múltiplo do primeiro: `);
console.clear();

if (nA % nB == 0 || nB % nA == 0) {
	console.log(`\nOs números ${nA} e ${nB} são múltiplos`);
} else {
	console.log(`\nOs números ${nA} e ${nB} NÃO são múltiplos`);
}

console.log();
