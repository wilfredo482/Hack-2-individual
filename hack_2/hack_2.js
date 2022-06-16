/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
 
for(let index=0;index<arr.length-2;index++){
    let objeto=arr[index+1];
    let numero=Object.values(objeto);
    result.push(parseInt(numero));
}

console.log(result);

 
//export result
//module.exports = result;