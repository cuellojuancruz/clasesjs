// "hola"
// 12312
// false
// true
// obj = {obj: ""}
// array = [1, 2, "adsd"]
// null
// undefined

// let array = [1, 2, 3, 4, 5]
// ``
// array.push(1);
// console.log(array);


// let str = "pepe "
// console.log(str.length)

// for (let index = 0; index < array.length; index++) {
//   // console.log(array[index]);
  
// }

// let flag = 0;
// while (flag < array.length) {
//   console.log("todavia no llegue");
//   flag++
// }  

// function resta (a, b) {
//   console.log(a - b);
//   return a - b
// }

// const resta = (a, b) => a - b;


// let final = resta(2, 1);
// console.log(final);



/* 
crear una funcion que recorrar el array y
multiplique x 2 sus elementos
y devuelva un nuevo array con los resultados
*/

const myArray = [1, 2, 3, 4, 5];
const basija = [2, 4];

// function resta (myArray, multi) {
//     basija.push(myArray[0] * multi, myArray[1] * multi, myArray[2] * multi, myArray[3] * multi, myArray[4] * multi);
//     return basija;
//   }

function multiplicacion (array){
  for (let i = 0; i < array.length; i++) {
    basija.push(array[2] * 2)
  }
  return basija; 
}

console.log(multiplicacion(myArray));


//////////////////////////EJERCICIOS//////////////////////////////////
/* 
crear una funcion que recorra un array de numeros
los sume y me devuelva el resultado de la suma
[1, 3, 5, 6, 12, 42, 13, 411]
*/


/*
crear una funcion que vaya contando desde 0 hasta el numero pedido por parametro 
*/

/*
crear una funcion que reciba un array de nombres
te consologue la cantidad de nombre
te consologue la cantidad de caracteres de cada nombre
y te devuelva la suma de los caracteres de todos los nombres

["pepe", "samuel", "charlie", "sans pedro"]
*/