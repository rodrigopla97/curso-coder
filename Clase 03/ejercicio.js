//ejercicio for

// let numero = parseInt(prompt("Ingrese un numero"));
// let resultadoSuma = 0;

// for (let i = 0; i <= numero; i++) {
//   resultadoSuma = resultadoSuma + i;
//   console.log(i, resultadoSuma);
// }

//ejercicio for 2

let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese segundo numero"));

if (numero1 < numero2) {
  for (let i = numero1; i <= numero2; i++) {
    console.log(i);
  }
} else if (numero1 > numero2) {
  for (let i = numero1; i >= numero2; i--) {
    console.log(i);
  }
} else {
  alert("Los numeros ingresados son iguales");
}
