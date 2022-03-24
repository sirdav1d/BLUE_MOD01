/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

const a = [];
const b = [];
const c = [];
let min = 1;
let max = 3;
min = Math.ceil(min);
max = Math.floor(max);

const eleitores = +prompt(`Digite o número total de eleitores: `);

let votos;

for (i = 0; i < eleitores; i++) {
	votos = Math.floor(Math.random() * (max - min + 1)) + min;
	if (votos == 1) {
		a.push(votos);
	} else if (votos == 2) {
		b.push(votos);
	} else {
		c.push(votos);
	}
}
console.clear();
console.log(
	`\nCandidato A: ${a.length} - Candidato B: ${b.length} - Candidato C: ${c.length}\n`
);
