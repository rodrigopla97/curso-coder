let primerArray = [true, 2, 'hi', [1, 2, 3], 'hola']
console.log("primerArray: ", primerArray)

const segundoArray = [2, 3, 4, 5]
console.log("segundoArray: ", segundoArray)

console.log("primerArray.length: ", primerArray.length)
console.log("primerArray[2]: ", primerArray[0])
console.log("primerArray[2]: ", primerArray[1])
console.log("primerArray[2]: ", primerArray[2])
console.log("primerArray[2]: ", primerArray[3])
console.log("primerArray[2]: ", primerArray[4])

for (let i = 0; i < primerArray.length; i++) {
    console.log(`Primero: Array nro ${i} ${primerArray[i]}`)
}
for (let i = 0; i < segundoArray.length; i++) {
    console.log(`Segundo: Array nro ${i} ${segundoArray[i]}`)
}

// primerArray.push("Elemento agregado al final")
// primerArray.unshift("Elemento agregado al principio")

// segundoArray.pop()
// segundoArray.shift()

// console.log(segundoArray)

let animales = ['gato', 'perro', 'serpiente', 'caballo', 'raton']

const animalesEliminados = animales.splice(1, 1)

let saludar = ['hola', 'como estas', '?']
console.log(saludar.join(' '))

console.log(primerArray.concat(segundoArray))
