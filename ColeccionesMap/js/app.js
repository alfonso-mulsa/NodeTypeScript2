"use strict";
const mapaNombres = new Map();
document.getElementById("botonAnadir").addEventListener("click", anadirNombre);
var contNombres = 0;
var listaNombres = document.getElementById("listaNombres");
function anadirNombre() {
    let nuevoNombre = document.getElementById("entradaNombre").value;
    if (mapaNombres.has(nuevoNombre)) {
        let valor = Number(mapaNombres.get(nuevoNombre));
        mapaNombres.set(nuevoNombre, valor + 1);
    }
    else {
        mapaNombres.set(nuevoNombre, 1);
    }
    listaNombres.innerHTML = "";
    contNombres = 0;
    //mapaNombres.forEach(mostrarNombres);
    for (let [nombre, contador] of mapaNombres.entries()) {
        mostrarNombres(contador, nombre, mapaNombres);
    }
    let contRepetidos = contNombres - mapaNombres.size;
    let porcentaje = Number(((contRepetidos * 100) / contNombres).toFixed(2));
    let textoResultado = `<p>Num. nombres repetidos: ${contRepetidos}</p>
                          <p>Num. nombres introducidos: ${mapaNombres.size}</p>
                          <p>Nombres repetidos: ${porcentaje}%`;
    document.getElementById("resultado").innerHTML = textoResultado;
}
function mostrarNombres(contador, nombre, map) {
    let nuevaLinea = document.createElement("li");
    nuevaLinea.textContent = `${nombre} (${contador})`;
    listaNombres.appendChild(nuevaLinea);
    contNombres += Number(contador);
}
//# sourceMappingURL=app.js.map