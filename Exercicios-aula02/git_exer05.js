/** @format */
var prompt = require('prompt-sync')();

console.clear();
console.log();

const op1 = 'Cachaça';
const op2 = 'Tequila';
const op3 = 'Rum';

console.log(`Isso é o que temos: \n 1- ${op1} \n 2- ${op2} \n 3- ${op3} \n`);

let resp = +prompt('Vai querer qual? ');

if (resp == 1) {
	resp = `${op1}`;
} else if (resp == 2) {
	resp = `${op2}`;
} else if (resp == 3) {
	resp = `${op3}`;
}
console.clear();
console.log();

console.log(`\nVocê escolheu: ${resp}\n`);

console.log();