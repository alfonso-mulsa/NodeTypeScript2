class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Empleado extends Persona {
    constructor(nombre, edad, experiencia) {
        super(nombre, edad);
        this.experiencia = experiencia;
    }
}
class ConjuntoPersonas {
    constructor() {
        this.conjunto = new Set;
        this.sumaEdades = 0;
    }
    ponPersona(item) {
        this.conjunto.add(item);
        this.sumaEdades += item.edad;
    }
    edadMedia() {
        return Number((this.sumaEdades / this.conjunto.size).toFixed(2));
    }
}
class ColeccionEmpleados {
    constructor() {
        this.coleccion = new Map;
        this.sumaEdades = 0;
        this.sumaExperiencias = 0;
    }
    ponEmpleado(id, item) {
        if (!this.coleccion.has(id)) {
            this.coleccion.set(id, item);
            this.sumaEdades += item.edad;
            this.sumaExperiencias += item.experiencia;
            return true;
        }
        else {
            return false;
        }
    }
    edadMedia() {
        return Number((this.sumaEdades / this.coleccion.size).toFixed(2));
    }
}
var grupoPersonas = new ConjuntoPersonas();
var grupoEmpleados = new ColeccionEmpleados();
document.getElementById("boton1").addEventListener("click", anadirPersona);
document.getElementById("boton2").addEventListener("click", anadirEmpleado);
function anadirPersona() {
    let nuevoNombre = document.getElementById("entradaNombre1").value;
    if (nuevoNombre == "") {
        alert("Hay que introducir un nombre.");
        return;
    }
    let nuevaEdad = Number(document.getElementById("entradaEdad1").value);
    if (nuevaEdad == 0) {
        alert("Hay que introducir la edad.");
        return;
    }
    let nuevaPersona = new Persona(nuevoNombre, nuevaEdad);
    let _ventana = document.getElementById("ventana1");
    if (_ventana.innerHTML == "") {
        creaVentanas(_ventana, "1");
    }
    grupoPersonas.ponPersona(nuevaPersona);
    crearLinea("listaNombres1", `${nuevaPersona.nombre} (${nuevaPersona.edad})`);
    document.getElementById("resultado1").innerHTML = `<p class="mb-0">Edad media: ${grupoPersonas.edadMedia()}</p>`;
    vaciarInputs("#form1");
}
function anadirEmpleado() {
    let nuevaIdentificacion = document.getElementById("entradaIdentificador2").value;
    if (nuevaIdentificacion == "") {
        alert("Hay que introducir una identificación.");
        return;
    }
    let nuevoNombre = document.getElementById("entradaNombre2").value;
    if (nuevoNombre == "") {
        alert("Hay que introducir un nombre.");
        return;
    }
    let nuevaEdad = Number(document.getElementById("entradaEdad2").value);
    if (nuevaEdad == 0) {
        alert("Hay que introducir la edad.");
        return;
    }
    let nuevaExperiencia = Number(document.getElementById("entradaExperiencia2").value);
    if (nuevaExperiencia == 0) {
        alert("Hay que introducir la experiencia.");
        return;
    }
    let _ventana = document.getElementById("ventana2");
    if (_ventana.innerHTML == "") {
        creaVentanas(_ventana, "2");
    }
    let nuevoEmpleado = new Empleado(nuevoNombre, nuevaEdad, nuevaExperiencia);
    if (grupoEmpleados.ponEmpleado(nuevaIdentificacion, nuevoEmpleado)) {
        crearLinea("listaNombres2", `(${nuevaIdentificacion}) ${nuevoEmpleado.nombre} - Edad: ${nuevoEmpleado.edad} - Experiencia: ${nuevoEmpleado.experiencia}`);
        document.getElementById("resultado2").innerHTML = `<p class="mb-1">Edad media: ${grupoEmpleados.edadMedia()}</p>
                                                           <p class="mb-0">Experiencia acumulada: ${grupoEmpleados.sumaExperiencias}</p>`;
        vaciarInputs("#form2");
    }
    else {
        alert(`El identificador ${nuevaIdentificacion} ya existe.`);
    }
}
function creaVentanas(ventanaPadre, strVentana) {
    let _div1 = document.createElement("div");
    _div1.id = `ventanaLista${strVentana}`;
    _div1.classList.value = "container col-lg-4 mt-3 py-2 bg-light border border-dark";
    ventanaPadre.appendChild(_div1);
    let _ul1 = document.createElement("ul");
    _ul1.id = `listaNombres${strVentana}`;
    _ul1.classList.add("mb-0");
    _div1.appendChild(_ul1);
    let _div2 = document.createElement("div");
    _div2.id = `resultado${strVentana}`;
    _div2.classList.value = "container col-lg-4 mt-3 py-2 bg-light border border-dark";
    ventanaPadre.appendChild(_div2);
}
function crearLinea(lista, texto) {
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto;
    document.getElementById(lista).appendChild(nuevoLi);
}
function vaciarInputs(form) {
    let entradas = document.querySelectorAll(`${form} input`);
    [].forEach.call(entradas, function (elemento) {
        elemento.value = "";
    });
}
//# sourceMappingURL=site.js.map