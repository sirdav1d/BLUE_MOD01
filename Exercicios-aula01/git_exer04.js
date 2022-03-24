/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();

let dia = +prompt(`Digite quantos dias você viveu: `);
console.clear();
console.log();

let r1 = Math.floor(dia / 365);
let r2 = Math.floor((dia % 365) / 30);
let r3 = (dia % 365) % 30;

console.log(`Você viveu ${r1} anos, ${r2} meses e ${r3} dias de vida`);
console.log();
