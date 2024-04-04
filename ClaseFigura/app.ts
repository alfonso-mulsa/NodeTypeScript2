class Figura {
    private _posX: number = 0;
    private _posY: number = 0;
    private _material: string = "";
    constructor(posX: number, posY: number, material: string) {
        this.posX = posX;
        this.posY = posY;
        this._material = material;
    }
    public set posX(numero: number) {
        if ((numero < 0) || (numero > 200)) {
            this._posX = 0;
        } else {
            this._posX = numero;
        }
    }
    public get posX(): number {
        return this._posX;
    }
    public set posY(numero: number) {
        if ((numero < 0) || (numero > 200)) {
            this._posY = 0;
        } else {
            this._posY = numero;
        }
    }
    public get posY(): number {
        return this._posY;
    }
    public set material(tipoMaterial: string) {
        this._material = tipoMaterial;
    }
    public get material(): string {
        return this._material.toUpperCase();
    }

    imprime(): string {
        return `Posicion X: ${this._posX}<br/>Posicion Y: ${this._posY}<br/>Material: ${this._material}<br/><br/>`;
    }
}

let figura1 = new Figura(25, 180, "Plastico" );
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
