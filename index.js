// console.log(document)
// console.log(document.body)

// document.getElementById('titulo')
// console.log(document.getElementById('titulo'))

// const titulo1 = document.getElementById('titulo')
// console.log(titulo1)

// const titulo2 = document.getElementsByTagName('h1')
// console.log(titulo2)

// const titulo3 = document.getElementsByClassName('clase-titulo')
// console.log(titulo3)

// const tituloQueryClass = document.querySelector('.clase-titulo')
// const tituloQueryClass = document.querySelectorAll('.clase-titulo')
// console.log(tituloQueryClass)
// // querySelectorAll muestra todos los que tengan la clase "clase-titulo"
// // querySelector muestra el primero que tengan la clase "clase-titulo"

// const tituloQueryId = document.querySelector('#titulo')
// console.log(tituloQueryId)



// const tituloQueryEtiqueta = document.querySelector('h1')
// console.log(tituloQueryEtiqueta)

// -----------------------------------------------

// let titulo1 = document.getElementById('titulo')

// titulo1.innerText = 'DOM MODIFICADO'
// titulo1.innerHTML = '<h4>DOOOOM</h4>'

// -----------------------------------------------

// -----------------------------------------------

const tituloQueryId = document.querySelectorAll('h1')

for (const elemento of tituloQueryId) {
    elemento.innerText = 'Cambiado'
}

// -----------------------------------------------

const titulo1 = document.getElementById('titulo')
const parrafo = document.createElement('p')
parrafo.innerText = 'Parrafo creado desde javascript'

const divPrueba = document.getElementById('div')
divPrueba.append(parrafo) // agrega un parrafo
titulo1.remove() // borra titulo1