// ------------ Ejemplo for ------------
// let numeroFinalizacion = parseInt(prompt("Ingresa un numero"));

// for (let i = 0; i <= numeroFinalizacion; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log("Iteracion numero con for" + i);
// }
// -------------------------------------

// Ejemplo while
// let i = 0;
// while (i <= 5) {
//   console.log("Iteracion numero con while", i);
//   i++;
// }
// console.log(i);

// ------------ do...while ------------

// do {
//   console.log("Interacion numero con do...while, i");
//   i++;
// } while (i <= 5);

// Ejemplo do...while
// let numero = parseInt(prompt("Ingresa un numero"));
// let iteracion = 1;

// do {
//   numero = numero + 5;
//   let iteracion = 1;
//   console.log(numero);
//   iteracion++;
// } while (iteracion <= 8);

// ------------------------------------

// -------------- switch --------------

let color = prompt("Ingrese un color");

switch (color) {
  case "azul":
    alert("El color es azul");
    break;
  case "rojo":
    alert("El color es rojo");
    break;
  case "verde":
    alert("El color es verde");
    break;
  default:
    alert("No ingresaste un color esperado");
    break;
}
// ------------------------------------
