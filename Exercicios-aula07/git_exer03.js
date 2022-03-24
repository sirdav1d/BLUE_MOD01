/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

let rep = 0;
const num = [];

while (rep < 20) {
	num.push(Math.floor(Math.random() * 100));
	rep++;
}

console.log(`${num.sort((a, b) => a - b)}`);
console.log();
