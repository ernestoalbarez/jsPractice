function generarTextoLargo(long) {
    return new Array(long+1).join('Z')
}

function probarValidarNombre() {
    let nombre = ''
    console.assert(
        fnValidarNombre(nombre),    
        'Validar nombre falló la prueba de nombre vacío'
    )
    nombre = generarTextoLargo(51)
    console.assert(
        fnValidarNombre(nombre),
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    )
    nombre = generarTextoLargo(5)
    console.assert(
        fnValidarNombre(nombre),
        'Validar nombre no pasó la prueba con un campo entre 1 y 50 caracteres'
    )
}

function probarValidarCiudad() {
    let ciudad = ''
    console.assert(
        fnValidarCiudad(ciudad),
        'Validar ciudad no validó un campo vacío'
    )
    ciudad = generarTextoLargo(8)
    console.assert(
        fnValidarCiudad(ciudad),
        'Validar ciudad falló la prueba con un campo no vacío'
    )
}

function probarValidarDescripcionRegalo() {
    let descripcionRegalo = ''
    console.assert(
        fnValidarDescripcionRegalo(descripcionRegalo),
        'Validar descripción regalo falló la prueba de campo vacío'
    )
    descripcionRegalo = generarTextoLargo(101)
    console.assert(
        fnValidarDescripcionRegalo(descripcionRegalo),
        'Validar descripción regalo no validó que el campo sea menor a 100 caracteres'
    )
    descripcionRegalo = generarTextoLargo(10)
    console.assert(
        fnValidarDescripcionRegalo(descripcionRegalo),
        'Validar descripción regalo no pasó la prueba con un campo entre 1 y 100 caracteres'
    )
}
