/** @format */

console.clear();

var prompt = require('prompt-sync')();
var dados = [];
var pontuacao = [];
var repeated = [];
let rodada = 0;
var players = 0;
var jogadores = [];

// PERGUNTAR QUANTAS RODADAS
// PERGUNTAR QUANTOS JOGADORES
// CRIAR UM OJETO PARA CADA JOGADOR
// GUARDAR OS OBJETOS EM UMA LISTA
// ORDENAR OS OBJETOS, SABENDO QUE O VENCEDOR TIROU O MAIOR NÚMERO NO DADO
// MOSTRAR NO FINAL, QUAL JOGADOR GANHOU MAIS RODADAS E FOI O GRANDE CAMPEÃO

function isNumber(str) {
	return !isNaN(parseInt(str));
}

function sleep(segundos = 1) {
	segundos = segundos * 1000;
	let start = new Date().getTime();
	for (let i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > segundos) {
			break;
		}
	}
}

function validaString(a) {
	while (true) {
		teste = isNumber(a);

		if (teste == false && a != '') {
			return a;
		} else {
			console.log(`\nDigite uma opção válida: `);
			a = prompt(``).toUpperCase();
		}
	}
}

function validaNumber(b) {
	while (true) {
		valido = isNumber(b);

		if (valido === true && b !== 0) {
			return b;
		} else {
			console.log(`\nDigite um valor válido: `);
			b = +prompt();
		}
	}
}

function random(minimo, maximo) {
	let max = Math.floor(maximo);
	let min = Math.ceil(minimo);
	let random = Math.random() * (max - min + 1) + min;
	random = parseInt(random);
	return random;
}

//função de cadastro de jogadores e definição do número de rodadas
function iniciar() {
	console.clear();
	console.log(`\nSerão quantas rodadas?`);
	rodada = validaNumber(+prompt());

	console.clear();
	console.log(`\nSerão quantos jogadores?`);
	players = validaNumber(+prompt());

    //atribuição de objetos na lista
	for (let p = 0; p < players; p++) {
		console.clear();
		console.log(`\nQual o nome do jogador ${p + 1}?\n`);
		jogadores[p] = {
			nome: validaString(prompt(`${p + 1} - `)),
			dadoValor: 0,
			score: 0,
		};
	}
    //confirmação da criação dos objetos
	console.log('\nJogadores Cadastrados com sucesso:\n');
	console.table(jogadores, ['nome']);
	console.clear(prompt(`\nPressione ENTER para continuar\n`));
}

//função que determina quem vence a rodada atual
function partida() {
	for (let i = 0; i < players; i++) {
		console.clear();
		console.log(`\nÉ a vez do jogador ${jogadores[i].nome}\n`);
		prompt(`Pressione ENTER para lançar o dado:`);

		//atribuição de valor a propriedado de cada objeto
		jogadores[i].dadoValor = random(1, 6);
		dados[i] = jogadores[i].dadoValor;
		sleep(1);
		console.log(
			`\nO dado de ${jogadores[i].nome} caiu em ${jogadores[i].dadoValor}\n`,
		);
		sleep(3);
	}

	//capturando o maior valor tirado na rodada
	var resultadoParcial = Math.max(...dados);

	//capturando valores repetidos
	var aux = dados.filter(function (elemento, i) {
		if (dados.indexOf(elemento) != i) {
			repeated.push(elemento);
		}
		return dados.indexOf(elemento) == i;
	});

	//verificando o jogardor que venceu a rodada
	for (const index in jogadores) {
		if (jogadores[index].dadoValor == resultadoParcial) {
			jogadores[index].score += 1;
			console.clear();
			console.log(`\n${jogadores[index].nome} venceu a rodada\n`);
        }
	}

	//verificando se houve empate
	if (repeated[0] == resultadoParcial) {
		console.clear();
		console.log(`\nTivemos um empate\n`);
	}
	console.table(jogadores, [`dadoValor`, `nome`]);
	console.log();
	console.clear(prompt(`Pessione ENTER para continuar`));
}

//função que determina quem venceu mais rodadas
function resultadoGeral() {
    
	for (let jog = 0; jog < players; jog++) {
		pontuacao[jog] = jogadores[jog].score;
	}

	//capturando o maior valor de votórias
	var pontMax = Math.max(...pontuacao);
    
	var aux2 = pontuacao.filter(function (elemento, i) {
		if (pontuacao.indexOf(elemento) != i) {
			repeated.push(elemento);
		}
		return pontuacao.indexOf(elemento) == i;
	});

	//verificando o jogardor que venceu o jogo
	for (const s in jogadores) {
		if (jogadores[s].score == pontMax) {
			console.log(`\nO grande Campeão foi ${jogadores[s].nome}\n`);
		}else{
            jogadores[s].score -=1;
        }
	}

	//verificando se houve empate
	if (repeated[0] == pontMax) {
		console.clear();
		console.log(`\nTivemos um empate\n`);
	}

    //apresentação de resultados
	console.table(jogadores, ['score', 'nome']);
	console.log();
}


//jogo completo
iniciar();

for (let r = 0; r < rodada; r++) {
    repeated = [];
	partida();
}
repeated = [];
resultadoGeral();
