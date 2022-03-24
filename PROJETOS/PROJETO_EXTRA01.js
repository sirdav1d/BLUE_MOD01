console.clear()

var prompt = require('prompt-sync')();
var teste;
let votar;
var encerra = false;
var valido;
let anoNascimento;
const votos = []

const opcoes = {
    "Joao": {
        cod: 1,
        score: 0,
        
    },

    "Clebin": {
        cod: 2,
        score: 0,
      
    },

    "Cleitin": {
        cod: 3,
        score: 0,
        
    },

    "VOTO NULO": {
        cod: 4,
        score: 0,
        
    },

    "VOTO EM BRANCO": {
        cod: 5,
        score: 0,
       
    },
};

function isNumber(str) {
    return !isNaN(parseInt(str))
}

function validaString(a) {
    while (true) {
        
        teste = isNumber(a)

        if (teste == false && a != '') {
            return a

        } else {
            console.log(`\nDigite uma opção válida: `)
            a = prompt(``).toUpperCase()
        }
    }
}

function validaNumber(b) {
    while (true) {
        
        valido = isNumber(b)

        if (valido === true && b !== 0) {
            return b

        } else {
            console.log(`\nDigite um valor válido: `)
            b = +prompt()

        }
    }
}

function autorizaVoto(born) {
    console.clear()
    teste = 2022 - born;
    if (teste < 16) {
        return anoNascimento ='VOTO NEGADO'

    } else if (teste == 16) {
        return anoNascimento = 'VOTO OPCIONAL'

    } else if(teste>16){
        return anoNascimento = 'VOTO OBRIGATÓRIO'
    
    }else{
        born = validaNumber(+prompt())
    }
}

function contabilizaVoto(c) {
    while (true) {
        console.clear()
        if (c < 6 && c > 0) {
            return votos.push(c)            
        } else {
            console.log(`\nPreste atenção! Digite o seu voto (entre 1 e 5): `)
            c = validaNumber(+prompt())
        }
    }
}

function votacao(v) {
    console.clear()
    while (true) {
        console.log(`\nAinda há eleitores? (sim ou nao): `)
        if (v == 'SIM') {
            console.clear()
            return 'SIM'
        } else if (v == 'NAO') {
            console.clear()
            return 'NAO'
        } else {
            console.log(`Digite uma opção válida:`)
            v = validaString(prompt('').toUpperCase())
        }
    }
}

function addVoto (){
for(const v of votos){
    if(v==1){
        opcoes.Joao.score+=1

        }else if(v==2){
            opcoes.Clebin.score+=1

        }else if(v==3){
            opcoes.Cleitin.score+=1

        }else if(v==4){
            opcoes["VOTO NULO"].score+=1

        }else if(v==5){
        opcoes["VOTO EM BRANCO"].score+=1
        }
    }
}

function exibirResultado(){

 let vencedorScore;
const vence=[];
const opcoesChaves = Object.keys(opcoes);
const opcoesValues = Object.values(opcoes);

for(const ov of opcoesValues){
    vence.push(ov.score)
    
}

    vencedorScore = Math.max(...vence)

    var repeated = [];

    var aux = vence.filter(function(elemento, i) {
    if(vence.indexOf(elemento) != i) {
        repeated.push(elemento)

    }
    return vence.indexOf(elemento) == i;
})
    
    if(opcoes.Joao.score == vencedorScore){
    console.log(`\n${opcoesChaves[0]} está eleito`)

}else if(opcoes.Clebin.score == vencedorScore){
    console.log(`\n${opcoesChaves[1]} está eleito`)

}else if(opcoes.Cleitin.score == vencedorScore){
    console.log(`\n${opcoesChaves[2]} está eleito`)

}else if(opcoes["VOTO EM BRANCO"].score == vencedorScore){
    console.log(`\nTivemos muitos ${opcoesChaves[4]}`)

}else if(opcoes["VOTO NULO"].score == vencedorScore){
    console.log(`\nTivemos muitos ${opcoesChaves[3]}`)
}

    if(vencedorScore==repeated[0]){
        console.clear()
        console.log(`\nTivemos um empate`)
    }

console.table(opcoes,['score'])
}

do {
    console.clear()
    console.log(`\nOs candiatos são:\n\nJoão - cód:1\nClébin - cód:2\nCleitin - cód:3\nVoto Branco - cód:4\nVoto Nulo - cód:5`)

    console.log(`\nHá algum eleitor? (sim ou nao): `)
    votar = votacao(validaString(prompt().toUpperCase()))

    if (votar == 'SIM') {
        console.log(`\nQual o seu ano de nascimento?`)
        anoNascimento = autorizaVoto(validaNumber(+prompt()))

        if (anoNascimento == 'VOTO NEGADO') {
            console.log("\nVocê não pode votar. Pressione ENTER para voltar ao menu principal:")
            prompt('')
            
            

        } else if (anoNascimento == `VOTO OPCIONAL`) {
            console.log(`\nDigite o seu voto (entre 1 e 5): `)
           contabilizaVoto(validaNumber(+prompt()))
  
            

        } else if (anoNascimento == `VOTO OBRIGATÓRIO`) {
            console.log(`\nDigite o seu voto (entre 1 e 5): `)
            contabilizaVoto(validaNumber(+prompt()))
        
        }

} else if (votar == 'NAO') {
        encerra = true
}

} while (encerra == false)

addVoto()
exibirResultado()
console.log()



 
