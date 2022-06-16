/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,2,3,4,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
 
let index=0;

while(index<arr.length){
    let objeto=arr[index];
    let numero=Object.values(objeto);
    result.push(parseInt(numero));
    index++;
}

console.log(result);
 
//export result
module.exports = result;