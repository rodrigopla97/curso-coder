function sumar() {
  const numero1 = parseInt(prompt("Ingrese un numero"));
  const numero2 = parseInt(prompt("Ingrese un numero"));

  const resultado = numero1 + numero2;
  alert("El resultado es " + resultado);
}

// sumar(); //Llamo a la función

function restar(numero1, numero2) {
  const restando = numero1 - numero2;
  return restando;
  //   alert("El resultado es " + resultado);
}

const resultadoResta = restar(15, 7);

function esVocal(letra) {
  const letraMin = letra.toLowerCase();
  if (
    letraMin === "a" ||
    letraMin === "e" ||
    letraMin === "i" ||
    letraMin === "o" ||
    letraMin === "u"
  ) {
    return "Es una vocal";
  } else {
    return "No es una vocal";
  }
}

console.log(esVocal("A"));

// arrow function

let exponente = function (num, exponenteParams) {
  return num ** exponenteParams;
};

let exponenteArrow = (num, exponenteParams) => {
  return num ** exponenteParams;
};

// Otra forma de declararla en una linea
let exponenteArrow2 = (num, exponenteParams) => num ** exponenteParams;

console.log(exponente(6, 2));
console.log(exponenteArrow(6, 3));
