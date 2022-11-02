/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

$botonSiguientePaso.onclick = function() {
    let cantidad = Number($cantidadDeIntegrantes.value)
    ocultarElemento($divPreguntar)
    if(cantidad > 0) {
        crearInputsConLabel(cantidad,$divIntegrantes)
        mostrarElemento($divIntegrantes)
        mostrarElemento($botonCalcularEdades)
    }
    else {
        mostrarElemento($errorDato)
        mostrarElemento($divReset)
    }
}

$botonCalcularEdades.onclick = function() {
    const $listaDeEdades = document.querySelectorAll('.input-edad')
    let arrayEdades = obtenerEdades($listaDeEdades)
    ocultarElemento($divIntegrantes)
    ocultarElemento($botonCalcularEdades)
    $mayorEdad.innerText = buscarMayor(arrayEdades)
    $menorEdad.innerText = buscarMenor(arrayEdades)
    $promedioEdad.innerText = calcularPromedio(arrayEdades)
    mostrarElemento($divAnalisis)
    mostrarElemento($divReset)
}

$botonReset.onclick = function() {
    ocultarElemento($divAnalisis)
    ocultarElemento($divReset)
    ocultarElemento($errorDato)
    borrarElementosHTML('.integrante')
    mostrarElemento($divPreguntar)
}