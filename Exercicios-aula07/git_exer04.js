/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

//  Faça um programa que peça o nome de usuário e a senha de um usuário.
//  A senha deve ter no mínimo 8 caracteres, pelo menos um número
//  e um caracter especial.

let nome = [];
nome = prompt(`Digite seu nome de usuário: `);

let senha = [];
// senha = prompt(`Digite ma senha: `)

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const esp = ['@', '!', '#', '$', '%', '^', '&', '*', '(', ')'];

var prompt = require('prompt-sync')();

console.log('--------------');
let nome;
let senha;
let caracEspecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_'];
let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let existe_caracter = false;
let existe_numero = false;
let senha_correta = false;

nome = prompt('Digite seu Login: ');
senha = prompt('Digite sua Senha: ');

while (senha_correta == false) {
	for (const s of senha) {
		for (const c of caracEspecial) {
			if (c == s) {
				existe_caracter = true;
				break;
			}
		}
	}
	for (const s of senha) {
		for (const n of numeros) {
			if (n == s) {
				existe_numero = true;
				break;
			}
		}
	}
	if (senha.length < 8)
		console.log('Senha invalida, a senha precisa ter pelo menos 8 caracteres');

	if (existe_caracter == false)
		console.log(
			'Senha invalida, a senha precisa ter pelo menos 1 caracter especial'
		);

	if (existe_numero == false)
		console.log('Senha invalida, a senha precisa ter pelo menos 1 numero');

	if (senha.length < 8 || existe_caracter == false || existe_numero == false) {
		existe_caracter = false;
		existe_numero = false;
		senha = prompt('Digite uma nova senha: ');
	} else senha_correta = true;
}

console.log('Login realizado com sucesso');