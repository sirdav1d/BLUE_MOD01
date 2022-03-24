/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

var newgame = false;

//laço maior, zera contadores e efetua o newgame
do {
	let cont = 0;
	let battle = 0;
	let pcWin = [];
	let playerWin = [];
	let draw = [];

	console.log(`Welcome to the Hidden Forest! Today we are going to measure the combat skills of recruits.
Aerin the elf warrior will be your opponent. Try to beat him if you can!!!
`);

	//validação de dados1
	do {
		console.log();
		battle = +prompt(`How many rounds do you want to battle? `);
		console.clear();
		if (!isNaN(battle) && battle > 0) {
			break;
		}
	} while (true);

	//laço menor, controla a quantidade de batalhas, adicionando valores
	//as caixas de contagem
	do {
		console.log(`
REMEMBER:

MAGIC IMBUED ARROW WINS FIREBALL;

FIREBALL WINS ANCESTRAL AURA;

ANCESTRAL AURA WINS MAGIC IMBUED ARROW.
`);

		console.log(`These are the skills allowed today:

1 - MAGIC IMBUED ARROW;
2 - FIREBALL;
3 - ANCESTRAL AURA;
`);

		//lista fixa de habilidades
		const skills = ['MAGIC IMBUED ARROW', 'FIREBALL', 'ANCESTRAL AURA'];

		//lista variável de habilidades do player
		const playerSkills = ['MAGIC IMBUED ARROW', 'FIREBALL', 'ANCESTRAL AURA'];

		//lista variável de habilidades do computador
		const pcSkills = ['MAGIC IMBUED ARROW', 'FIREBALL', 'ANCESTRAL AURA'];

		//definição do index da habilidade do computador
		let player;
		let min = 1;
		let max = 3;
		min = Math.ceil(min);
		max = Math.floor(max);

		let index = Math.floor(Math.random() * (max - min + 1)) + min;

		//validação de dados2
		while (true) {
			player = +prompt(
				`Enter the index number of the chosen skill and try to defeat Aerin: `
			);
			console.clear();
			console.log();
			if (player > 0 && player < 4) {
				break;
			}
		}

		// método para reorganizar a posição da escolha do jogador e colocar
		// na última posição do array, mantendo a mesma ordem sequencial de skills[]

		for (const skill in skills) {
			if (player == 2) {
				playerSkills.splice(player - 2, 2);
				playerSkills.push(skills[player - 2]);
				playerSkills.push(skills[player - 1]);
				break;
			} else {
				playerSkills.splice(player - 1, 1);
				playerSkills.push(skills[player - 1]);
				break;
			}
		}

		// método para reorganizar a posição da escolha do Computer e colocar
		// na última posição do array, mantendo a mesma ordem sequencial de skills[]

		for (const skill in skills) {
			if (index == 2) {
				pcSkills.splice(index - 2, 2);
				pcSkills.push(skills[index - 2]);
				pcSkills.push(skills[index - 1]);
				break;
			} else {
				pcSkills.splice(index - 1, 1);
				pcSkills.push(skills[index - 1]);
				break;
			}
		}

		// método para comparação do posicionamento
		//entre a escolha do jogador e do computador

		if (playerSkills[2] == pcSkills[2]) {
			draw.push(1);
		} else if (playerSkills[2] == pcSkills[0]) {
			pcWin.push(1);
		} else {
			playerWin.push(1);
		}

		console.log(`REMEMBER:

MAGIC IMBUED ARROW WINS FIREBALL;

FIREBALL WINS ANCESTRAL AURA;

ANCESTRAL AURA WINS MAGIC IMBUED ARROW.
`);

		console.log(`You chose: ${skills[player - 1]}`);

		console.log(`Aerin chose: ${skills[index - 1]}
		
		`);

        
		//método para definir os resultados parciais de acordo com o tamanho de cada array
		console.log(`VICTORIES: ${playerWin.length}`);
		console.log(`DEFEATS: ${pcWin.length}`);
        console.log(`DRAWS: ${draw.length}`);

		console.log();
		prompt(`PRESS ENTER TO CONTINUE `);

		console.clear();

		cont++;
	} while (cont < battle);

	const result = [
		`Your skills are unparalleled, you won! CONGRATULATIONS!!!`,
		`You fought bravely and got the draw!`,
		`You were easily defeated, Aerin remains our champion!`,
	];

	console.log();

	//método para definir os resultados de acordo com a lista de result

	if (playerWin.length > pcWin.length && playerWin.length >= draw.length) {
		console.log(result[0]);
	} else if (pcWin.length > playerWin.length && pcWin.length >= draw.length) {
		console.log(result[2]);
	} else {
		console.log(result[1]);
	}

	console.log();

	//fechamento do while e encerramento do game
	newgame = +prompt(`PRESS '1' TO PLAY AGAIN: `);

	if (newgame == 1) {
		newgame = true;
		console.clear();
	}
} while (newgame == true);

console.clear();
console.log(`
Hope you had fun, Aerin is waiting for you on a next adventure!
`);
