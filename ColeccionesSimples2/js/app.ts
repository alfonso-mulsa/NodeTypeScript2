var conjuntoNombres = new Set<string>();
var contNomRepe = 0;
(<HTMLButtonElement>document.getElementById("botonAnadir")).addEventListener("click", anadirNombre);

function anadirNombre() {
    let nuevoNombre = (<HTMLInputElement>document.getElementById("entradaNombre")).value;

    if (conjuntoNombres.has(nuevoNombre)) {
        window.alert(`el nombre ${nuevoNombre} ya existe en la lista.`);
        ++contNomRepe;
    }
    else {
        conjuntoNombres.add(nuevoNombre);
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = nuevoNombre;
        (<HTMLElement>document.getElementById("listaNombres")).appendChild(nuevoLi);
    }
    let porcentaje = Number(((contNomRepe * 100) / (conjuntoNombres.size + contNomRepe)).toFixed(2));
    let textoResultado = `<p>Num. nombres repetidos: ${contNomRepe}</p>
                          <p>Num. nombres introducidos: ${conjuntoNombres.size}</p>
                          <p>% nombres repetidos: ${porcentaje}`;
    (<HTMLElement>document.getElementById("resultado")).innerHTML = textoResultado;
}