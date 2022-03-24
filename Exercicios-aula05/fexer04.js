/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();

let num = Math.floor(Math.random() * 10);
let id = 1;
let resp = prompt(
	`Tente adivinhar em qual número o PC está pensando, de 0 a 10: `
);

while (resp != num) {
	id++;
	console.clear();
	console.log();
	if (resp > num) {
		resp = prompt(`Número errado, tente um valor menor: `);
	} else if (resp < num) {
		resp = prompt(`Número errado, tente um valor maior: `);
	}
}

console.clear();
console.log(`\nPARABÉNS!!! Você acertou e levou
apenas ${id} tentativas pra acertar o número ${num}\n`);
