// Objetos

let primerObjeto = {
  nombre: "Rodrigo",
  apellido: "Placeres",
  edad: 25,
};

let animal1 = {
  tipo: "perro",
  nombre: "Lola",
  edad: 12,
  raza: "Mestiza",
};
const animal2 = {
  tipo: "perro",
  nombre: "Rocco",
  edad: 2,
  raza: "Golden",
};
const animal3 = {
  tipo: "gato",
  nombre: "Luli",
  edad: 6,
  raza: "Mestiza",
};

console.log(animal1.nombre); // Lola
console.log(animal1["nombre"]); // Lola

console.log(
  `Este ${animal1.tipo} vive con ${primerObjeto.nombre} y se llama ${animal1.nombre}`
); // Lola

// animal1.vivo = true;
// animal1.duenio = Victor;

// si por ejemplo necesito crear 10 objetos de animal y no crear 10 objetos

function Animal(tipo, nombre, edad, raza) {
  this.tipo = tipo;
  this.nombre = nombre;
  this.edad = edad;
  this.raza = raza;
}

const animal4 = new Animal("gato", "Tuki", 4, "Siamesa");

// function Usuario(nombre, email, password) {
//   this.nombre = nombre;
//   this.email = email;
//   this.password = password;
// }

// const usuario1 = new Usuario("Rodrigo", "mailtest@gmail.com", "12345");
// const usuario2 = new Usuario("Saul", null, "abcde");

// function tieneEmail(usuario) {
//   if (usuario.email) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(tieneEmail(usuario2));

function cambiarPass(ususario, nuevaPass) {
  ususario.password = nuevaPass;
}

cambiarPass(usuario1, "hola");
console.log(usuario1);

// Actualmente se declaran como clases
class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  tieneEmail() {
    if (this.email) {
      return true;
    } else {
      return false;
    }
  }

  cambiarPass(nuevaPass) {
    this.password = nuevaPass;
  }
}
