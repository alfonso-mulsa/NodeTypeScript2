"use strict";
const precioxDef = 100;
const colorxDef = "Blanco";
const consumoxDef = "F";
const pesoxDef = 5;
const cargaxDef = 5;
const resolucionxDef = 20;
class Electrodomestico {
    constructor() {
        this._precioBase = precioxDef;
        this._color = colorxDef;
        this._consumo = consumoxDef;
        this._peso = pesoxDef;
    }
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
    //constructor(precioBase: number, color: string, consumo: string, peso: number) {
    //    this.precioBase = precioBase;
    //    this.color = color;
    //    this.consumo = consumo;
    //    this.peso = peso;
    //}
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
            case "A":
                precio += 100;
                break;
            case "B":
                precio += 80;
                break;
            case "C":
                precio += 60;
                break;
            case "D":
                precio += 50;
                break;
            case "E":
                precio += 30;
                break;
            case "F":
                precio += 10;
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
class CrearElectrodomestico {
    crearElectrodomestico(precioBase, color, consumo, peso) {
        let nuevoElec = new Electrodomestico;
        nuevoElec.precioBase = precioBase;
        nuevoElec.color = color;
        nuevoElec.consumo = consumo;
        nuevoElec.peso = peso;
        return nuevoElec;
    }
}
class Lavadora extends Electrodomestico {
    constructor() {
        super(...arguments);
        this._carga = cargaxDef;
    }
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
    //constructor(precioBase: number, color: string, consumo: string, peso: number, carga: number) {
    //    super(precioBase, color, consumo, peso);
    //    this.carga = carga;
    //}
    precioFinal() {
        if (this._carga > 30) {
            return super.precioFinal() + 50;
        }
        else {
            return super.precioFinal();
        }
    }
}
class CrearLavadora {
    crearLavadora(precioBase, color, consumo, peso, carga) {
        let _crearElec = new CrearElectrodomestico;
        let nuevoElec = _crearElec.crearElectrodomestico(precioBase, color, consumo, peso);
        let nuevaLava = new Lavadora();
        nuevaLava.precioBase = nuevoElec.precioBase;
        nuevaLava.color = nuevoElec.color;
        nuevaLava.consumo = nuevoElec.consumo;
        nuevaLava.peso = nuevoElec.peso;
        nuevaLava.carga = carga;
        return nuevaLava;
    }
}
class Television extends Electrodomestico {
    constructor() {
        super(...arguments);
        this._resolucion = resolucionxDef;
        this._sintonizadorTDT = false;
    }
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
    //constructor(precioBase: number, color: string, consumo: string, peso: number, resolucion: number, sintonizadorTDT: boolean) {
    //    super(precioBase, color, consumo, peso);
    //    this.resolucion = resolucion;
    //    this.sintonizadorTDT = sintonizadorTDT;
    //}
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
class CrearTelevision {
    crearTelevision(precioBase, color, consumo, peso, resolucion, sintonizadorTDT) {
        let _crearElec = new CrearElectrodomestico;
        let nuevoElec = _crearElec.crearElectrodomestico(precioBase, color, consumo, peso);
        let nuevaTele = new Television();
        nuevaTele.precioBase = nuevoElec.precioBase;
        nuevaTele.color = nuevoElec.color;
        nuevaTele.consumo = nuevoElec.consumo;
        nuevaTele.peso = nuevoElec.peso;
        nuevaTele.resolucion = resolucion;
        nuevaTele.sintonizadorTDT = sintonizadorTDT;
        return nuevaTele;
    }
}
let _crearElec = new CrearElectrodomestico();
let newElec = _crearElec.crearElectrodomestico(82, "Rojo", "d", 0);
console.log("Electrodomestico: " + newElec.color);
let _crearLava = new CrearLavadora();
let newLava = _crearLava.crearLavadora(318, "Gris", "e", 35, 9);
console.log("Lavadora: " + newLava.color);
let _crearTele = new CrearTelevision();
let newTele = _crearTele.crearTelevision(250, "Negro", "f", 12, 32, true);
console.log("Television: " + newTele.color);
//# sourceMappingURL=app.js.map