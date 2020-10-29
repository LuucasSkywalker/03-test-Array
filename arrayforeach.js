//RASCULHOS FOREACH
/*o método forEach() permite executar uma função para cada item de um array.
uma função forEach esperá um parâmetro obrigatório, ou sejá quando usar um
forEach deve ser passar pelo menos um parâmetro dentro forEach(parâmetro) */

const school = ['Nivo das Neves','Mather Izabel','Supletivo'] //array 

function schoolDistrict (name, indice ){  /*função nomeada schollDistrict com os
                                          os parâmetros do array, [name,indice]
                                          */
    console.log(`${indice}, ${name}`)
}
    school.forEach(schoolDistrict)       /* O método forEach() permite executar uma função 
                                         para cada item de um array. Veja sobre forEach
                                         na paste Estudos Function */


//---------------------------------------------------------------------**
/*FUNÇÕES CALLBACK */
//CALLBACK É UMA FUNÇÃO QUE IRÁ RETORNAR QUANDO UM EVENTO ACONTECER

const school = ['Nivo das Neves','Mather Izabel','Supletivo'] //array 

function schoolDistrict (name, indice ){  /*função nomeada schollDistrict com os
                                          os parâmetros do array, [name,indice]
                                          */
    console.log(`${indice}, ${name}`)
}
    school.forEach(schoolDistrict)       /* O método forEach() permite executar uma função 
                                         para cada item de um array. Veja sobre forEach
                                         na paste Estudos Function */

//---------------------------------------------------------------------**
const listaApro = [{name:'Lucas', Note: 9.6},
                   {name:'Larissa', Note: 7.2},
                   {name:'Cleyri', Note: 5.6},
                   {name:'Annabelle', Note: 5.1}]


function aprovados (name,indice){
 console.log(indice, name)
 
}
listaApro.forEach(aprovados);

//---------------------------------------------------------------------**
//FAZENDO UM FOREACH USANDO ARROW FUNCTION
const listaApro1 = [{name:'Lucas', Note: 9.6},
                   {name:'Larissa', Note: 7.2},
                   {name:'Cleyri', Note: 5.6},
                   {name:'Annabelle', Note: 5.1}]


listaApro1.forEach((aprovados, indice)=> {  /* Usando um forEach numa função arrow function
                                            não precisa declarar um nome, poís o forEach
                                            precisa de um parâmetro aleatório, então deixa
                                            um que condiz com o código a ser execultado */
console.log(indice, aprovados)
});



/*pegando valores e armazenando dentro de um array vazio somente os aprovados
usando o forEach e o if para dizer a condição que irá validar*/
const listaApro1 = [{name:'Lucas', Note: 9.6},
                   {name:'Larissa', Note: 7.2},
                   {name:'Cleyri', Note: 5.6},
                   {name:'Annabelle', Note: 5.1}]

const list = []
listaApro1.forEach((aprovados, indice, nota)=> {
  if (aprovados.Note >= 7){
      list.push(aprovados)
  }
});
console.log(list.length)



cores = ["Verde", "Amarelo", "Azul", "Branco"];

cores.forEach((collor, indice) =>{
  console.log(indice,collor)
});

//---------------------------------------------------------------------**
//Valor retornado: 0 2 4 6 8 10 12 14 16 18 20
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2);

//---------------------------------------------------------------------**
//Valor retornado: 55
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item) {
    total += item;
}

numeros.forEach(somar);
console.log(total);

//---------------------------------------------------------------------**
//Array retornado: ["Fiat", "Ford"]
marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);

//---------------------------------------------------------------------**
//Array retornado: ["ALBERTO", "ALEX", "SANDRO", "ROBERTA"]
nomes = ["Alberto", "Alex", "Sandro", "Roberta"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);

//---------------------------------------------------------------------**.
//Valor retornado: Ana Roberta
nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
tamanhoNome = 0;
nome = "";

function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}

nomes.forEach(maiorNome);
console.log(nome);