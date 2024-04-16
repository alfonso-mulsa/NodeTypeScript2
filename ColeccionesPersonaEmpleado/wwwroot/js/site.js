var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, experiencia) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.experiencia = experiencia;
        return _this;
    }
    return Empleado;
}(Persona));
var conjuntoPersonas = new Set();
var conjuntoEmpleados = new Map();
var sumaEdadesPersonas = 0;
var sumaEdadesEmpleados = 0;
var sumaExperienciaEmpleados = 0;
document.getElementById("boton1").addEventListener("click", anadirPersona);
document.getElementById("boton2").addEventListener("click", anadirEmpleado);
function anadirPersona() {
    var nuevoNombre = document.getElementById("entradaNombre1").value;
    if (nuevoNombre == "") {
        alert("Hay que introducir un nombre.");
        return;
    }
    var nuevaEdad = Number(document.getElementById("entradaEdad1").value);
    if (nuevaEdad == 0) {
        alert("Hay que introducir la edad.");
        return;
    }
    var nuevaPersona = new Persona(nuevoNombre, nuevaEdad);
    var _ventana1 = document.getElementById("ventana1");
    console.log("<" + _ventana1.innerHTML + ">");
    if (_ventana1.innerHTML == "") {
        creaVentanas(_ventana1, "1");
    }
    conjuntoPersonas.add(nuevaPersona);
    var nuevoLi = document.createElement("li");
    nuevoLi.textContent = "".concat(nuevaPersona.nombre, " (").concat(nuevaPersona.edad, ")");
    document.getElementById("listaNombres1").appendChild(nuevoLi);
    sumaEdadesPersonas += nuevaEdad;
    var mediaEdad = Number((sumaEdadesPersonas / conjuntoPersonas.size).toFixed(2));
    var textoResultado = "<p class=\"mb-0\">Edad media: ".concat(mediaEdad, "</p>");
    document.getElementById("resultado1").innerHTML = textoResultado;
    vaciaInput("entradaNombre1");
    vaciaInput("entradaEdad1");
}
function anadirEmpleado() {
    var nuevaIdentificacion = document.getElementById("entradaIdentificador2").value;
    if (nuevaIdentificacion == "") {
        alert("Hay que introducir una identificación.");
        return;
    }
    var nuevoNombre = document.getElementById("entradaNombre2").value;
    if (nuevoNombre == "") {
        alert("Hay que introducir un nombre.");
        return;
    }
    var nuevaEdad = Number(document.getElementById("entradaEdad2").value);
    if (nuevaEdad == 0) {
        alert("Hay que introducir la edad.");
        return;
    }
    var nuevaExperiencia = Number(document.getElementById("entradaExperiencia2").value);
    if (nuevaExperiencia == 0) {
        alert("Hay que introducir la experiencia.");
        return;
    }
    var _ventana2 = document.getElementById("ventana2");
    if (_ventana2.innerHTML == "") {
        creaVentanas(_ventana2, "2");
    }
    if (!conjuntoEmpleados.has(nuevaIdentificacion)) {
        var nuevoEmpleado = new Empleado(nuevoNombre, nuevaEdad, nuevaExperiencia);
        conjuntoEmpleados.set(nuevaIdentificacion, nuevoEmpleado);
        var nuevoLi = document.createElement("li");
        nuevoLi.textContent = "".concat(nuevoEmpleado.nombre, " - Edad: ").concat(nuevoEmpleado.edad, " - Experiencia: ").concat(nuevoEmpleado.experiencia);
        document.getElementById("listaNombres2").appendChild(nuevoLi);
        sumaEdadesEmpleados += nuevaEdad;
        sumaExperienciaEmpleados += nuevaExperiencia;
        var mediaEdad = Number((sumaEdadesEmpleados / conjuntoEmpleados.size).toFixed(2));
        var textoResultado = "<p class=\"mb-1>Edad media: ".concat(mediaEdad, "</p>\n                              <p class=\"mb-0\">Experiencia acumulada: ").concat(sumaExperienciaEmpleados, "</p>");
        document.getElementById("resultado2").innerHTML = textoResultado;
    }
    vaciaInput("entradaIdentificador2");
    vaciaInput("entradaNombre2");
    vaciaInput("entradaEdad2");
    vaciaInput("entradaExperiencia2");
}
function vaciaInput(id) {
    document.getElementById(id).value = "";
}
function creaVentanas(ventanaPadre, strVentana) {
    var _div1 = document.createElement("div");
    _div1.id = "ventanaLista".concat(strVentana);
    _div1.classList.value = "container col-lg-4 mt-3 py-2 bg-light";
    ventanaPadre.appendChild(_div1);
    var _ul1 = document.createElement("ul");
    _ul1.id = "listaNombres".concat(strVentana);
    _ul1.classList.add("mb-0");
    _div1.appendChild(_ul1);
    var _div2 = document.createElement("div");
    _div2.id = "resultado".concat(strVentana);
    _div2.classList.value = "container col-lg-4 mt-3 py-2 bg-light";
    ventanaPadre.appendChild(_div2);
}
//# sourceMappingURL=site.js.map