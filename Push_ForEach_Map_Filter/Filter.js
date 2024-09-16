const tabelas = [
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
    age: 45,
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
let tabelasRes = (tabelas) => {
    let pessoaMaiorQue25 = tabelas.filter(tabelas => tabelas.age > 25);
console.log(pessoaMaiorQue25)
}
   
tabelasRes(tabelas)
