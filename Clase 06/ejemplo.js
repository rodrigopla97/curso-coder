let numeros = []
let i = 1
while (i <= 5) {
    let numero = parseInt(prompt('Ingrese un numero'))
    numeros.push(numero)
    i++
}

let numeroPregunta = parseInt(prompt('Que número quieres averiguar?'))

let indice = numeros.indexOf(numeroPregunta)

let existeNumero = numeros.includes(numeroPregunta)

// if (indice !== -1) {
//     alert(`El número ingresado se encuentra en la posición ${indice}`)
// } else {
//     alert(`El número ingresado no está en el array`)
// }

if (existeNumero) {
    alert(`El número ingresado se encuentra en la posición ${indice}`)
} else {
    alert(`El número ingresado no está en el array`)
}