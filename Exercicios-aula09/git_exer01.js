/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

const primeironum = +prompt(`Digite o primeiro número: `);
const segundonum = +prompt(`Digite o segundo número: `);

let diferenca = primeironum - segundonum;

let menor;
if (primeironum < segundonum) {
	menor = primeironum;
} else if (segundonum < primeironum) {
	menor = segundonum;
}

let sequencia = [];

if (primeironum - segundonum < 0) {
	diferenca = diferenca * -1;
}

for (i = 0; i <= diferenca; i++) {
	sequencia[i] = menor;
	menor++;
}

console.log(sequencia);
