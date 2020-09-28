const funcs = [];   // array vazio

for (let r = 0; r < 10; r++){
      funcs.push(()=>{              //Adicionando no array atravez do .push()
           console.log(r);          //Utilizando a função através do arrowfunction.
      });

;}

funcs[5]();
funcs[2]();

/***************Armazenando valores no Array ************** */

const cadastro = [];

const info = (name,lastname,age,city) =>{
    
   return cadastro.push(
    name,
    lastname,
    age,
    city);
    
};
info("Lucas","Cavalcante de Rezende", "29","Caldas Novas" );

console.log(cadastro);
