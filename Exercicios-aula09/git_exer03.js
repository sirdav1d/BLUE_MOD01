/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

const qtd = +prompt(`digite a quantidade de números: `);
let valores = [];
let soma = 0;

for (i = 0; i < qtd; i++) {
	console.clear();
	console.log();
	valores.push(+prompt(`${i + 1} - Digite o valor: `));

	soma += valores[i];
}

console.clear();
console.log();

valores.sort((a, b) => a - b);
console.log(
	`Soma: ${soma} - Menor valor: ${valores[0]} - Maior valor: ${
		valores[valores.length - 1]
	}`
);
console.log();
