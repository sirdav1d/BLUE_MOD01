/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

let x = +prompt(`Digite um valor inteiro: `);
const valores = [];

for (i = 0; i <= x; ) {
	if (x % 2 != 0) {
		valores.push(x);
		x = x - 1;
	} else if (x % 2 == 0) {
		x = x - 1;
	}
}

for (const impar of valores) console.log(impar);
