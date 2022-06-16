/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* en donde se representan la clave y el valor
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

let variable=result.role.toUpperCase();
let variable2=result.name.slice(0,1).toUpperCase()+result.name.slice(1,3);

result.role=variable;
result.name=variable2;

console.log(result);



 
//export result
module.exports = result; 