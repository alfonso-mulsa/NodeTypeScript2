"use strict";
class Figura {
    constructor(posX, posY, material) {
        this._posX = 0;
        this._posY = 0;
        this._material = "";
        this.posX = posX;
        this.posY = posY;
        this._material = material;
    }
    set posX(numero) {
        if ((numero < 0) || (numero > 200)) {
            this._posX = 0;
        }
        else {
            this._posX = numero;
        }
    }
    get posX() {
        return this._posX;
    }
    set posY(numero) {
        if ((numero < 0) || (numero > 200)) {
            this._posY = 0;
        }
        else {
            this._posY = numero;
        }
    }
    get posY() {
        return this._posY;
    }
    set material(tipoMaterial) {
        this._material = tipoMaterial;
    }
    get material() {
        return this._material.toUpperCase();
    }
    imprime() {
        return `Posicion X: ${this._posX}<br/>Posicion Y: ${this._posY}<br/>Material: ${this._material}<br/><br/>`;
    }
}
let figura1 = new Figura(25, 180, "Plastico");
document.write(figura1.imprime());
document.write(figura1.material + "<br/><br/>");
let figura2 = new Figura(123, 65, "Hierro");
document.write(figura2.imprime());
document.write(figura2.material + "<br/><br/>");
let figura3 = new Figura(89, 223, "Aluminio");
document.write(figura3.imprime());
document.write(figura3.material + "<br/><br/>");
//envio1.precio = 100;
//envio1.recibido = true;
//document.write(envio1.imprime());
//# sourceMappingURL=app.js.map