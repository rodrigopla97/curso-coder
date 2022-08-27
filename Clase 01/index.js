var primeraVariable = "mi primera variable";
var segundaVariable = 5;

let terceraVariable = "primera variable con let";
const primeraConstante = 4;
const segundaConstante = 7;
let resultado = primeraConstante + segundaConstante;
// console.log(primeraConstante + segundaConstante);
console.log(resultado);
console.log(primeraVariable + " - " + terceraVariable); //concatena
terceraVariable = 6;
// BLOQUE
{
  var primera = "variable var";
  let segunda = "variable let";
}
let segunda = "variable let";
// console.log(primera);
console.log(segunda);

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// const saludo = "Bienvenido ";
// alert(saludo + nombre + "" + apellido);

// let numeroUno = prompt("Ingrese un numero")
// let numeroDos = prompt("Ingrese segundo numero")
alert(numeroDos + numeroDos); //muestra concatenación
//Se uliliza parseInt para convertirlo a numero
let numeroUno = parseInt(prompt("Ingrese un numero"));
let numeroDos = parseInt(prompt("Ingrese segundo numero"));
alert(numeroDos + numeroDos); // muestra la suma
