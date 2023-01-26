const $formulario = document.querySelector('[name=formulario]')
const nombre = $formulario.nombre.value
const opcionRadioButton = $formulario.comportamiento.value
const ciudad = $formulario.ciudad.value
const descripcionRegalo = $formulario['descripcion-regalo'].value

function validarNombre(nombre) {
    //return (/^[A-Z]{1,50}$/i).test(nombre)
    return (/^[A-Z]{1,50}$/i).test(nombre)
}

function validarCiudad(ciudad) {
    return (/^[A-Z]+/i).test(ciudad)
}

function validarDescripcionRegalo(descripcionRegalo) {
    return (/^[A-Z0-9]{1,100}$/i).test(descripcionRegalo)
}

function manejarErrores(errores) {
    const llaves = Object.keys(errores)
    console.log(`Las llaves son: ${llaves}`)
    llaves.forEach(function(llave) {
        console.log(`La llave es: ${llave}`)
        let error = errores(llave)
        if(error) {
            $formulario[llave].className = 'error'
        }
    })
    evento.preventDefault()
}

$formulario.onsubmit = function(evento) {
    const nombre = $formulario.nombre.value
    const opcionRadioButton = $formulario.comportamiento.value
    const ciudad = $formulario.ciudad.value
    const descripcionRegalo = $formulario['descripcion-regalo'].value
    const errores = {
        nombre: !validarNombre(nombre),
        ciudad: !validarCiudad(ciudad),
        descripcionRegalo: !validarDescripcionRegalo(descripcionRegalo)
    }
    manejarErrores(errores)
    evento.preventDefault()
}

