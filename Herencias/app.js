"use strict";
class Animal {
    constructor(yearNacimiento, mesNacimiento, diaNacimiento, nombre) {
        this._yearNacimiento = 0;
        this._mesNacimiento = 0;
        this._diaNacimiento = 0;
        this._nombre = "";
        this.yearNacimiento = yearNacimiento;
        this.mesNacimiento = mesNacimiento;
        this.diaNacimiento = diaNacimiento;
        this.nombre = nombre;
    }
    get yearNacimiento() {
        return this._yearNacimiento;
    }
    set yearNacimiento(value) {
        if (value < 2000) {
            this._yearNacimiento = 2000;
        }
        else if (value > 2024) {
            this._yearNacimiento = 2024;
        }
        else {
            this._yearNacimiento = value;
        }
    }
    get mesNacimiento() {
        return this._mesNacimiento;
    }
    set mesNacimiento(value) {
        if (value < 1) {
            this._mesNacimiento = 1;
        }
        else if (value > 12) {
            this._mesNacimiento = 12;
        }
        else {
            this._mesNacimiento = value;
        }
    }
    get diaNacimiento() {
        return this._diaNacimiento;
    }
    set diaNacimiento(value) {
        if (value < 1) {
            this._diaNacimiento = 1;
        }
        else if (value > 31) {
            this._diaNacimiento = 31;
        }
        else {
            this._diaNacimiento = value;
        }
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        switch (value.length) {
            case 0:
                this._nombre = "Pi";
                break;
            case 1:
                this._nombre = value + value;
                break;
            default:
                this._nombre = value;
        }
    }
    dameEdad() {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this._yearNacimiento;
        let m = hoy.getMonth() - this._mesNacimiento;
        if (m < 0 || (m === 0 && hoy.getDate() < this._diaNacimiento)) {
            edad--;
        }
        return edad;
    }
    dameDatos() {
        return `Nombre: ${this._nombre}<br/>Fecha de nacimiento: ${this._diaNacimiento}/${this._mesNacimiento}/${this._yearNacimiento}<br/>Edad: ${this.dameEdad()}<br/>`;
    }
}
class Mamifero extends Animal {
    constructor(yearNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion) {
        super(yearNacimiento, mesNacimiento, diaNacimiento, nombre);
        this._mesesGestacion = 0;
        this.mesesGestacion = mesesGestacion;
    }
    get mesesGestacion() {
        return this._mesesGestacion;
    }
    set mesesGestacion(value) {
        if (value < 1) {
            this._mesesGestacion = 1;
        }
        else if (value > 18) {
            this._mesesGestacion = 18;
        }
        else {
            this._mesesGestacion = value;
        }
    }
    dameDatos() {
        return `${super.dameDatos()}Meses de gestacion: ${this._mesesGestacion}<br/>`;
    }
}
class Primate extends Mamifero {
    constructor(yearNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion, masaCerebral) {
        super(yearNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion);
        this._masaCerebral = 0;
        this.masaCerebral = masaCerebral;
    }
    get masaCerebral() {
        return this._masaCerebral;
    }
    set masaCerebral(value) {
        if (value < 100) {
            this._masaCerebral = 100;
        }
        else if (value > 2000) {
            this._masaCerebral = 2000;
        }
        else {
            this._masaCerebral = value;
        }
    }
    proporcionMasaCerebral() {
        return Number((this._masaCerebral / this.mesesGestacion).toFixed(2));
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
        return `${super.dameDatos()}Apellidos: ${this.apellidos}<br/>`;
    }
}
let humano1 = new Humano(2003, 12, 18, "Pepito", 9, 1800, "Grillo");
document.writeln(humano1.dameDatos());
//# sourceMappingURL=app.js.map