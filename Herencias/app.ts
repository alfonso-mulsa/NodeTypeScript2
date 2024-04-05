class Animal {
    private _yearNacimiento: number = 0;
    private _mesNacimiento: number = 0;
    private _diaNacimiento: number = 0;
    private _nombre: string = "";
    constructor(yearNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string) {
        this.yearNacimiento = yearNacimiento;
        this.mesNacimiento = mesNacimiento;
        this.diaNacimiento = diaNacimiento;
        this.nombre = nombre;
    }
    public get yearNacimiento(): number {
        return this._yearNacimiento;
    }
    public set yearNacimiento(value: number) {
        if (value < 2000) {
            this._yearNacimiento = 2000;
        } else if (value > 2024) {
            this._yearNacimiento = 2024;
        } else {
            this._yearNacimiento = value;
        }
    }
    public get mesNacimiento(): number {
        return this._mesNacimiento;
    }
    public set mesNacimiento(value: number) {
        if (value < 1) {
            this._mesNacimiento = 1;
        } else if (value > 12) {
            this._mesNacimiento = 12;
        } else {
            this._mesNacimiento = value;
        }
    }
    public get diaNacimiento(): number {
        return this._diaNacimiento;
    }
    public set diaNacimiento(value: number) {
        if (value < 1) {
            this._diaNacimiento = 1;
        } else if (value > 31) {
            this._diaNacimiento = 31;
        } else {
            this._diaNacimiento = value;
        }
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        switch (value.length) {
            case 0:
                this._nombre = "Pi";
                break;
            case 1:
                this._nombre = value + value;
                break
            default:
                this._nombre = value;
        }
    }
    dameEdad(): number {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this._yearNacimiento;
        let m = hoy.getMonth() - this._mesNacimiento;

        if (m < 0 || (m === 0 && hoy.getDate() < this._diaNacimiento)) {
            edad--;
        }

        return edad;
    }
    dameDatos(): string {
        return `Nombre: ${this._nombre}<br/>Fecha de nacimiento: ${this._diaNacimiento}/${this._mesNacimiento}/${this._yearNacimiento}<br/>Edad: ${this.dameEdad()}<br/>`;
    }
}
class Mamifero extends Animal {
    private _mesesGestacion: number = 0;
    constructor(yearNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string, mesesGestacion: number) {
        super(yearNacimiento, mesNacimiento, diaNacimiento, nombre);
        this.mesesGestacion = mesesGestacion;
    }
    public get mesesGestacion(): number {
        return this._mesesGestacion;
    }
    public set mesesGestacion(value: number) {
        if (value < 1) {
            this._mesesGestacion = 1;
        } else if (value > 18) {
            this._mesesGestacion = 18;
        } else {
            this._mesesGestacion = value;
        }
    }
    dameDatos(): string {
        return `${super.dameDatos()}Meses de gestacion: ${this._mesesGestacion}<br/>`;
    }
}
class Primate extends Mamifero {
    private _masaCerebral: number = 0;
    constructor(yearNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string, mesesGestacion: number, masaCerebral: number) {
        super(yearNacimiento, mesNacimiento, diaNacimiento, nombre, mesesGestacion);
        this.masaCerebral = masaCerebral;
    }
    public get masaCerebral(): number {
        return this._masaCerebral;
    }
    public set masaCerebral(value: number) {
        if (value < 100) {
            this._masaCerebral = 100;
        } else if (value > 2000) {
            this._masaCerebral = 2000;
        } else {
            this._masaCerebral = value;
        }
    }
    proporcionMasaCerebral(): number {
        return Number((this._masaCerebral / this.mesesGestacion).toFixed(2));
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
        return `${super.dameDatos()}Apellidos: ${this.apellidos}<br/>`;
    }
}

let humano1 = new Humano(2003, 12, 18, "Pepito", 9, 1800, "Grillo");
document.writeln(humano1.dameDatos());
