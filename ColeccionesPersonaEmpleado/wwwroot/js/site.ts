class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Empleado extends Persona {
    experiencia: number;
    constructor(nombre: string, edad: number, experiencia: number) {
        super(nombre, edad);
        this.experiencia = experiencia;
    }
}

var conjuntoPersonas = new Set<Persona>();
var conjuntoEmpleados = new Map<string,Empleado>();
var sumaEdadesPersonas = 0;
var sumaEdadesEmpleados = 0;
var sumaExperienciaEmpleados = 0;
(<HTMLButtonElement>document.getElementById("boton1")).addEventListener("click", anadirPersona);
(<HTMLButtonElement>document.getElementById("boton2")).addEventListener("click", anadirEmpleado);

function anadirPersona() {
    let nuevoNombre = (<HTMLInputElement>document.getElementById("entradaNombre1")).value;
    if (nuevoNombre == "") {
        alert("Hay que introducir un nombre.");
        return;
    }
    let nuevaEdad = Number((<HTMLInputElement>document.getElementById("entradaEdad1")).value);
    if (nuevaEdad == 0) {
        alert("Hay que introducir la edad.");
        return;
    }
    let nuevaPersona = new Persona(nuevoNombre, nuevaEdad);

    let _ventana1 = document.getElementById("ventana1");
    console.log("<" + _ventana1.innerHTML + ">");
    if (_ventana1.innerHTML == "") {
        creaVentanas(_ventana1, "1");
    }

    conjuntoPersonas.add(nuevaPersona);
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = `${nuevaPersona.nombre} (${nuevaPersona.edad})`;
    document.getElementById("listaNombres1").appendChild(nuevoLi);
    sumaEdadesPersonas += nuevaEdad;
    let mediaEdad = Number((sumaEdadesPersonas /conjuntoPersonas.size).toFixed(2));
    let textoResultado = `<p class="mb-0">Edad media: ${mediaEdad}</p>`;
    document.getElementById("resultado1").innerHTML = textoResultado;

    vaciaInput("entradaNombre1");
    vaciaInput("entradaEdad1");
}
function anadirEmpleado() {
    let nuevaIdentificacion = (<HTMLInputElement>document.getElementById("entradaIdentificador2")).value;
    if (nuevaIdentificacion == "") {
        alert("Hay que introducir una identificación.");
        return;
    }
    let nuevoNombre = (<HTMLInputElement>document.getElementById("entradaNombre2")).value;
    if (nuevoNombre == "") {
        alert("Hay que introducir un nombre.");
        return;
    }
    let nuevaEdad = Number((<HTMLInputElement>document.getElementById("entradaEdad2")).value);
    if (nuevaEdad == 0) {
        alert("Hay que introducir la edad.");
        return;
    }
    let nuevaExperiencia = Number((<HTMLInputElement>document.getElementById("entradaExperiencia2")).value);
    if (nuevaExperiencia == 0) {
        alert("Hay que introducir la experiencia.");
        return;
    }

    let _ventana2 = document.getElementById("ventana2");
    if (_ventana2.innerHTML == "") {
        creaVentanas(_ventana2, "2");
    }

    if (!conjuntoEmpleados.has(nuevaIdentificacion)) {
        let nuevoEmpleado = new Empleado(nuevoNombre, nuevaEdad, nuevaExperiencia);
        conjuntoEmpleados.set(nuevaIdentificacion, nuevoEmpleado);
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = `${nuevoEmpleado.nombre} - Edad: ${nuevoEmpleado.edad} - Experiencia: ${nuevoEmpleado.experiencia}`;
        document.getElementById("listaNombres2").appendChild(nuevoLi);
        sumaEdadesEmpleados += nuevaEdad;
        sumaExperienciaEmpleados += nuevaExperiencia;
        let mediaEdad = Number((sumaEdadesEmpleados / conjuntoEmpleados.size).toFixed(2));
        let textoResultado = `<p class="mb-1>Edad media: ${mediaEdad}</p>
                              <p class="mb-0">Experiencia acumulada: ${sumaExperienciaEmpleados}</p>`;
        document.getElementById("resultado2").innerHTML = textoResultado;
    }
    vaciaInput("entradaIdentificador2");
    vaciaInput("entradaNombre2");
    vaciaInput("entradaEdad2");
    vaciaInput("entradaExperiencia2");
}
function vaciaInput(id: string) {
    (<HTMLInputElement>document.getElementById(id)).value = "";
}
function creaVentanas(ventanaPadre: HTMLElement, strVentana: string ) {
    let _div1 = document.createElement("div");
    _div1.id = `ventanaLista${strVentana}`;
    _div1.classList.value = "container col-lg-4 mt-3 py-2 bg-light";
    ventanaPadre.appendChild(_div1);

    let _ul1 = document.createElement("ul");
    _ul1.id = `listaNombres${strVentana}`;
    _ul1.classList.add("mb-0");
    _div1.appendChild(_ul1);

    let _div2 = document.createElement("div");
    _div2.id = `resultado${strVentana}`;
    _div2.classList.value = "container col-lg-4 mt-3 py-2 bg-light";
    ventanaPadre.appendChild(_div2);
}