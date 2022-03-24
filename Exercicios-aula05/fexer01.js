/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();
/*Faça um programa que leia um nome de usuário e 
a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma
 mensagem de erro e voltando a pedir as informações.*/

const user = prompt(`Digite um nome de usuário: `);
console.clear();
console.log();
let pass = prompt(`Digite uma senha: `);
console.clear(); 

while (pass == user) {
	console.clear();
	console.log();
	pass = prompt(`Opção de senha inválida, digite outra senha: `);
}

console.clear()
console.log(`\nUsuário "${user}" e senha "${pass}", foram cadastrados com sucesso!\n`);


