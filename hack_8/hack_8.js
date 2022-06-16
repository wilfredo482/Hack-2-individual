/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];
let claves=Object.keys(foo);
let valores=Object.values(foo);
let par=[];
let par2=[];
let par3=[];

for(let i=0;i<claves.length;i++){
    if(i==0){
        par.push(claves[i],valores[i]);
        result.push(par);
    }if(i==1){
        par2.push(claves[i],valores[i]);
        result.push(par2);
    }if(i==2){
        par3.push(claves[i],valores[i]);
        result.push(par3);
    }
}

console.log(result);

//export result
module.exports = result; 
notShow("HH")