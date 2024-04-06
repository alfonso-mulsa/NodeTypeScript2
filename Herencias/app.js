"use strict";
class Fecha {
    constructor(Anyo, Mes, Dia) {
        this.anyo = 0;
        this.mes = 0;
        this.dia = 0;
        this.anyo = Anyo;
        this.mes = Mes;
        this.dia = Dia;
    }
    dameEdad() {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.anyo;
        let m = hoy.getMonth() - this.mes;
        if (m < 0 || (m === 0 && hoy.getDate() < this.dia)) {
            edad--;
        }
        return edad;
    }
    dameFecha() {
        return `${this.anyo}/${this.mes}/${this.dia}`;
    }
}
class Animal {
    constructor(anyoNacimiento, mesNacimiento, diaNacimiento, nombre) {
        this.nombre = "";
        this.fechaNacimiento = new Fecha(anyoNacimiento, mesNacimiento, diaNacimiento);
        this.nombre = nombre;
    }
    dameDatos() {
        return `Nombre: ${this.nombre}<br/>Fecha de nacimiento: ${this.fechaNacimiento.dameFecha()}<br/>Edad: ${this.fechaNacimiento.dameEdad()}<br/>`;
    }
}
class Mamifero extends Animal {
    constructor(anyoNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion) {
        super(anyoNacimiento, mesNacimiento, diaNacimiento, nombre);
        this.mesesGestacion = 0;
        this.mesesGestacion = mesesGestacion;
    }
    dameDatos() {
        return `${super.dameDatos()}Meses de gestacion: ${this.mesesGestacion}<br/>`;
    }
}
class Primate extends Mamifero {
    constructor(anyoNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion, masaCerebral) {
        super(anyoNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion);
        this.masaCerebral = 0;
        this.masaCerebral = masaCerebral;
    }
    proporcionMasaCerebral() {
        return Number((this.masaCerebral / this.mesesGestacion).toFixed(2));
    }
    dameDatos() {
        return `${super.dameDatos()}Proporcion masa cerebral: ${this.proporcionMasaCerebral()}<br/>`;
    }
}
class Humano extends Primate {
    constructor(yearNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion, masaCerebral, apellidos) {
        super(yearNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion, masaCerebral);
        this.apellidos = "";
        this.apellidos = apellidos;
    }
    dameDatos() {
        return `Apellidos: ${this.apellidos}<br/>${super.dameDatos()}`;
    }
}
class ValidarFecha00_24 {
    isValid(fecha) {
        return fecha.anyo >= 2000 && fecha.anyo <= 2024 && fecha.mes >= 1 && fecha.mes <= 12 && fecha.dia >= 1 && fecha.dia <= 31;
    }
}
class ValidarFecha80_20 {
    isValid(fecha) {
        return fecha.anyo >= 1980 && fecha.anyo <= 2020 && fecha.mes >= 1 && fecha.mes <= 12 && fecha.dia >= 1 && fecha.dia <= 31;
    }
}
class ValidarFecha90_23 {
    isValid(fecha) {
        return fecha.anyo >= 1990 && fecha.anyo <= 2023 && fecha.mes >= 1 && fecha.mes <= 12 && fecha.dia >= 1 && fecha.dia <= 31;
    }
}
class ValidarAnimal {
    isValid(animal) {
        return new ValidarFecha00_24().isValid(animal.fechaNacimiento) && animal.nombre.length >= 2;
    }
}
class ValidarMamifero1_18 {
    isValid(mamifero) {
        return new ValidarFecha00_24().isValid(mamifero.fechaNacimiento) && mamifero.nombre.length >= 2 && mamifero.mesesGestacion >= 1 && mamifero.mesesGestacion <= 18;
    }
}
class ValidarMamifero1_29 {
    isValid(mamifero) {
        return new ValidarFecha00_24().isValid(mamifero.fechaNacimiento) && mamifero.nombre.length >= 2 && mamifero.mesesGestacion >= 1 && mamifero.mesesGestacion <= 29;
    }
}
class ValidarPrimate {
    isValid(primate) {
        return new ValidarFecha00_24().isValid(primate.fechaNacimiento) && primate.nombre.length >= 2 && primate.mesesGestacion >= 5 && primate.mesesGestacion <= 12
            && primate.masaCerebral >= 100 && primate.masaCerebral <= 2000;
    }
}
class ValidarHumano {
    isValid(humano) {
        return new ValidarFecha00_24().isValid(humano.fechaNacimiento) && humano.nombre.length >= 2 && humano.mesesGestacion >= 6 && humano.mesesGestacion <= 9
            && humano.masaCerebral >= 1200 && humano.masaCerebral <= 2000;
    }
}
// Creaci�n de los validadores
let _ValidarAnimal = new ValidarAnimal();
let _ValidarMamifero = new ValidarMamifero1_18();
let _ValidarPrimate = new ValidarPrimate();
let _ValidarHumano = new ValidarHumano();
let animal1 = new Animal(2012, 8, 23, "Krasty");
if (_ValidarAnimal.isValid(animal1)) {
    document.write(`ANIMAL<br/>${animal1.dameDatos()}`);
}
let mamifero1 = new Mamifero(2019, 5, 11, "D", 12);
if (_ValidarMamifero.isValid(mamifero1)) {
    document.write(`MAMIFERO<br/>${mamifero1.dameDatos()}`);
}
let primate1 = new Primate(2014, 9, 29, "Hommer", 8, 1000);
if (_ValidarPrimate.isValid(primate1)) {
    document.write(`PRIMATE<br/>${primate1.dameDatos()}`);
}
let humano1 = new Humano(2003, 12, 18, "Pepito", 8, 1800, "Grillo");
if (_ValidarHumano.isValid(humano1)) {
    document.write(`HUMANO<br/>${humano1.dameDatos()}`);
}
//# sourceMappingURL=app.js.map