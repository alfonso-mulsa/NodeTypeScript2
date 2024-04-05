"use strict";
class Persona {
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get dni() {
        return this._dni;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get peso() {
        return this._peso;
    }
    set peso(value) {
        this._peso = value;
    }
    get altura() {
        return this._altura;
    }
    set altura(value) {
        this._altura = value;
    }
    constructor(nombre, edad, sexo, peso, altura) {
        this._nombre = "";
        this._edad = 0;
        this._dni = "";
        this._sexo = "";
        this._peso = 0;
        this._altura = 0;
        this.nombre = nombre;
        this.edad = edad;
        this._dni = this.generaDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        let imc = this._peso / (this._altura ^ 2);
        if (imc < 20) {
            return -1;
        }
        else {
            if (imc > 25) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
    esMayorDeEdad() {
        return (this._edad >= 18);
    }
    comprobarSexo(sexo) {
        if (sexo == "M") {
            return sexo;
        }
        else {
            return "H";
        }
    }
    toString() {
        return `Nombre: ${this._nombre}<br/>Edad: ${this._edad}<br/>DNI: ${this._dni}<br/>Sexo: ${this._sexo}<br/>Peso: ${this._peso}<br/>Altura: ${this._altura}<br/>IMC: ${this.calcularIMC()}<br/>`;
    }
    generaDNI() {
        const letraDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        let numDni = Math.floor((Math.random() * 99999999));
        let strNumDni = String(numDni);
        while (strNumDni.length < 8) {
            strNumDni = "0" + strNumDni;
        }
        return strNumDni + letraDni[numDni % 23];
    }
}
class ValidarSexoHM {
    isValidSexo(persona) {
        return (persona.sexo == "M" || persona.sexo == "H");
    }
}
let persona1 = new Persona("Pedro", 22, "H", 77, 1.80);
console.log(persona1);
let validSexo = new ValidarSexoHM;
if (validSexo.isValidSexo(persona1)) {
    document.writeln(persona1.toString());
}
else {
    window.alert(`El sexo "${persona1.sexo}" no es valido.`);
}
//# sourceMappingURL=app.js.map