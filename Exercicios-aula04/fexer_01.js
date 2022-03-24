/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();



let salario = +prompt(`Digite o valor do seu salário: `);
let aumento = 0;
let valoraument = 0;
let novosal = 0;

if (salario <= 280) {
	aumento++;
} else if (salario > 280 && salario < 700) {
	aumento = aumento + 2;
} else if (salario < 1500 && salario >= 700) {
	aumento = aumento + 3;
} else {
	aumento = aumento + 4;
}

if (aumento == 1) {
	aumento = 20;
} else if (aumento == 2) {
	aumento = 15;
} else if (aumento == 3) {
	aumento = 10;
} else if (aumento == 4) {
	aumento = 5;
}

valoraument = salario * (aumento / 100);
novosal = (salario + valoraument);
console.clear()
console.log()
console.log(`O salário a ser ajustado é de R$${salario}
O percentual de aumento é de ${aumento}%
O valor do aumento foi de R$${valoraument}
O novo salário é de R$${novosal} `);
console.log();
