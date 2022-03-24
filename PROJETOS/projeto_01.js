/** @format **/

console.clear();
console.log();

var prompt = require('prompt-sync')();

var newgame = '';

do {

	var sucesso = [];
	let index = 0;
	
	const perguntas = [
		`Aerin ganhou experiência e poder sobrevivendo na Floresta Oculta? `,
		`Aerin se junta a um grupo de elfos remanescentes, liderados por Rohana, Galadriel e Idrill? `,
		`Aerin, após vencer inúmeras batalhas para sobreviver, se alia a membros da corte simpatizante dos elfos? `,
		`Aerin consegue sua vingança e destrona George I, o usurpador dando um fim a sua curta dinastia? `,
		`Aerin consegue se reestabelecer com uma nova vila, e um novo ciclo de paz entre humanos e elfos? `,
	];

	console.clear();
	console.log();

	console.log(
		`Essa é a história de Aerin, o Jovem elfo guerreiro. Nosso herói cresceu em uma pequena vila
que fica entre a Floresta Oculta e o Império de Constant. Como filho do chefe, cujo nome era Callen,
foi ensinado a lutar e a caçar para ajudar seu povo a sobeviver.
Sabe-se que há anos os elfos eram expulsos de suas terras pelos humanos,
porém havia uma mistura de paz e ressentimento no ar, pois nos últimos 20 anos nenhuma grande guerra acontecia naquelas terras.\n`
	);

	prompt(`Aperte ENTER para continuar: `);
	console.clear();

	console.log(`
Aerin também se destacava pela sua maestria com magia. Apesar de seus irmãos nascerem com essa aptidão,
ele conseguia surpreender a todos pela sua criatividade e experiências com novos feitiços. 
Sua mãe Anna, era a principal sacerdotisa da vila e ensinava aos jovens como manipular a magia elemental e a magia de cura.\n`);

	prompt(`Aperte ENTER para continuar: `);
	console.clear();

	console.log(`
Após a morte do Imperador Andreas III de Constant, houve um golpe de estado dos oficiais de alto escalão,
movidos pelo preconceito e ódio aos elfos. Era o fim da paz e o início da história de Aerin, o elfo guerreiro.
Um ano após o golpe, o Império de Constant envia tropas para a Floresta Oculta,
a fim de exterminar as poucas centenas de elfos que ali viviam. 
A sacerdotisa Anna, mãe de Aerin, através de seu dom de clarividência, pressentiu que o mal estava próximo
e enviou seu filho para longe, dias antes do exército do Império chegar.\n`);

	prompt(`Aperte ENTER para continuar: `);
	console.clear();

	console.log(`
Quando Aerin retorna, após uma semana de treino com magia em um vilarejo a oeste de sua casa,
ele encontra uma cena de desruição e morte, com alguns poucos soldados saqueando as casas
e os corpos dos seus irmãos elfos, que apesar de lutarem bravamente, foram dizimados pelo exército de 5 mil
homens do império. Ele se vinga dos, aproximadamente vinte soldados, armados com espadas e escudos,
como se estivesse caçando para o jantar, agia como um predador, até não sobrar nenhum humano num raio de dois kilômetros.
Porém, acaba desmaiando por ter usado muita magia. Ao acordar, nosso herói percebe que está sozinho e começa sua jornada
em busca de PODER e VINGANÇA contra o novo Imperador, George I da dinastia Maximillian, também cohecido como "O usurpador".

 - Responda apenas sim ou nao, para seguir a jornada:`);

	console.log();

	for (i = 0; i < perguntas.length; ) {
		sucesso[i] = prompt(perguntas[i]);
		console.clear();
		console.log();
		if (sucesso[i] == 'sim') {
			i++;
		} else if (sucesso[i] == 'nao') {
			i++;
		} else {
			console.log(`Digite apenas sim ou nao: `);
			console.log();
		}
	}

	console.clear();
	
	for (const success of sucesso) {
		if (success == 'sim') {
			index++;
		}
	}

	console.clear();
	console.log();

	console.log(
		`Chegamos ao final da jornada e as suas decisões guiaram nosso herói.\n`
	);

	prompt(`Aperte ENTER para descobrir o desfecho: `);

	const encerra = [
		`Aerin, apesar de seu imenso poder, é capturado e condenado a morte 
enquanto tentava invadir o Império sozinho.`,
		`Aerin desistiu de sua vingança e tenta sobreviver nos arredores da Floresta Oculta 
enquanto é caçado pelo Imperador George I Maximillian.`,
		`Aerin desistiu de sua vingança e tenta sobreviver nos arredores da Floresta Oculta 
enquanto é caçado pelo Imperador George I Maximillian.`,
		`Aerim encontrou o amor e desistiu de sua vingança, utilizando um feitiço de disfarce, 
ele troca o seu nome para Arthur e vive uma vida tranquila, apesar frustrada. Conhecido como o camponês 
de cabelos prateados, ele casa com uma humana chamada Laura e geram 3 filhos de sangue híbrido.`,
		`Aerin conquistou suas terras de volta, junto com o respeito e o amor de todo o povo
após libertá-los do cruel Imperador George I.
Porém, ainda sofre ao lembrar dos companheiros mortos em batalha.`,
		`Aerin conquistou tudo o que pretendia, seu poder e inteligência são admirados por todos.
Os elfos migravam de todas as partes do mundo, tornando a Floresta Oculta uma potência cultural e militar.
Nosso elfo guerreiro, encontrou o amor em sua parceira de batalhas Rohana,
criando assim, seu próprio ciclo de paz e felicidade.`,
	];
	console.clear();
	console.log();

	console.log(encerra[index]);

	console.log();

	newgame = prompt(
		'Quer jogar de novo? Responda com o nome do personagem principal: '
	);
	if (newgame == `AERIN` || newgame == `aerin` || newgame == `Aerin`) {
		newgame = `Aerin`;
		console.clear();
		console.log();
	} else {
		console.clear();
		newgame = ``;
	}
} while (newgame == `Aerin`);

console.clear();

console.log(
	`\nEspero que tenha se divertido, Aerin te aguarda para uma nova aventura!\n`);
