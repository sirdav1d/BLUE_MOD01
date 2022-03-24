/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();

let hp = +prompt(`Digite a quantidade de HP do monstro (entre 10 e 50): `);
console.clear();
console.log();

if(hp < 10 || hp > 50){
	let hp = +prompt(`Valor inválido, o HP de estar entre 10 e 50: `);
}

console.clear();
console.log();

let dp = +prompt(`Digite a quantidade de DANO jogador (entre 5 e 10): `);
console.clear();
console.log();

if(dp < 5 || dp > 10) {
	let dp = +prompt(`Valor inválido, o DANO deve ser entre 5 e 10: `)
}

console.clear();
console.log();


let turnos = parseInt(hp / dp);

console.log(`O jogador vai atacar ${turnos} vezes para matar o monstro.\n`);
console.log();