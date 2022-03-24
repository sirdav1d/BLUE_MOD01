/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

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

console.clear();
console.log(
	`\nUsuário "${user}" e senha "${pass}", foram cadastrados com sucesso!\n`
);
