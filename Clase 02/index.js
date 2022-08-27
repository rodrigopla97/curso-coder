var nombre = "Rodrigo";
let apellido = "Placeres";
// const edad = 25;
let edad = 25;
apellido = "Pla";
console.log(apellido);
// let edadUsuario = parseInt(prompt("Ingrese su edad"));
// alert("Bienvenido cliente, tienes " +edadUsuario " años de edad");

// alert(edad === edadUsuario);

// if (edad === edadUsuario) {
//   alert("Los dos tienen la misma edad");
// }

// let edadUsuario = parseInt(prompt("Ingrese su edad"));
// if (apellido === apellidoUsuario) {
//   edad = 33;
// } else {
//   edad = 19;
// }
// alert("Tu edad es: ", +edad);

// let edadUsuario = parseInt(prompt("Ingrese su edad"));
// if (edadUsuario < 18) {
//   alert("Eres mayor de edad");
// } else if (edadUsuario > 60) {
//   alert("Eres de la tercera edad");
// } else {
//   alert("Tienes entre 18 y 60 años");
// }

let apellidoUsuario = prompt("Ingrese su apellido");
let edadUsuario = parseInt(prompt("Ingrese su edad"));
let profesion = "Médico";

if (apellido === apellidoUsuario) {
  profesion = "Ingeniero";
}

if (edad === edadUsuario) {
  nombre = "Juan";
}
alert("Hola " + nombre + " tu profesion es: " + profesion);
