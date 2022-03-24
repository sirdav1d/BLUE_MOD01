/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

const nome = [];
const nota = [];
var media = 0;
const alunos = +prompt(`Digite a quantidade de alunos a serem cadastrados: `);
let rep = 0;

while (rep < alunos) {
	console.clear();
	console.log();
	nome.push(prompt(`${rep + 1} - Digite o nome do aluno: `));
	console.log();
	nota.push(+prompt(`${rep + 1} - Digite a nota do aluno: `));
	media += nota[rep];
	rep++;
}

console.clear();
console.log();
rep = 0;
media = (media / nota.length).toFixed(2);

while (rep < alunos) {
	console.log(`Aluno: ${nome[rep]} - Nota: ${nota[rep]}\n`);
	rep++;
}

console.log(`A média das notas é ${media}\n`);
