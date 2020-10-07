const funcs = [];   // array vazio

for (let r = 0; r < 10; r++){
      funcs.push(()=>{              //Adicionando no array atravez do .push()
           console.log(r);          //Utilizando a função " arrowfunction."
      });
};
funcs[6]()
console.log(funcs.length)  // LENGTH ,pergunta quantos elementos ha dentro do array





const value = [2,3,6,8,10,15];

for (let r = 0; r < value.length; r++){
      console.log(`a chave ${r} recebe o elemento ${value[r]}`)
};


/***************Armazenando valores no Array através da Function ************** */

const cadastro = [];

const info = (name,lastname,age,city) =>{
    
   return cadastro.push(name,lastname,age,city);
    
};
info("Lucas","Cavalcante de Rezende", "29","Caldas Novas" );

console.log(cadastro);

/*********Atribuindo Valores no ARRAY manualmente */


const person = ['name', 'height', 'city', 'age'];
name = ['Lucas'];
height = [1.84];
city = ['Caldas Novas'];
age = [29];


    if ( age < 10){
      console.log( name + 'você é uma crianca');

    } else if ( age >= 10 && age < 16 ){
        console.log( name + 'você é um adolecente');

    } else if ( age >= 17 && age <= 50) {
        console.log(name + ' você é adulto') ;

    } else {
        console.log(name + 'você é idoso(a)');
    }
console.log(` Olá ${name},sua idade é ${age}, altura ${height}m, você mora em ${city}`);

/************************************************ */

const arraymethods = ['Lucas','Larissa','Annabelle'];

console.log(arraymethods[2])

/******percorendo um array com for****** */

const names = ['name:Lucas','name:Larissa','name:Annabelle'];

for (let n = 0; n < names.length; n++){
    console.log(`${n} = ${names[n]}`)
};

/******************************************* */
//criando uma função dentro do array

const name = [(name1)=>{return name1}];
console.log(name[0]('Lucas, Larissa, AnnaBelle'));