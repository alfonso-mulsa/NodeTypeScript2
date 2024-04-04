class Envio {
    idEnvio: string = "";
    numEnvio: BigInt = BigInt(0);
    precio: number = 0;
    recibido: boolean = false;

    constructor(idEnvio: string, numEnvio: BigInt, precio: number, recibido: boolean) {
        if (!/[A-H]{2}[0-9]{2}[I-Z]{2}/.test(idEnvio)) {
            alert(`El identificador de envio ${idEnvio} no es valido.`);
            return;
        }

        this.idEnvio = idEnvio;
        this.numEnvio = numEnvio;
        this.precio = precio;
        this.recibido = recibido;
    }

    iva(): number {
        return Number((this.precio * 0.21).toFixed(2));
    }

    imprime(): string {
        return `Identificador: ${this.idEnvio}<br/>Num. envio: ${this.numEnvio}<br/>Precio: ${this.precio}<br/>IVA: ${this.iva()}<br/>Recibido: ${this.recibido}<br/><br/>`;
    }
}
function validarIdEnvio(identificador: string) {
    let expValidacion = /[A-H]{2}[0-9]{2}[I-Z]{2}/;
    if (!expValidacion.test(identificador)) {
        alert(`El identificador de envio ${identificador} no es valido.`);
    }
}

let envio1 = new Envio("ZF28NM", BigInt(2354908754534), 21.30, false);
document.write(envio1.imprime());

let envio2 = new Envio("GE74PL", BigInt(6563848651357), 15.18, false);
document.write(envio2.imprime());

let envio3 = new Envio("BE10KQ", BigInt(6654324989844), 121.87, false);
document.write(envio3.imprime());

envio1.precio = 100;
envio1.recibido = true;
document.write(envio1.imprime());
