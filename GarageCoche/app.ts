class Coche {
    matricula: string = "";
    potencia: number = 0;
    velocidad: number = 0;
    modelo: string = "";

    constructor(matricula: string, potencia: number, velocidad: number, modelo: string) {
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }

    imprime(): string {
        return `El coche con matrícula ${this.matricula} de model ${this.modelo}, tiene una velocidad de ${this.velocidad} para una potencia de ${this.potencia}<br/>`;
    }

    velocidadCrucero(): number {
        return Number((this.velocidad / this.potencia).toFixed(2));
    }
}

function calcularMedia(...numeros: number[]): number {
    let suma = 0;
    for (let contador = 0; contador < numeros.length; contador++) {
        suma += numeros[contador];
    }
    return Number((suma / numeros.length).toFixed(2));
}
let coche1 = new Coche("7643HT", 60, 105.8, "Seat 600");
let coche2 = new Coche("4856KLG", 125, 187.9, "Volvo 678");
let coche3 = new Coche("2967FED", 190, 245.7, "Mercedes 500");

//document.write(coche1.imprime());
//document.write(`Velocidad crucero: ${coche1.velocidadCrucero()}<br/><br/>`);
//document.write(coche2.imprime());
//document.write(`Velocidad crucero: ${coche2.velocidadCrucero()}<br/><br/>`);
//document.write(coche3.imprime());
//document.write(`Velocidad crucero: ${coche3.velocidadCrucero()}<br/><br/>`);

//document.write(`Velocidad media: ${calcularMedia(coche1.velocidad, coche2.velocidad, coche3.velocidad)}<br/>`);
//document.write(`Potencia media: ${calcularMedia(coche1.potencia, coche2.potencia, coche3.potencia)}<br/>`);