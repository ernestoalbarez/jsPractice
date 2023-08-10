const $formulario = document.querySelector('[name=formulario]')
const $contenedorErrores = document.getElementById('errores')

$formulario.onsubmit = function(evento) {
    evento.preventDefault()
    const nombre = $formulario.nombre.value
    const ciudad = $formulario.ciudad.value
    const descripcionRegalo = $formulario['descripcion-regalo'].value
    const errores = {
        nombre: fnValidarNombre(nombre),
        ciudad: fnValidarCiudad(ciudad),
        'descripcion-regalo': fnValidarDescripcionRegalo(descripcionRegalo)
    }
    fnManejarErrores(errores)
}

// Funciones //

function fnValidarNombre(nombre) {
    return (/^[A-Za-z\- ]{1,50}$/).test(nombre) ? 
    "" : 
    "El nombre debe tener entre 1 y 50 caracteres"
}

function fnValidarCiudad(ciudad) {
    return(/^[A-Za-z\s]{1,50}$/).test(ciudad) ?
    "" :
    "La cuidad debe tener entre 1 y 50 caracteres"
}

function fnValidarDescripcionRegalo(descripcionRegalo) {
    return (/^[A-Za-z0-9\s]{1,100}$/).test(descripcionRegalo) ?
    "" :
    "La descripcion debe tener entre 1 y 100 caracteres"
}

function fnManejarErrores(errores) {
    let cantidadErrores = 0
    fnEliminarMensajesErrorHTML()
    const llaves = Object.keys(errores)
    for (const llave of llaves) {
        let error = errores[llave]
        if(error) {
            cantidadErrores++
            $formulario[llave].className = 'error'
            fnCrearMensajeErrorHTML(error)
        }
        else {
            $formulario[llave].className = ''
        }
    }
    return cantidadErrores
}

function fnCrearMensajeErrorHTML(msjError) {
    const $error = document.createElement('li')
    $error.innerText = msjError
    $error.className = 'msj-error'
    $contenedorErrores.appendChild($error)
}

function fnEliminarMensajesErrorHTML(){
    document.querySelectorAll('[class=msj-error]')
    .forEach(msjError => {
        msjError.remove()
    })
}