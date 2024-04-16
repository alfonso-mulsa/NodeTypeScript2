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
    var nuevaEdad = Number(document.getElementById("entradaEdad1").value);
    var nuevaPersona = new Persona(nuevoNombre, nuevaEdad);
    document.getElementById("ventanaLista1").classList.add("bg-light");
    document.getElementById("resultado1").classList.add("bg-light");
    conjuntoPersonas.add(nuevaPersona);
    var nuevoLi = document.createElement("li");
    nuevoLi.textContent = "".concat(nuevaPersona.nombre, " (").concat(nuevaPersona.edad, ")");
    document.getElementById("listaNombres1").appendChild(nuevoLi);
    sumaEdadesPersonas += nuevaEdad;
    var mediaEdad = Number((sumaEdadesPersonas / conjuntoPersonas.size).toFixed(2));
    var textoResultado = "<p>Edad media: ".concat(mediaEdad, "</p>");
    document.getElementById("resultado1").innerHTML = textoResultado;
}
function anadirEmpleado() {
    var nuevaIdentificacion = document.getElementById("entradaIdentificador2").value;
    var nuevoNombre = document.getElementById("entradaNombre2").value;
    var nuevaEdad = Number(document.getElementById("entradaEdad2").value);
    var nuevaExperiencia = Number(document.getElementById("entradaExperiencia2").value);
    document.getElementById("ventanaLista2").classList.add("bg-light");
    document.getElementById("resultado2").classList.add("bg-light");
    if (!conjuntoEmpleados.has(nuevaIdentificacion)) {
        var nuevoEmpleado = new Empleado(nuevoNombre, nuevaEdad, nuevaExperiencia);
        conjuntoEmpleados.set(nuevaIdentificacion, nuevoEmpleado);
        var nuevoLi = document.createElement("li");
        nuevoLi.textContent = "".concat(nuevoEmpleado.nombre, " - Edad: ").concat(nuevoEmpleado.edad, " - Experiencia: ").concat(nuevoEmpleado.experiencia);
        document.getElementById("listaNombres2").appendChild(nuevoLi);
        sumaEdadesEmpleados += nuevaEdad;
        sumaExperienciaEmpleados += nuevaExperiencia;
        var mediaEdad = Number((sumaEdadesEmpleados / conjuntoEmpleados.size).toFixed(2));
        var textoResultado = "<p>Edad media: ".concat(mediaEdad, "</p>\n                              <p>Experiencia acumulada: ").concat(sumaExperienciaEmpleados, "</p>");
        document.getElementById("resultado2").innerHTML = textoResultado;
    }
}
//# sourceMappingURL=site.js.map