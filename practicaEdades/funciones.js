function crearInputsConLabel(cantidad, padre) {
    for(let i=1; i<=cantidad; i++) {
        const nuevoDiv = document.createElement('div')
        nuevoDiv.className = 'integrante';
        const nuevoLabel = document.createElement('label')
        const nuevoInput = document.createElement('input')
        nuevoLabel.className = 'label-edad'
        nuevoLabel.innerText = `Integrante ${i}:`
        nuevoInput.type = 'number'
        nuevoInput.className = 'input-edad'
        nuevoDiv.appendChild(nuevoLabel)
        nuevoDiv.appendChild(nuevoInput)
        padre.appendChild(nuevoDiv)
    }
}

function borrarElementosHTML(selector) {
    const $aBorrar = document.querySelectorAll(selector)
    $aBorrar.forEach(element => {
        element.remove()
    })
}
    
function ocultarElemento(elemento) {
    elemento.className = 'oculto'
}

function mostrarElemento(elemento) {
    elemento.className = ''
}

function buscarMayor(numeros) {
    let mayor = numeros[0]
    numeros.forEach(element => {
        if(element > mayor) {
            mayor = element
        }
    });
    return mayor
}

function buscarMenor(numeros) {
    let menor = numeros[0]
    numeros.forEach(element => {
        if(element < menor) {
            menor = element
        }
    });
    return menor
}

function calcularPromedio(numeros) { 
    let suma = 0
    numeros.forEach(element => {
        suma += element
    })
    return (suma/numeros.length).toFixed(2)
}

function obtenerEdades(listaDeEdades) {
    const edades = []
    listaDeEdades.forEach(element => {
        if(element.value >=0 ) {
            edades.push(Number(element.value))
        }
    })
    return edades
}