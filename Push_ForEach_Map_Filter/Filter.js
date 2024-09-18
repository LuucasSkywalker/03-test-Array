
/*A função filter() em JavaScript é usada para criar um novo array contendo todos os 
elementos do array original que satisfazem uma condição definida por uma função de 
callback. Essa função percorre cada elemento do array original e retorna apenas os 
elementos que atendem à condição especificada.*/

const tabelasCliente = [
    {
    id: 1,
    name: 'Lucas',
    age: 33,
    city: 'Caldas Novas',
    uf: 'GO'
}, 
   
   {
    id: 2,
    name: 'paulo',
    age: 23,
    city: 'Cuibá',
    uf: 'MS'
   },
   
   {
    id: 3,
    name: 'Maria',
    age: 32,
    city: 'Morrinhos',
    uf: 'GO'
   },

   {
    id: 4,
    name: 'Jôao',
    age: 24,
    city: 'Duque de Caxias',
    uf: 'RJ'
   },

   {   
    id: 5,
    name: 'Larissa',
    age: 27,
    city: 'Caldas Novas',
    uf: 'GO'
   },


]

tabelasCliente.push({
    id: 6,
    name: 'Ellie',
    age: 15,
    city: 'Caldas Novas',
    uf: 'GO'
});


const listaCity = tabelasCliente.filter(item => {   
    // Filtro personalizado: retornar itens com idade maior que 25
    return item.city == 'Caldas Novas';
    // return item.age > 20,

});
console.log(listaCity) 

/*O método filter() está sendo aplicado ao array "tabelasCliente". Ele percorre 
todos os elementos do array e aplica a função de callback a cada um.
Callback do filter():
Para cada elemento do array tabelasCliente (representado por item), a função de 
callback compara a propriedade "city" desse item com a string 'Caldas Novas'.
Se a condição item.city == 'Caldas Novas' for true, o elemento será incluído no novo
array "listaCity". Se for false, o elemento será ignorado. Resultado:

" OBS: o (ITEM =>) no código é apenas um nome de variável que representa o elemento 
atual do array que está sendo processado pelo método filter(). podendo usar qualquer
nome "

O filter() cria e retorna um novo array (listaCity) que contém apenas os objetos do 
array original (tabelasCliente) cuja propriedade city seja exatamente 'Caldas Novas'.*/



// ----------------------------------------------------------------------------

// Exemplo com Fluxo de filter()
const numeros = [1, 2, 3, 4, 5, 6];

// Queremos filtrar apenas os números pares
const numerosPares = numeros.filter((numero => {
    return numero % 2 === 0; // Se o número for par, retorna true
}));

console.log(numerosPares); // [2, 4, 6]
/* Detalhamento do Fluxo:
Array Original:

O array numeros = [1, 2, 3, 4, 5, 6].
Iteração com filter():

O filter() começa a iterar sobre cada item do array original:
1º elemento: 1 → 1 % 2 === 0 retorna false (não entra no novo array).
2º elemento: 2 → 2 % 2 === 0 retorna true (entra no novo array).
3º elemento: 3 → 3 % 2 === 0 retorna false (não entra no novo array).
4º elemento: 4 → 4 % 2 === 0 retorna true (entra no novo array).
5º elemento: 5 → 5 % 2 === 0 retorna false (não entra no novo array).
6º elemento: 6 → 6 % 2 === 0 retorna true (entra no novo array).
Novo Array:

O novo array numerosPares será [2, 4, 6], contendo apenas os números que passaram 
no teste.*/
