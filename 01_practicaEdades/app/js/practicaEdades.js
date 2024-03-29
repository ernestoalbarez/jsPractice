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


$cantidadDeIntegrantes.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    $botonSiguientePaso.click();
  }
})

$botonSiguientePaso.onclick = function() {
    ocultarPasoIngresoIntegrantes()
    if(Number($cantidadDeIntegrantes.value) > 0) {
        mostrarPasoIngresoEdades()
    }
    else {
        error()
    }
}

$botonCalcularEdades.onclick = function() {
    ocultarPasoIngresoEdades()
    mostrarPasoResultado()
}

$botonReset.onclick = function() {
    volverAlPasoIngresoIntegrantes()
}