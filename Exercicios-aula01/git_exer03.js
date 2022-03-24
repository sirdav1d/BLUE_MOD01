/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();

const anos = +prompt('Digite quantos anos você tem: ');
console.clear();
console.log();

const meses = +prompt('Digite quantos meses você viveu após seu aniversário: ');
console.clear();
console.log();

const dias = +prompt('Digite quantos dias após o mês você viveu: ');
console.clear();
console.log();

let anos_v = anos * 365;
let meses_v = (meses * 30) + dias;

let total = anos_v + meses_v;

console.log(`Voçê viveu até hoje ${total} dias`);
console.log();