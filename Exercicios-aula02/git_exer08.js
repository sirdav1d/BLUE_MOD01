/** @format */

console.clear();
console.log();

var prompt = require('prompt-sync')();

const compra = Number.parseFloat(100.98);
const pag = Number.parseFloat(150.0);

let troco = Number.parseFloat(pag - compra);

console.log(`O troco fica em R$${troco}\n`);
console.log();