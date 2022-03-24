/** @format */

var prompt = require('prompt-sync')();
console.clear();
console.log();

const nome = prompt('Digite seu Nome: ');
console.clear();
console.log();

const endereco = prompt('Digite seu Endereço: ');
console.clear();
console.log();

const cep = prompt('Digite seu CEP: ');
console.clear();
console.log();
const tel = prompt('Digite seu número de telefone: ');
console.clear();
console.log();

console.log(
	`Nome: ${nome} \nEndereço: ${endereco} \nCEP: ${cep} \nTelefone: ${tel}`
);

console.log();