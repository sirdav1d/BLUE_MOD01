/** @format **/

var prompt = require('prompt-sync')();
console.clear();
console.log();



let num = Math.floor(Math.random() * 10);
let resp = prompt(
	`Tente adivinhar em qual número o PC está pensando, de 0 a 10: `
);

if (resp != num) {
        console.clear();
		console.log(`\nVocê perdeu, o número correto era ${num}, e o escolhido foi o ${resp}\n`)
	} else if (resp == num) {
        console.clear();
		console.log(
			`\nVocê acertou, o número correto era ${num}, e o escolhido foi o ${resp}\n`
		);
	}
