"use strict";
const precioxDef = 100;
const colorxDef = "Blanco";
const consumoxDef = "F";
const pesoxDef = 5;
const cargaxDef = 5;
const resolucionxDef = 20;
class Electrodomestico {
    get precioBase() {
        return this._precioBase;
    }
    set precioBase(value) {
        if (value <= 0) {
            this._precioBase = precioxDef;
        }
        else {
            this._precioBase = value;
        }
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = this.comprobarColor(value);
    }
    get consumo() {
        return this._consumo;
    }
    set consumo(value) {
        this._consumo = this.comprobarConsumoEnergetico(value);
    }
    get peso() {
        return this._peso;
    }
    set peso(value) {
        if (value <= 0) {
            this._peso = pesoxDef;
        }
        else {
            this._peso = value;
        }
    }
    constructor(precioBase, color, consumo, peso) {
        this._precioBase = precioxDef;
        this._color = colorxDef;
        this._consumo = consumoxDef;
        this._peso = pesoxDef;
        this.precioBase = precioBase;
        this.color = color;
        this.consumo = consumo;
        this.peso = peso;
    }
    comprobarColor(color) {
        if (color.toUpperCase() == "NEGRO" || color.toUpperCase() == "ROJO" || color.toUpperCase() == "AZUL" || color.toUpperCase() == "GRIS") {
            return color.toUpperCase();
        }
        else {
            return "BLANCO";
        }
    }
    comprobarConsumoEnergetico(consumo) {
        switch (consumo.toUpperCase()) {
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
                return consumo.toUpperCase();
            default:
                return "F";
        }
    }
    precioFinal() {
        let precio = this._precioBase;
        switch (this._consumo) {
            case "A": precio += 100;
            case "B": precio += 80;
            case "C": precio += 60;
            case "D": precio += 50;
            case "E": precio += 30;
            case "F": precio += 10;
        }
        if (this._peso <= 19) {
            precio += 10;
        }
        if (this._peso >= 20 && this._peso <= 49) {
            precio += 50;
        }
        if (this._peso >= 50 && this._peso <= 79) {
            precio += 80;
        }
        if (this._peso >= 80) {
            precio += 100;
        }
        return precio;
    }
}
class Lavadora extends Electrodomestico {
    get carga() {
        return this._carga;
    }
    set carga(value) {
        if (value <= 0) {
            this._carga = cargaxDef;
        }
        else {
            this._carga = value;
        }
    }
    constructor(precioBase, color, consumo, peso, carga) {
        super(precioBase, color, consumo, peso);
        this._carga = cargaxDef;
        this.carga = carga;
    }
    precioFinal() {
        if (this._carga > 30) {
            return super.precioFinal() + 50;
        }
        else {
            return super.precioFinal();
        }
    }
}
class Television extends Electrodomestico {
    get resolucion() {
        return this._resolucion;
    }
    set resolucion(value) {
        if (value <= 0) {
            this._resolucion = resolucionxDef;
        }
        else {
            this._resolucion = value;
        }
    }
    get sintonizadorTDT() {
        return this._sintonizadorTDT;
    }
    set sintonizadorTDT(value) {
        this._sintonizadorTDT = value;
    }
    constructor(precioBase, color, consumo, peso, resolucion, sintonizadorTDT) {
        super(precioBase, color, consumo, peso);
        this._resolucion = resolucionxDef;
        this._sintonizadorTDT = false;
        this.resolucion = resolucion;
        this.sintonizadorTDT = sintonizadorTDT;
    }
    precioFinal() {
        let precio = super.precioFinal();
        if (this._resolucion > 40) {
            precio = Number((precio * 1.3).toFixed(2));
        }
        if (this._sintonizadorTDT) {
            precio += 50;
        }
        return precio;
    }
}
let nuevoElec = new Electrodomestico(0, "Rojo", "e", 0);
console.log(nuevoElec);
//# sourceMappingURL=app.js.map