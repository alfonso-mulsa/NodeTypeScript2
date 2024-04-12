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
    //constructor(precioBase: number, color: string, consumo: string, peso: number) {
    //    this.precioBase = precioBase;
    //    this.color = color;
    //    this.consumo = consumo;
    //    this.peso = peso;
    //}
    private comprobarColor(color: string): string {
        let _compElec: IComprobadorElectrodomestico = new ComprobarElectrodomestico;
        return _compElec.comprobarColor(color);
    //    if (color.toUpperCase() == "NEGRO" || color.toUpperCase() == "ROJO" || color.toUpperCase() == "AZUL" || color.toUpperCase() == "GRIS") {
    //        return color.toUpperCase();
    //    }
    //    else {
    //        return "BLANCO";
    //    }
    }
    private comprobarConsumoEnergetico(consumo: string): string {
        let _compElec: IComprobadorElectrodomestico = new ComprobarElectrodomestico;
        //return _compElec.comprobarColor(color);
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
interface ICreadorElectrodomestico {
    crearElectrodomestico(precioBase: number, color: string, consumo: string, peso: number): Electrodomestico;
}
class CrearElectrodomestico implements ICreadorElectrodomestico {
    crearElectrodomestico(precioBase: number, color: string, consumo: string, peso: number): Electrodomestico {
        let nuevoElec = new Electrodomestico;
        nuevoElec.precioBase = precioBase;
        nuevoElec.color = color;
        nuevoElec.consumo = consumo;
        nuevoElec.peso = peso;
        return nuevoElec;
    }
}
interface IComprobadorElectrodomestico {
    comprobarColor(color: string): string;
    comprobarConsumoEnergetico(consumo: string): string;
}
class ComprobarElectrodomestico implements IComprobadorElectrodomestico {
    comprobarColor(color: string): string {
        if (color.toUpperCase() == "NEGRO" || color.toUpperCase() == "ROJO" || color.toUpperCase() == "AZUL" || color.toUpperCase() == "GRIS") {
            return color.toUpperCase();
        }
        else {
            return colorxDef.toUpperCase();
        }
    }
    comprobarConsumoEnergetico(consumo: string): string {
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
    //constructor(precioBase: number, color: string, consumo: string, peso: number, carga: number) {
    //    super(precioBase, color, consumo, peso);
    //    this.carga = carga;
    //}
    precioFinal(): number {
        if (this._carga > 30) {
            return super.precioFinal() + 50;
        }
        else {
            return super.precioFinal();
        }
    }
}
interface ICreadorLavadora {
    crearLavadora(precioBase: number, color: string, consumo: string, peso: number, carga: number): Lavadora;
}
class CrearLavadora implements ICreadorLavadora {
    crearLavadora(precioBase: number, color: string, consumo: string, peso: number, carga: number): Lavadora {
        let _crearElec: ICreadorElectrodomestico = new CrearElectrodomestico;
        let nuevoElec: Electrodomestico = _crearElec.crearElectrodomestico(precioBase, color, consumo, peso);

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
    //constructor(precioBase: number, color: string, consumo: string, peso: number, resolucion: number, sintonizadorTDT: boolean) {
    //    super(precioBase, color, consumo, peso);
    //    this.resolucion = resolucion;
    //    this.sintonizadorTDT = sintonizadorTDT;
    //}
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
interface ICreadorTelevision {
    crearTelevision(precioBase: number, color: string, consumo: string, peso: number, resolucion: number, sintonizadorTDT: boolean): Television;
}
class CrearTelevision implements ICreadorTelevision {
    crearTelevision(precioBase: number, color: string, consumo: string, peso: number, resolucion: number, sintonizadorTDT: boolean): Television {
        let _crearElec: ICreadorElectrodomestico = new CrearElectrodomestico;
        let nuevoElec: Electrodomestico = _crearElec.crearElectrodomestico(precioBase, color, consumo, peso);

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

let _crearElec: ICreadorElectrodomestico = new CrearElectrodomestico();
let newElec = _crearElec.crearElectrodomestico(82, "Rojo", "d", 0);
console.log("Electrodomestico: " + newElec.color);

let _crearLava: ICreadorLavadora = new CrearLavadora();
let newLava = _crearLava.crearLavadora(318, "Gris", "e", 35, 9);
console.log("Lavadora: " + newLava.color);

let _crearTele: ICreadorTelevision = new CrearTelevision();
let newTele = _crearTele.crearTelevision(250, "Negro", "f", 12, 32, true);
console.log("Television: " + newTele.color);
