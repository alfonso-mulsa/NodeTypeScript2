class Animal {
    private _yearNacimiento: number = 0;
    private _mesNacimiento: number = 0;
    private _diaNacimiento: number = 0;
    private _nombre: string = "";
    constructor(yearNacimiento: number, mesNacimiento: number, diaNacimiento: number, nombre: string) {
        this._yearNacimiento = yearNacimiento;
        this._mesNacimiento = mesNacimiento;
        this._diaNacimiento = diaNacimiento;
        this._nombre = nombre;
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
        return `Nombre: ${this._nombre}<br/>Fecha de nacimiento: ${this._diaNacimiento}/${this._mesNacimiento}/${this._yearNacimiento}<br/>`;
    }
}

class Mamifero extends Animal {
    mesesGestacion: number = 0;
}

//class Figura {
//    private _posX: number = 0;
//    private _posY: number = 0;
//    private _material: string = "";
//    constructor(posX: number, posY: number, material: string) {
//        this.posX = posX;
//        this.posY = posY;
//        this._material = material;
//    }
//    public set posX(numero: number) {
//        if ((numero < 0) || (numero > 200)) {
//            this._posX = 0;
//        } else {
//            this._posX = numero;
//        }
//    }
//    public get posX(): number {
//        return this._posX;
//    }
//    public set posY(numero: number) {
//        if ((numero < 0) || (numero > 200)) {
//            this._posY = 0;
//        } else {
//            this._posY = numero;
//        }
//    }
//    public get posY(): number {
//        return this._posY;
//    }
//    public set material(tipoMaterial: string) {
//        this._material = tipoMaterial;
//    }
//    public get material(): string {
//        return this._material.toUpperCase();
//    }

//    imprime(): string {
//        return `Posicion X: ${this._posX}<br/>Posicion Y: ${this._posY}<br/>Material: ${this._material}<br/><br/>`;
//    }
//}

//let figura1 = new Figura(25, 180, "Plastico");
//document.write(figura1.imprime());
//document.write(figura1.material + "<br/><br/>");

//let figura2 = new Figura(123, 65, "Hierro");
//document.write(figura2.imprime());
//document.write(figura2.material + "<br/><br/>");

//let figura3 = new Figura(89, 223, "Aluminio");
//document.write(figura3.imprime());
//document.write(figura3.material + "<br/><br/>");
