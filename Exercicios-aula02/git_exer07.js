/** @format */

console.clear();
console.log();

var prompt = require('prompt-sync')();

const comi = 42.54;
let gorj = comi * (10 / 100);

let total = Number.parseFloat(gorj + comi);

console.log(`R$${total}`);
console.log();