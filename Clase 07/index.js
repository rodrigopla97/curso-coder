// function suma(num1, num2) {
//     return num1 + num2
// }

// // caso 1
// function ordenSuperior1() {
//     return function () {

//     }
// }

// // caso 2
// function ordenSuperior2() {
//     return
// }

// // ejemplo caso 1
// function elevar(n) {
//     return function (n) {
//         return m ** n
//     }

// }

// let cuadrado = elevar(2)
// let cubo = elevar(3)
// let cuatro = elevar(4)

// console.log(cuadrado(7)) // 7 ** 2 --> muestra 49
// console.log(cuadrado(3)) // 3 ** 2 --> muestra 9

// // ejemplo caso 2
// function suma(num1, num2) {
//     return num1 + num2
// }

// function resta(num1, num2) {
//     return num1 - num2
// }

// function operacionMatematica(n1, n2, fn) {
//     return fn(n1, n2)
// }

// console.log(operacionMatematica(5, 2, suma))
// console.log(operacionMatematica(5, 2, resta))

const arregloNum = [2, 4, 6, 43, 2, 6, 78, 4, 3, 78, 3, 7, 8]

const arregloObjeto = [
    { nombre: 'Carlos', edad: 24, curso: 'JS8' },
    { nombre: 'Juan', edad: 22, curso: 'JS10' },
    { nombre: 'Pepe', edad: 32, curso: 'JS7' },
    { nombre: 'Andres', edad: 36, curso: 'JS10' },
    { nombre: 'Laura', edad: 18, curso: 'JS12' },
]

// for (let i = 0; i < arregloNum.length; i++) {
//     console.log(arregloNum[i])
// }

// arregloObjeto.forEach(obj=>console.log(obj.edad))

// const elementoBuscado = arregloObjeto.find(obj => obj.nombre === 'Rodrigo')
// // console.log(elementoBuscado)
// if (elementoBuscado) {
//     console.log('elemento encontrado')
// } else {
//     console.log('elemento no existe')
// }

// const objetosFiltrados = arregloObjeto.filter(obj => obj.nombre !== 'Juan')
// console.log(objetosFiltrados) // muestra los elementos donde el nombre no sea Juan

// const objetosFiltrados = arregloObjeto.some(obj => obj.nombre !== 'Juan')
// console.log(objetosFiltrados) // true o false con la condicion de objeto

// const objetosFiltrados = arregloObjeto.map(obj => obj.nombre)
// console.log(objetosFiltrados) // solo muestra los nombres

const resultado = arregloObjeto.reduce((elem1, elem2) => (elem1 + elem2.edad), 0)
console.log(resultado) // suma los elementos

console.log(arregloNum.sort((num1, num2) => num1 - num2))
console.log(arregloObjeto.sort((obj1, obj2) => obj1.edad - obj2.edad)) // ordena por edad

