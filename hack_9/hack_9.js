/**
* en result, reflejar con un objeto literal la integración
* de los 2 objetos
*
* 
* output => {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};

let bar = {
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}
let result={};

let claves1=Object.keys(foo);
let valores1=Object.values(foo);

for(let i=0;i<claves1.length;i++){
    let valor=valores1[i];
    let clave=claves1[i];

    result[clave]=valor;
}

let claves2=Object.keys(bar);
let valores2=Object.values(bar);

for(let i=0;i<claves2.length;i++){
    let valor2=valores2[i];
    let clave2=claves2[i];

    result[clave2]=valor2;
}

console.log(result);




//export result
module.exports = result; 