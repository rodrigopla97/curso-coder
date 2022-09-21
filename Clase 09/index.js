const boton1 = document.getElementById('boton1')
const div1 = document.querySelector('.div1')
const input1 = document.getElementById('input1')

// boton1.addEventListener('click', clickFunction)

// function clickFunction() {
//     console.log(('Haciendo click en el primer botón'))
// }

// div1.addEventListener('mousemove', mouveFunction)
// function mouveFunction() {
//     console.log(('Moviendo el mouse en el div azul'))
// }

// div1.addEventListener('mouseout', outFunction)
// function outFunction() {
//     console.log(('Out mouse en el div azul'))
// }
// div1.addEventListener('mouseout', () => {
//     console.log(('Out mouse en el div azul'))
// })

// Segunda forma de escuchar eventos

boton1.onclick = () => {
    console.log('Haciendo click en el primer botón')
}

div1.onmouseover = () => {
    console.log(('Over mouse en div azul'))
}

div1.onmouseout = () => {
    console.log(('Out mouse en div azul'))
}

// input1.oninput = () => {
//     console.log('evento input')
// }

// input1.onchange = () => {
//     console.log('evento change')
// }

// input1.oninput = (evento) => {
//     console.log(evento.target.value) // devuelve lo que se tipeo
// }

// input1.onchange = (e) => {
//     console.log(e.target.value)// devuelve lo que se tipeo
// }

input1.onkeydown = (evento) => {
    if (evento.code === 'Enter') {
        console.log('Tecla enter')
    }
    console.log(evento.code)
}

const formulario = document.getElementById('form')
formulario.onsubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target.children[0].value)
    console.log(e.target.children[1].value)
    console.log(e.target.children[2].value)

    Array.from(e.target.children).forEach(elemento => {
        console.log(elemento.value)
    });
}