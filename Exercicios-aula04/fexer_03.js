/** @format **/
console.clear();
console.log();

var prompt = require('prompt-sync')();



const saque = +prompt(`Quanto deseja sacar? `);

const n1 = 1;
const n2 = 5;
const n3 = 10;
const n4 = 50;
const n5 = 100;

let resp5 = parseInt(Math.floor(saque / n5));
let resp4 = parseInt(Math.floor(saque % n5) / n4);
let resp3 = parseInt(Math.floor((saque % n5) % n4) / n3);
let resp2 = parseInt(Math.floor(((saque % n5) % n4) % n3) / n2);
let resp1 = parseInt(Math.floor((((saque % n5) % n4) % n3) % n2) / n1);

if (resp1 < 1) {
	resp1 = 0;
} else if (resp2 < 1) {
	resp2 = 0;
} else if (resp3 < 1) {
	resp3 = 0;
} else if (resp4 < 1) {
	resp4 = 0;
} else if (resp5 < 1) {
	resp5 = 0;
}

if (saque < 10) {
	console.clear();
    console.log();

	console.log(`Valor inválido.`);

} else if(saque >600){
	console.clear();
	console.log();

    console.log(`Valor inválido.`);

}else{
	console.log(`Você vai receber:
${resp5} notas de R$100,00;
${resp4} notas de R$50,00;
${resp3} notas de R$10,00;
${resp2} notas de R$5,00
${resp1} notas de R$1,00.`);
}

console.log();