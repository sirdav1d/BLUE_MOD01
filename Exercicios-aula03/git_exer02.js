/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();

const n1 = +prompt(`Digite sua primeira nota: `);
console.clear();
console.log();

const n2 = +prompt(`Digite sua segunda nota: `);
console.clear();
console.log();

const n3 = +prompt(`Digite sua terceira nota: `);
console.clear();
console.log();

const n4 = +prompt(`Digite sua quarta nota: `);
console.clear();
console.log();

let media = (n1 + n2 + n3 + n4) / 4;

console.log(`A sua média é ${media}\n`);

if (media >= 7) {
	console.log(`Você foi aprovado`);
} else if (media < 6 && media >= 5) {
	console.log(`Você ficou de recuperação`);
} else {
	console.log(`Você foi reprovado`);
}

console.log();
