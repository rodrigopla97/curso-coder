const titulo = document.getElementById('titulo')
const formulario = document.getElementById('formInicial')

formulario.onsubmit = (event) => {
    event.preventDefault()
    // console.log("event.target.children", event.target.children)
    const informacionArray = []
    for (const input of event.target.children) {
        // console.log(input)
        const obj = {}
        obj['tipo'] = input.name
        obj['valor'] = input.value
        informacionArray.push(obj)
        // console.log(obj)
        // localStorage.setItem(obj.tipo, JSON.stringify(obj.valor))
    }
    console.log(informacionArray)
    localStorage.setItem('info', JSON.stringify(informacionArray))
}

const informacion = JSON.parse(localStorage.getItem('info'))

let nombre = ''
let apellido = ''

informacion.forEach(dato => {
    if (dato.tipo === 'name') {
        nombre = dato.valor
    }
    if (dato.tipo === 'lastname') {
        apellido = dato.valor
    }
});

if (nombre !== '' || apellido !== '') {
    titulo.innerText = `Hola ${nombre} ${apellido}, bienvenido nuevamente`
}