/** @format */

var prompt = require('prompt-sync')();
console.clear();
console.log();

let real = +prompt(`Digite o valor em reais: `);
let dol = Number.parseFloat(real * 5);

console.log(`O valor em dólar é $${dol}`);
console.log();
