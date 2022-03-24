/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

const idade = [];
const altura = [];
let rep = 0;
let mediaidade = 0;
let mediaaltura = 0;

while (rep < 5) {
	console.clear();
	idade.push(+prompt(`${rep + 1} - Digite sua idade: `));
	console.log();
	altura.push(+prompt(`${rep + 1} - Digite a sua altura: `));
	mediaidade += idade[rep];
	mediaaltura += altura[rep];
	rep++;
}
console.clear();

mediaidade = mediaidade / idade.length;
mediaaltura = mediaaltura / altura.length;

console.log(
	`\nA média das idades é ${mediaidade} e a média das alturas é ${mediaaltura}\n`
);
