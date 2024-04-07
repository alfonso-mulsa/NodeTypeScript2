const precioxDef: number = 100;
const colorxDef: string = "Blanco";
const consumoxDef: string = "F";
const pesoxDef: number = 5;
const cargaxDef: number = 5;
const resolucionxDef: number = 20;
class Electrodomestico {
    private _precioBase: number = precioxDef;
    public get precioBase(): number {
        return this._precioBase;
    }
    public set precioBase(value: number) {
        if (value <= 0) {
            this._precioBase = precioxDef;
        }
        else {
            this._precioBase = value;
        }
    }
    private _color: string = colorxDef;
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = this.comprobarColor(value);
    }
    private _consumo: string = consumoxDef;
    public get consumo(): string {
        return this._consumo;
    }
    public set consumo(value: string) {
        this._consumo = this.comprobarConsumoEnergetico(value);
    }
    private _peso: number = pesoxDef;
    public get peso(): number {
        return this._peso;
    }
    public set peso(value: number) {
        if (value <= 0) {
            this._peso = pesoxDef;
        }
        else {
            this._peso = value;
        }
    }
    constructor(precioBase: number, color: string, consumo: string, peso: number) {
        this.precioBase = precioBase;
        this.color = color;
        this.consumo = consumo;
        this.peso = peso;
    }
    private comprobarColor(color: string): string {
        if (color.toUpperCase() == "NEGRO" || color.toUpperCase() == "ROJO" || color.toUpperCase() == "AZUL" || color.toUpperCase() == "GRIS") {
            return color.toUpperCase();
        }
        else {
            return "BLANCO";
        }
    }
    private comprobarConsumoEnergetico(consumo: string): string {
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
    precioFinal(): number {
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
        if (this._peso>=20 && this._peso <= 49) {
            precio += 50;
        }
        if (this._peso>=50 && this._peso <= 79) {
            precio += 80;
        }
        if (this._peso>=80) {
            precio += 100;
        }
        return precio;
    }
}
class Lavadora extends Electrodomestico {
    private _carga: number = cargaxDef;
    public get carga(): number {
        return this._carga;
    }
    public set carga(value: number) {
        if (value <= 0) {
            this._carga = cargaxDef;
        }
        else {
            this._carga = value;
        }
    }
    constructor(precioBase: number, color: string, consumo: string, peso: number, carga: number) {
        super(precioBase, color, consumo, peso);
        this.carga = carga;
    }
    precioFinal(): number {
        if (this._carga > 30) {
            return super.precioFinal() + 50;
        }
        else {
            return super.precioFinal();
        }
    }
}
class Television extends Electrodomestico {
    private _resolucion: number = resolucionxDef;
    public get resolucion(): number {
        return this._resolucion;
    }
    public set resolucion(value: number) {
        if (value <= 0) {
            this._resolucion = resolucionxDef
        }
        else {
            this._resolucion = value;
        }
    }
    private _sintonizadorTDT: boolean = false;
    public get sintonizadorTDT(): boolean {
        return this._sintonizadorTDT;
    }
    public set sintonizadorTDT(value: boolean) {
        this._sintonizadorTDT = value;
    }
    constructor(precioBase: number, color: string, consumo: string, peso: number, resolucion: number, sintonizadorTDT: boolean) {
        super(precioBase, color, consumo, peso);
        this.resolucion = resolucion;
        this.sintonizadorTDT = sintonizadorTDT;
    }
    precioFinal(): number {
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