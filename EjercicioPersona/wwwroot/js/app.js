var Persona = /** @class */ (function () {
    function Persona() {
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
    return Persona;
}());
var CrearPersona = /** @class */ (function () {
    function CrearPersona() {
    }
    CrearPersona.prototype.crearPersona = function (primerNombre, nombreIntermedio, apellido1, apellido2, anyoNacimiento, identificativo, activo) {
        var nuevaPersona = new Persona;
        nuevaPersona.primerNombre = primerNombre;
        nuevaPersona.nombreIntermedio = nombreIntermedio;
        nuevaPersona.apellido1 = apellido1;
        nuevaPersona.apellido2 = apellido2;
        nuevaPersona.anyoNacimiento = anyoNacimiento;
        nuevaPersona.identificativo = identificativo;
        nuevaPersona.activo = activo;
        return nuevaPersona;
    };
    return CrearPersona;
}());
var ValidarPersonaInglesa = /** @class */ (function () {
    function ValidarPersonaInglesa() {
    }
    ValidarPersonaInglesa.prototype.isValid = function (persona) {
        return persona.identificativo != "" && persona.primerNombre != "" && persona.nombreIntermedio != "" && persona.apellido1 != "";
    };
    return ValidarPersonaInglesa;
}());
var ValidarPersonaEspanyola = /** @class */ (function () {
    function ValidarPersonaEspanyola() {
    }
    ValidarPersonaEspanyola.prototype.isValid = function (persona) {
        return persona.identificativo != "" && persona.primerNombre != "" && persona.apellido1 != "" && persona.apellido2 != "";
    };
    return ValidarPersonaEspanyola;
}());
var MostrarPersonaInglesa = /** @class */ (function () {
    function MostrarPersonaInglesa() {
    }
    MostrarPersonaInglesa.prototype.mostrarDatos = function (persona) {
        var estaActivo = "No";
        if (persona.activo) {
            estaActivo = "Si";
        }
        return "<p class=\"my-1\"><strong><u>Required fields</u></strong></p>\n                <p class=\"mb-1\">Identification: ".concat(persona.identificativo, "</p>\n                <p class=\"mb-1\">First Name: ").concat(persona.primerNombre, "</p>\n                <p class=\"mb-1\">Intermediate Name: ").concat(persona.nombreIntermedio, "</p>\n                <p class=\"mb-3\">Last name: ").concat(persona.apellido1, "</p>\n                <p class=\"mb-1\"><strong><u>Optional fields</u></strong></p>\n                <p class=\"mb-1\">Last name 2: ").concat(persona.apellido2, "</p>\n                <p class=\"mb-1\">Birth Year: ").concat(persona.anyoNacimiento, "</p>\n                <p class=\"mb-1\">Active: ").concat(estaActivo, "</p>");
    };
    return MostrarPersonaInglesa;
}());
var MostrarPersonaEspanyola = /** @class */ (function () {
    function MostrarPersonaEspanyola() {
    }
    MostrarPersonaEspanyola.prototype.mostrarDatos = function (persona) {
        var estaActivo = "No";
        if (persona.activo) {
            estaActivo = "Si";
        }
        return "<p class=\"my-1\"><u><strong>Campos obligatorios</u></strong></p>\n                <p class=\"mb-1\">Identificativo: ".concat(persona.identificativo, "</p>\n                <p class=\"mb-1\">Primer Nombre: ").concat(persona.primerNombre, "</p>\n                <p class=\"mb-1\">1er Apellido: ").concat(persona.apellido1, "</p>\n                <p class=\"mb-3\">2o Apellido: ").concat(persona.apellido2, "</p>\n                <p class=\"mb-1\"><strong><u>Campos optativos</u></strong></p>\n                <p class=\"mb-1\">Nombre Intermedio: ").concat(persona.nombreIntermedio, "</p>\n                <p class=\"mb-1\">A\u00F1o Nacimiento: ").concat(persona.anyoNacimiento, "</p>\n                <p class=\"mb-1\">Activo: ").concat(estaActivo, "</p>");
    };
    return MostrarPersonaEspanyola;
}());
document.getElementById("idBotonMostrar").addEventListener("click", visualizar);
function visualizar() {
    var nacionalidad = document.querySelector('input[name="nacionalidad"]:checked').value;
    var nombre = document.getElementById("idPrimerNombre").value;
    var nomInt = document.getElementById("idNombreIntermedio").value;
    var apell1 = document.getElementById("idApellido1").value;
    var apell2 = document.getElementById("idApellido2").value;
    var anyoNac = Number(document.getElementById("idAnyoNacimiento").value);
    var ident = document.getElementById("idIdentificativo").value;
    var activ = document.getElementById("idActivo").checked;
    var _creadorPersona = new CrearPersona;
    var persona = _creadorPersona.crearPersona(nombre, nomInt, apell1, apell2, anyoNac, ident, activ);
    var _validarPersona;
    var _mostrarPersona;
    switch (nacionalidad) {
        case "ESP":
            console.log(nacionalidad + ": " + persona);
            _validarPersona = new ValidarPersonaEspanyola;
            _mostrarPersona = new MostrarPersonaEspanyola;
            break;
        case "ING":
            console.log(nacionalidad + ": " + persona);
            _validarPersona = new ValidarPersonaInglesa;
            _mostrarPersona = new MostrarPersonaInglesa;
            break;
    }
    if (_validarPersona.isValid(persona)) {
        document.getElementById("ventanaVerde").innerHTML = _mostrarPersona.mostrarDatos(persona);
        document.getElementById("ventanaRoja").innerHTML = "";
    }
    else {
        document.getElementById("ventanaVerde").innerHTML = "";
        document.getElementById("ventanaRoja").innerHTML = '<p class="text-center mb-0">DATOS INCOMPLETOS</P>';
    }
}
//# sourceMappingURL=app.js.map