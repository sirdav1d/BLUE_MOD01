/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

let entradas = parseInt(+prompt(`Digite a quantidade de notas: `));
let rep = 0;

const notas = [];
const aprov = [];
const reprov = [];
const recup = [];

console.clear();
console.log();

do {
	notas.push(prompt(`${rep + 1} - Digite a Nota do aluno: `));

	if (notas[rep] >= 7) {
		console.clear();
		console.log();
		aprov.push(notas[rep]);
		rep++;
	} else if (notas[rep] < 5) {
		console.clear();
		console.log();
		reprov.push(notas[rep]);
		rep++;
	} else {
		console.clear();
		console.log();
		recup.push(notas.push[rep]);
		rep++;
	}
} while (entradas > rep);

console.log(
	`Aprovados: ${aprov.length} - Recuperação: ${recup.length} - Reprovados: ${reprov.length}`
);

console.log();
