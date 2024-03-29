function abrirFormulario() {
    $formulario.style.display = 'block';
}
  
function cerrarFormulario() {
    $formulario.style.display = 'none';
}

function crearInputsConLabel(cantidad, padre) {
    for(let i=1; i<=cantidad; i++) {
        const nuevoLabel = document.createElement('label')
        nuevoLabel.className = 'label-edad'
        nuevoLabel.innerText = `Integrante ${i}:`
        
        const nuevoInput = document.createElement('input')
        nuevoInput.type = 'number'
        nuevoInput.className = 'input-edad'
        nuevoInput.onfocus=`${this.value=''}`
        nuevoInput.value="0"

        const nuevoDiv = document.createElement('div')
        nuevoDiv.className = 'integrante';
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

function ocultarPasoIngresoIntegrantes() {
    ocultarElemento($divPreguntar)
}

function ocultarPasoIngresoEdades() {
    ocultarElemento($divIntegrantes)
    ocultarElemento($botonCalcularEdades)
}

function mostrarPasoIngresoEdades() {
    crearInputsConLabel(Number($cantidadDeIntegrantes.value),$divIntegrantes)
    mostrarElemento($divIntegrantes)
    mostrarElemento($botonCalcularEdades)
}

function mostrarPasoResultado() {
    mostrarElemento($divAnalisis)
    mostrarElemento($divReset)
    calcularEdadesIngresadas()
}

function calcularEdadesIngresadas() {
    const $listaDeEdades = document.querySelectorAll('.input-edad')
    let arrayEdades = obtenerEdades($listaDeEdades)
    $mayorEdad.innerText = buscarMayor(arrayEdades)
    $menorEdad.innerText = buscarMenor(arrayEdades)
    $promedioEdad.innerText = calcularPromedio(arrayEdades)
}

function volverAlPasoIngresoIntegrantes() {
    ocultarElemento($divAnalisis)
    ocultarElemento($divReset)
    ocultarElemento($errorDato)
    borrarElementosHTML('.integrante')
    mostrarElemento($divPreguntar)
}

function error() {
    mostrarElemento($errorDato)
    mostrarElemento($divReset)
}