/** @format **/

console.clear();
console.log()

var prompt = require('prompt-sync')();

let n1 = +prompt('Digite a nota 1: ');

console.clear();
console.log();

let n2 = +prompt('Digite a nota 2: ');

console.clear();
console.log();

let media = [n1 * 4 + n2 * 6] / 10;

console.log(`A sua média é ${media}`);

console.log();