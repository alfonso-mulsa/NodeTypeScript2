class Fecha {
    anyo: number = 0;
    mes: number = 0;
    dia: number = 0;
    constructor(Anyo: number, Mes: number, Dia: number) {
        this.anyo = Anyo;
        this.mes = Mes;
        this.dia = Dia;
    }
    dameEdad(): number {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.anyo;
        let m = hoy.getMonth() - this.mes;
        if (m < 0 || (m === 0 && hoy.getDate() < this.dia)) {
            edad--;
        }
        return edad;
    }
    dameFecha(): string {
        return `${this.anyo}/${this.mes}/${this.dia}`;
    }
}
class Animal {
    fechaNacimiento: Fecha;
    nombre: string = "";
    constructor(anyoNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string) {
        this.fechaNacimiento = new Fecha(anyoNacimiento, mesNacimiento, diaNacimiento);
        this.nombre = nombre;
    }
    dameDatos(): string {
        return `Nombre: ${this.nombre}<br/>Fecha de nacimiento: ${this.fechaNacimiento.dameFecha()}<br/>Edad: ${this.fechaNacimiento.dameEdad()}<br/>`;
    }
}
class Mamifero extends Animal {
    mesesGestacion: number = 0;
    constructor(anyoNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string, mesesGestacion: number) {
        super(anyoNacimiento, mesNacimiento, diaNacimiento, nombre);
        this.mesesGestacion = mesesGestacion;
    }
    dameDatos(): string {
        return `${super.dameDatos()}Meses de gestacion: ${this.mesesGestacion}<br/>`;
    }
}
class Primate extends Mamifero {
    masaCerebral: number = 0;
    constructor(anyoNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string, mesesGestacion: number, masaCerebral: number) {
        super(anyoNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion);
        this.masaCerebral = masaCerebral;
    }
    proporcionMasaCerebral(): number {
        return Number((this.masaCerebral / this.mesesGestacion).toFixed(2));
    }
    dameDatos(): string {
        return `${super.dameDatos()}Proporcion masa cerebral: ${this.proporcionMasaCerebral()}<br/>`;
    }
}
class Humano extends Primate {
    apellidos: string = "";
    constructor(yearNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string, mesesGestacion: number, masaCerebral: number, apellidos: string) {
        super(yearNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion, masaCerebral);
        this.apellidos = apellidos;
    }
    dameDatos(): string {
        return `Apellidos: ${this.apellidos}<br/>${super.dameDatos()}`;
    }
}

// Definición de los validadores
interface IValidadorFecha {
    isValid(fecha: Fecha): boolean;
}
class ValidarFecha00_24 implements IValidadorFecha {
    isValid(fecha: Fecha): boolean {
        return fecha.anyo >= 2000 && fecha.anyo <= 2024 && fecha.mes >= 1 && fecha.mes <= 12 && fecha.dia >= 1 && fecha.dia <= 31;
    }
}
class ValidarFecha80_20 implements IValidadorFecha {
    isValid(fecha: Fecha): boolean {
        return fecha.anyo >= 1980 && fecha.anyo <= 2020 && fecha.mes >= 1 && fecha.mes <= 12 && fecha.dia >= 1 && fecha.dia <= 31;
    }
}
class ValidarFecha90_23 implements IValidadorFecha {
    isValid(fecha: Fecha): boolean {
        return fecha.anyo >= 1990 && fecha.anyo <= 2023 && fecha.mes >= 1 && fecha.mes <= 12 && fecha.dia >= 1 && fecha.dia <= 31;
    }
}
interface IValidadorAnimal {
    isValid(animal: Animal): boolean;
}
class ValidarAnimal implements IValidadorAnimal {
    isValid(animal: Animal): boolean {
        return new ValidarFecha00_24().isValid(animal.fechaNacimiento) && animal.nombre.length >= 2;
    }
}
interface IValidadorMamifero {
    isValid(mamifero: Mamifero): boolean;
}
class ValidarMamifero1_18 implements IValidadorMamifero {
    isValid(mamifero: Mamifero): boolean {
        return new ValidarFecha00_24().isValid(mamifero.fechaNacimiento) && mamifero.nombre.length >= 2 && mamifero.mesesGestacion >= 1 && mamifero.mesesGestacion <= 18;
    }
}
class ValidarMamifero1_29 implements IValidadorMamifero {
    isValid(mamifero: Mamifero): boolean {
        return new ValidarFecha00_24().isValid(mamifero.fechaNacimiento) && mamifero.nombre.length >= 2 && mamifero.mesesGestacion >= 1 && mamifero.mesesGestacion <= 29;
    }
}
interface IValidadorPrimate {
    isValid(primate: Primate): boolean;
}
class ValidarPrimate implements IValidadorPrimate {
    isValid(primate: Primate): boolean {
        return new ValidarFecha00_24().isValid(primate.fechaNacimiento) && primate.nombre.length >= 2 && primate.mesesGestacion >= 5 && primate.mesesGestacion <= 12
            && primate.masaCerebral >= 100 && primate.masaCerebral <= 2000;
    }
}
interface IValidadorHumano {
    isValid(humano: Humano): boolean;
}
class ValidarHumano implements IValidadorHumano {
    isValid(humano: Humano): boolean {
        return new ValidarFecha00_24().isValid(humano.fechaNacimiento) && humano.nombre.length >= 2 && humano.mesesGestacion >= 6 && humano.mesesGestacion <= 9
            && humano.masaCerebral >= 1200 && humano.masaCerebral <= 2000;
    }
}

// Creación de los validadores
let _ValidarAnimal: IValidadorAnimal = new ValidarAnimal();
let _ValidarMamifero: IValidadorMamifero = new ValidarMamifero1_18();
let _ValidarPrimate: IValidadorPrimate = new ValidarPrimate();
let _ValidarHumano: IValidadorHumano = new ValidarHumano();

// Creación de objetos y su validación
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
