localStorage.setItem('name', 'José')
localStorage.setItem('lastname', 'Perez')
localStorage.setItem('email', 'pepe@mail.com')
localStorage.setItem('edad', 33)
// localStorage.setItem('name', 'Juan')
localStorage.setItem('esCasado', true)

const nombre = localStorage.getItem('name')
const edad = localStorage.getItem('edad')

// console.log(edad, nombre)
// console.log(localStorage.length)
// console.log(localStorage)

localStorage.clear()
// localStorage.removeItem('esCasado')

// console.log(localStorage.key(0))
// console.log(localStorage.key(1))
// console.log(localStorage.key(2))
// console.log(localStorage.key(3))

for (let i = 0; i < localStorage.length; i++) {
    const keyStorage = localStorage.key(i)
    console.log("keyStorage", i, keyStorage)
    console.log("localStorage.getItem(keyStorage)", i, localStorage.getItem(keyStorage))
}

const informacionPersonal = {
    name: 'Jose',
    lastname: 'Mendoza',
    email: 'pepe@mail.com',
    edad: 33,
    esCasado: true
}


const infoPersonalJSON = JSON.stringify(informacionPersonal)
// JSON.parse()
// JSON.stringify()

console.log("informacionPersonal", informacionPersonal)

console.log("infoPersonalJSON", infoPersonalJSON)
// {"name":"Jose","lastname":"Mendoza","email":"pepe@mail.com","edad":33,"esCasado":true}

localStorage.setItem('informacionPersonal', infoPersonalJSON)

const infoBack = localStorage.getItem('informacionPersonal')

const infoBackParse = JSON.parse(infoBack)

console.log(infoBackParse)
