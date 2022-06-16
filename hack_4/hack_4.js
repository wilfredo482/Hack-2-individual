/**
* agregar a los valores del array los tokens:
* {f:6} y {g:7}
* dentro del array result 
* 
* 
* output => [{g:7},{a:1},{b:2},{c:3},{d:4},{e:5},{f:6}]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let tokenF = {f:6};
let tokenG = {g:7};
let result = [];
 
for(let iterador=0;iterador<arr.length;iterador++){
    let objeto=arr[iterador];
    result.push(objeto);
}

result.push(tokenF);
result.unshift(tokenG);
console.log(result);
 
//export result
module.exports = result; 