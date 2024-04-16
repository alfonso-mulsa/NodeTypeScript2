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
    let nuevaEdad = Number((<HTMLInputElement>document.getElementById("entradaEdad1")).value);
    let nuevaPersona = new Persona(nuevoNombre, nuevaEdad);

    document.getElementById("ventanaLista1").classList.add("bg-light");
    document.getElementById("resultado1").classList.add("bg-light");

    conjuntoPersonas.add(nuevaPersona);
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = `${nuevaPersona.nombre} (${nuevaPersona.edad})`;
    document.getElementById("listaNombres1").appendChild(nuevoLi);
    sumaEdadesPersonas += nuevaEdad;
    let mediaEdad = Number((sumaEdadesPersonas /conjuntoPersonas.size).toFixed(2));
    let textoResultado = `<p>Edad media: ${mediaEdad}</p>`;
    document.getElementById("resultado1").innerHTML = textoResultado;
}
function anadirEmpleado() {
    let nuevaIdentificacion = (<HTMLInputElement>document.getElementById("entradaIdentificador2")).value;
    let nuevoNombre = (<HTMLInputElement>document.getElementById("entradaNombre2")).value;
    let nuevaEdad = Number((<HTMLInputElement>document.getElementById("entradaEdad2")).value);
    let nuevaExperiencia = Number((<HTMLInputElement>document.getElementById("entradaExperiencia2")).value);

    document.getElementById("ventanaLista2").classList.add("bg-light");
    document.getElementById("resultado2").classList.add("bg-light");

    if (!conjuntoEmpleados.has(nuevaIdentificacion)) {
        let nuevoEmpleado = new Empleado(nuevoNombre, nuevaEdad, nuevaExperiencia);
        conjuntoEmpleados.set(nuevaIdentificacion, nuevoEmpleado);
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = `${nuevoEmpleado.nombre} - Edad: ${nuevoEmpleado.edad} - Experiencia: ${nuevoEmpleado.experiencia}`;
        document.getElementById("listaNombres2").appendChild(nuevoLi);
        sumaEdadesEmpleados += nuevaEdad;
        sumaExperienciaEmpleados += nuevaExperiencia;
        let mediaEdad = Number((sumaEdadesEmpleados / conjuntoEmpleados.size).toFixed(2));
        let textoResultado = `<p>Edad media: ${mediaEdad}</p>
                              <p>Experiencia acumulada: ${sumaExperienciaEmpleados}</p>`;
        document.getElementById("resultado2").innerHTML = textoResultado;
    }
}