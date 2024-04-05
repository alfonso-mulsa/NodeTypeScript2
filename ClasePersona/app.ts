class Persona {
    private _nombre: string = "";
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _edad: number = 0;
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    private _dni: string = "";
    public get dni(): string {
        return this._dni;
    }
    private _sexo: string = "";
    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }
    private _peso: number = 0;
    public get peso(): number {
        return this._peso;
    }
    public set peso(value: number) {
        this._peso = value;
    }
    private _altura: number = 0;
    public get altura(): number {
        return this._altura;
    }
    public set altura(value: number) {
        this._altura = value;
    }
    constructor(nombre: string, edad: number, sexo: string, peso: number, altura: number) {
        this.nombre = nombre;
        this.edad = edad;
        this._dni = this.generaDNI();
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(): number {
        let imc = this._peso / (this._altura ^ 2);
        if (imc < 20) {
            return -1;
        }
        else {
            if (imc > 25) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }

    esMayorDeEdad(): boolean {
        return (this._edad >= 18);
    }

    private comprobarSexo(sexo: string): string {
        if (sexo == "M") {
            return sexo;
        } else {
            return "H";
        }
    }

    toString(): string {
        return `Nombre: ${this._nombre}<br/>Edad: ${this._edad}<br/>DNI: ${this._dni}<br/>Sexo: ${this._sexo}<br/>Peso: ${this._peso}<br/>Altura: ${this._altura}<br/>IMC: ${this.calcularIMC()}<br/>`;
    }

    private generaDNI(): string {
        const letraDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        let numDni = Math.floor((Math.random() * 99999999));
        let strNumDni = String(numDni);
        while (strNumDni.length < 8) {
            strNumDni = "0" + strNumDni;
        }
        return strNumDni + letraDni[numDni % 23];
    }
}

interface IValidadorSexoPersona {
    isValidSexo(persona: Persona): boolean;
}

class ValidarSexoHM implements IValidadorSexoPersona {
    isValidSexo(persona: Persona): boolean {
        return (persona.sexo == "M" || persona.sexo == "H");
    }
}

let persona1 = new Persona("Pedro", 22, "H", 77, 1.80);
let validSexo = new ValidarSexoHM;
if (validSexo.isValidSexo(persona1)) {
    document.writeln(persona1.toString());
}
else {
    window.alert(`El sexo "${persona1.sexo}" no es valido.`);
}
