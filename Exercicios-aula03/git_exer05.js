/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

//Entrada de valores (Lados)
console.log(`Digite o valor para cada lado:`);
let A = +prompt(`R: `);
console.log();

let B = +prompt(`R: `);
console.log();

let C = +prompt(`R: `);
console.log();
let X; // Apenas para não perder o valor durante a ordenação

// Ordenando os valores

if (B > A) {
	X = A;
	A = B;
	B = X;
}
if (C > B) {
	X = B;
	B = C;
	C = X;
}
if (B > A) {
	X = A;
	A = B;
	B = X;
}

console.log(`A: ${A}\tB: ${B}\tC: ${C}`); //Confirmando se está ordenado
console.log();

if (A >= B + C) {
	//teste se é triangulo ou não

	console.log(`Não forma Triangulo!`);
} else if (A == B && B == C) {
	//teste se é triangulo equilatero (tres lados iguais)

	console.log(`Você formou um triangulo EQUILATERO!`);
	console.log(`O seu triangulo também é um triangulo ACUTANGULO!`);
} else if (A == B || B == C || C == A) {
	//teste se triangulo é isosceles

	console.log(`Você formou um triangulo ISOSCELES!`);

	if (A * A == B * B + C * C) {
		// teste de segundo plano caso seja Isosceles (dois lados iguais)
		console.log(`O seu triangulo também é um triangulo RETANGULO!`);
	} else if (A * A > B * B + C * C) {
		console.log(`O seu triangulo também é um triangulo OBTUSANGULO!`);
	} else if (A * A < B * B + C * C) {
		console.log(`O seu triangulo também é um triangulo ACUTANGULO!`);
	}
} else {
	//teste se triangulo é Escaleno (lados diferentes)

	console.log(`Você formou um triangulo ESCALENO!`);

	if (A * A == B * B + C * C) {
		//teste de segundo plano caso seja Escaleno
		console.log(`O seu triangulo também é um triangulo RETANGULO!`);
	} else if (A * A > B * B + C * C) {
		console.log(`O seu triangulo também é um triangulo OBTUSANGULO!`);
	} else if (A * A < B * B + C * C) {
		console.log(`O seu triangulo também é um triangulo ACUTANGULO!`);
	}
}

console.log();