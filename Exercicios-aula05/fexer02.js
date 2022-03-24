/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

let name = prompt(`Digite um nome: `);

while (name.length <= 3) {
	console.clear();
	console.log();
	name = prompt(`Digite um nome com mais de três caracteres: `);
}


console.clear();
console.log();

let idade = +prompt(`Digite uma idade: `);

while (idade < 0 || idade > 150 || idade == '') {
	 
		console.clear();
		console.log();
		idade = prompt(`Digite uma idade válida: `);
	}

console.clear();
console.log();

let sal = +prompt(`Digite um salário: `);

while (sal < 0 || sal == '') {
	console.clear();
	console.log();
	sal = prompt(`Digite um salário válido: `);
}

console.clear();
console.log();

let estcivil = prompt(`Digite um estado civil, (s, c, v ou d): `);

while (
	estcivil != 's' &&
	estcivil != 'c' &&
	estcivil != 'v' &&
	estcivil != 'd'
) {
	console.clear();
	console.log();
	estcivil = prompt(`Digite um estado civil válido (s, c, v ou d): `);
}

console.clear();
console.log(
	`\nSeu nome é ${name}, sua idade é ${idade}, seu salário é ${sal} e seu estado civil é ${estcivil}\n`
);
