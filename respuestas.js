/* 
crear una funcion que recorra un array de numeros
los sume y me devuelva el resultado de la suma
[1, 3, 5, 6, 12, 42, 13, 411]
*/

const sumaElementos = array => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i]
  }
  return suma;
}
console.log(sumaElementos([1, 3, 5, 6, 12, 42, 13, 411]))

/*
crear una funcion que vaya contando desde 0 hasta el numero pedido por parametro 
y vaya consologueando el contador
*/

const contador = num => {
  let contador = 0
  for (let i = 0; i < num; i++) {
    contador++
    console.log(contador, "contador");
  }
}

contador(5)

/*
crear una funcion que reciba un array de nombres
te consologue la cantidad de nombre
te consologue la cantidad de caracteres de cada nombre
y te devuelva la suma de los caracteres de todos los nombres

["pepe", "samuel", "charlie", "sans pedro"]
*/

const contadorNombres = array => {

  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].length)
    suma = suma + array[i].length
  }
  console.log(array.length);
  return suma;
}

console.log(contadorNombres(["pepe", "samuel", "charlie", "sans pedro"]));