"use strict";
var _a;
class Persona {
    constructor() {
        this.primerNombre = "";
        this.nombreIntermedio = "";
        this.apellido1 = "";
        this.apellido2 = "";
        this.anyoNacimiento = 0;
        this.identificativo = "";
        this.activo = false;
        //constructor(primerNombre: string, nombreIntermedio: string, apellido1: string, apellido2: string, anyoNacimiento: number, identificativo: string, activo: boolean) {
        //    this.primerNombre = primerNombre;
        //    this.nombreIntermedio = nombreIntermedio;
        //    this.apellido1 = apellido1;
        //    this.apellido2 = apellido2;
        //    this.anyoNacimiento = anyoNacimiento;
        //    this.identificativo = identificativo;
        //    this.activo = activo;
        //}
    }
}
class CrearPersonaEspanyola {
    crearPersona(primerNombre, nombreIntermedio, apellido1, apellido2, anyoNacimiento, identificativo, activo) {
        let nuevaPersona = new Persona;
        nuevaPersona.primerNombre = primerNombre;
        nuevaPersona.nombreIntermedio = "";
        nuevaPersona.apellido1 = apellido1;
        nuevaPersona.apellido2 = apellido2;
        nuevaPersona.anyoNacimiento = anyoNacimiento;
        nuevaPersona.identificativo = identificativo;
        nuevaPersona.activo = activo;
        return nuevaPersona;
    }
}
class CrearPersonaInglesa {
    crearPersona(primerNombre, nombreIntermedio, apellido1, apellido2, anyoNacimiento, identificativo, activo) {
        let nuevaPersona = new Persona;
        nuevaPersona.primerNombre = primerNombre;
        nuevaPersona.nombreIntermedio = nombreIntermedio;
        nuevaPersona.apellido1 = apellido1;
        nuevaPersona.apellido2 = "";
        nuevaPersona.anyoNacimiento = anyoNacimiento;
        nuevaPersona.identificativo = identificativo;
        nuevaPersona.activo = activo;
        return nuevaPersona;
    }
}
class ValidarPersonaInglesa {
    isValid(persona) {
        return persona.identificativo != "" && persona.primerNombre != "" && persona.nombreIntermedio != "" && persona.apellido1 != "";
    }
}
class ValidarPersonaEspanyola {
    isValid(persona) {
        return persona.identificativo != "" && persona.primerNombre != "" && persona.apellido1 != "" && persona.apellido2 != "";
    }
}
class MostrarPersonaInglesa {
    mostrarDatos(persona) {
        return `<p class="my-1"><strong>Campos obligatorios</strong></p>
                <p class="mb-1">Identificativo: ${persona.identificativo}</p>
                <p class="mb-1">Primer Nombre: ${persona.primerNombre}</p>
                <p class="mb-1">Nombre Intermedio: ${persona.nombreIntermedio}</p>
                <p class="mb-1">Apellido 1: ${persona.apellido1}</p>
                <p class="mb-1"><strong>Campos optativos</strong></p>
                <p class="mb-1">Apellido 2: ${persona.apellido2}</p>
                <p class="mb-1">A�o Nacimiento: ${persona.anyoNacimiento}</p>
                <p class="mb-1">Activo: ${persona.activo}</p>`;
    }
}
class MostrarPersonaEspanyola {
    mostrarDatos(persona) {
        return `<p class="my-1"><strong>Campos obligatorios</strong></p>
                <p class="mb-1">Identificativo: ${persona.identificativo}</p>
                <p class="mb-1">Primer Nombre: ${persona.primerNombre}</p>
                <p class="mb-1">Apellido 2: ${persona.apellido2}</p>
                <p class="mb-1">Apellido 1: ${persona.apellido1}</p>
                <p class="mb-1"><strong>Campos optativos</strong></p>
                <p class="mb-1">Nombre Intermedio: ${persona.nombreIntermedio}</p>
                <p class="mb-1">A�o Nacimiento: ${persona.anyoNacimiento}</p>
                <p class="mb-1">Activo: ${persona.activo}</p>`;
    }
}
function visualizar() {
    let nombre = document.getElementById("idPrimerNombre").value;
    let nomInt = document.getElementById("idNombreIntermedio").value;
    let apell1 = document.getElementById("idApellido1").value;
    let apell2 = document.getElementById("idApellido2").value;
    let anyoNac = Number(document.getElementById("idAnyoNacimiento").value);
    let ident = document.getElementById("idIdentificativo").value;
    let activ = document.getElementById("idActivo").checked;
    let _creadorPersonaEsp = new CrearPersonaEspanyola;
    let _creadorPersonaIng = new CrearPersonaInglesa;
    let _validarPersonaEsp = new ValidarPersonaEspanyola;
    let _validarPersonaIng = new ValidarPersonaInglesa;
    let personaEsp = _creadorPersonaEsp.crearPersona(nombre, nomInt, apell1, apell2, anyoNac, ident, activ);
    let personaIng = _creadorPersonaIng.crearPersona(nombre, nomInt, apell1, apell2, anyoNac, ident, activ);
    let _mostrarPersonaEsp = new MostrarPersonaEspanyola;
    let _mostrarPersonaIng = new MostrarPersonaInglesa;
    console.log(_mostrarPersonaEsp.mostrarDatos(personaEsp));
    console.log(_mostrarPersonaIng.mostrarDatos(personaIng));
    if (_validarPersonaEsp.isValid(personaEsp)) {
        document.getElementById("ventanaVerde").innerHTML = _mostrarPersonaEsp.mostrarDatos(personaEsp);
        document.getElementById("ventanaRoja").innerHTML = "";
    }
    else {
        document.getElementById("ventanaVerde").innerHTML = "";
        document.getElementById("ventanaRoja").innerHTML = '<p class="text-center">PERSONA NO VALIDA</P>';
    }
    if (_validarPersonaIng.isValid(personaIng)) {
        console.log(_mostrarPersonaIng.mostrarDatos(personaIng));
    }
}
(_a = document.getElementById("idBotonMostrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", visualizar);
//# sourceMappingURL=app.js.map