/*A função push() em JavaScript é usada para adicionar um ou mais elementos ao final
de um array. Ela modifica o array original e retorna o novo comprimento do array 
após a adição dos novos elementos.*/

//Sintaxe:

//array.push(elemento1, elemento2, elemento3)
//array: O array no qual você deseja adicionar elementos.
//(elemento1, elemento2, elemento3) 
/*Os elementos que você deseja adicionar ao array. Você pode adicionar um ou mais 
elementos de uma vez.

Adicionando um único elemento a um array*/

let frutas = ["maçã", "banana"];
let novaQuantidade = frutas.push("laranja");

console.log(frutas); // Output: ["maçã", "banana", "laranja"]
console.log(novaQuantidade); // Output: 3
/*Aqui, a string "laranja" é adicionada ao final do array frutas.
A função push() retorna o novo comprimento do array, que neste caso é 3.


------------------------------------------------------ . . .
Adicionando múltiplos elementos a um array*/

let animais = ["gato", "cachorro"];
animais.push("coelho", "pássaro");

console.log(animais); // Output: ["gato", "cachorro", "coelho", "pássaro"]
/*Neste caso, tanto "coelho" quanto "pássaro" são adicionados ao final do array 
animais. O novo comprimento do array é 4.


--------------------------------------------------------. . .
 Usando push() com diferentes tipos de dados
O push() pode adicionar qualquer tipo de dado a um array, como strings, números, 
objetos ou até outros arrays.*/

let mix = [1, 2, "texto"];
mix.push({ nome: "João" }, [3, 4]);
console.log(mix); // Output: [1, 2, "texto", { nome: "João" }, [3, 4]]
/*Aqui, adicionamos um objeto { nome: "João" } e um array [3, 4] ao array mix.
O array agora contém elementos de tipos diferentes.


-------ADICIONAR ELEMENTOS ATRAVÉS DO FOR PUSH-------- . . .


 Usando push() dentro de um loop
O push() é comumente usado dentro de loops para adicionar 
elementos dinamicamente a um array.*/
let numeros = [];
for (let i = 1; i <= 5; i++) {
    numeros.push(i);
}
console.log(numeros); // Output: [1, 2, 3, 4, 5]
/*Aqui estamos utilizando um loop for para adicionar os números de 1 a 5 ao array 
numeros. A cada iteração, o número atual é adicionado ao final do array.

------------------------------------------------------- . . .
Usando push() com arrays multidimensionais
Você também pode adicionar arrays dentro de outros arrays.*/
let matriz = [[1, 2], [3, 4]];
matriz.push([5, 6]);

console.log(matriz); // Output: [[1, 2], [3, 4], [5, 6]]
/* Aqui, adicionamos o array [5, 6] ao array matriz, que já contém outros arrays.

------------------------------------------------------- . . .
 Manipulando o retorno de push()
Como o push() retorna o novo comprimento do array, você pode usá-lo para rastrear 
o tamanho após cada adição.*/
let lista = ["item1", "item2"];
let tamanho = lista.push("item3", "item4");

console.log(lista);   // Output: ["item1", "item2", "item3", "item4"]
console.log(tamanho); // Output: 4
/*Adicionamos dois elementos ao array e usamos o valor retornado por push() para 
verificar o novo tamanho do array.

---------------------------------------------------- . . .
Exemplo 7: Usando push() com um array vazio
Adicionar elementos a um array que começa vazio.*/

let tarefas = [];
tarefas.push("Lavar a louça");
tarefas.push("Estudar JavaScript");

console.log(tarefas); // Output: ["Lavar a louça", "Estudar JavaScript"]
/*Aqui, o array tarefas começa vazio e vai sendo preenchido à medida que novos 
elementos são adicionados.

---------NOTA-------------------------------- . . .
Resumo:
A função push() é muito útil para adicionar novos elementos ao final de um array.
Ela modifica o array original e retorna o novo comprimento do array.
Pode ser usada para adicionar um ou mais elementos, de qualquer tipo, ao array. */


const valores = ["Lucas","Larissa","Annabelle","Torresmo","Peppa"];
// Uma const que armazena um array definida como "valores"

valores.push("Cleyri"); //adicionando um valor manualmente para dentro do array.push

// ou então assim:

valores[6] = "Petronio";


//console.log(valores.length);

console.log (valores[3]); // consultando o tamanho do array, que é 7 .

const receber = ["10","20","50"]

console.log(receber[1])


