const mapaNombres = new Map<string, number>();
(<HTMLButtonElement>document.getElementById("botonAnadir")).addEventListener("click", anadirNombre);
var contNombres = 0;
var listaNombres = (<HTMLElement>document.getElementById("listaNombres"));

function anadirNombre() {
    let nuevoNombre = (<HTMLInputElement>document.getElementById("entradaNombre")).value;
    if (mapaNombres.has(nuevoNombre)) {
        let valor = Number(mapaNombres.get(nuevoNombre));
        mapaNombres.set(nuevoNombre, valor + 1);
    }
    else {
        mapaNombres.set(nuevoNombre, 1);
    }
    (<HTMLInputElement>document.getElementById("ventanaLista")).classList.add("bg-light");
    (<HTMLInputElement>document.getElementById("resultado")).classList.add("bg-light");
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
    (<HTMLElement>document.getElementById("resultado")).innerHTML = textoResultado;
}
function mostrarNombres(contador: number, nombre: string, map: Map<string, number>) {
    let nuevaLinea = (<HTMLElement>document.createElement("li"));
    nuevaLinea.textContent = `${nombre} (${contador})`;
    listaNombres.appendChild(nuevaLinea);
    contNombres += Number(contador);
}