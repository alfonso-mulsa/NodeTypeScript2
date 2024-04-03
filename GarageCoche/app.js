"use strict";
class Coche {
    constructor(matricula, potencia, velocidad, modelo) {
        this.matricula = "";
        this.potencia = 0;
        this.velocidad = 0;
        this.modelo = "";
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }
    imprime() {
        return `El coche con matr�cula ${this.matricula} de model ${this.modelo}, tiene una velocidad de ${this.velocidad} para una potencia de ${this.potencia}<br/>`;
    }
    velocidadCrucero() {
        return Number((this.velocidad / this.potencia).toFixed(2));
    }
}
//function calcularMedia(numero1, numero2, numero3) {
//    return ((numero1 + numero2 + numero3) / 3).toFixed(2);
//}
function calcularMedia(...numeros) {
    let suma = 0;
    for (let contador = 0; contador < numeros.length; contador++) {
        suma += numeros[contador];
    }
    return Number((suma / numeros.length).toFixed(2));
}
let coche1 = new Coche("7643HT", 60, 105.8, "Seat 600");
let coche2 = new Coche("456KLG", 125, 187.9, "Volvo 678");
let coche3 = new Coche("2967FED", 190, 245.7, "Mercedes 500");
document.write(coche1.imprime());
document.write(`Velocidad crucero: ${coche1.velocidadCrucero()}<br/><br/>`);
document.write(coche2.imprime());
document.write(`Velocidad crucero: ${coche2.velocidadCrucero()}<br/><br/>`);
document.write(coche3.imprime());
document.write(`Velocidad crucero: ${coche3.velocidadCrucero()}<br/><br/>`);
document.write(`Velocidad media: ${calcularMedia(coche1.velocidad, coche2.velocidad, coche3.velocidad)}<br/>`);
document.write(`Potencia media: ${calcularMedia(coche1.potencia, coche2.potencia, coche3.potencia)}<br/>`);
//# sourceMappingURL=app.js.map