class Bicho {
    nombre: string;
    edad: number;
    peso: number;
    constructor(nombre: string, edad: number, peso: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
}
interface IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number;
}
class OrdenaPorNombre implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.nombre.localeCompare(BichoB.nombre);
    }
}
class OrdenaPorEdad implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.edad - BichoB.edad;
    }
}
class OrdenaPorPeso implements IOrdenableBicho {
    ordena(BichoA: Bicho, BichoB: Bicho): number {
        return BichoA.peso - BichoB.peso;
    }
}
interface IMostrable {
    muestra(BichoA: Bicho): void;
}
class MuestraTipo01 implements IMostrable {
    muestra(BichoA: Bicho): void {
        console.log(`${BichoA.nombre} con una edad de ${BichoA.edad}, pesa ${BichoA.peso}`);
    }
}
class MuestraTipo02 implements IMostrable {
    muestra(BichoA: Bicho): void {
        console.log(`El animalito ${BichoA.nombre} tiene una edad de ${BichoA.edad} y un peso estimado de ${BichoA.peso}`);
    }
}
class Jaula {
    bichos: Bicho[] = [];
    Ordenacion: IOrdenableBicho;
    Mostrador: IMostrable;
    constructor(Ordenacion: IOrdenableBicho, Mostrador: IMostrable) {
        this.Ordenacion = Ordenacion;
        this.Mostrador = Mostrador;
    }
    add(BichoAPoner: Bicho) {
        this.bichos.push(BichoAPoner);
    }
    pesoTotal(): number {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.peso;
        }
        return total;
    }
    edadTotal(): number {
        let total = 0;
        for (let bicho of this.bichos) {
            total += bicho.edad;
        }
        return total;
    }
    edadMedia(): number {
        let edadTotal = this.edadTotal();
        return edadTotal / this.bichos.length;
    }
    ordena() {
        this.bichos.sort(this.Ordenacion.ordena);
    }
    muestra() {
        this.bichos.forEach(this.Mostrador.muestra);
    }
}

let elefante: Bicho = new Bicho("Jumbo", 45, 898);
let rinoceronte: Bicho = new Bicho("Willie", 1, 1);
let koala: Bicho = new Bicho("Kolinger", 56, 67);

let ordenNombre = new OrdenaPorNombre();
let ordenEdad = new OrdenaPorEdad();
let ordenPeso = new OrdenaPorPeso();
let mostrador01 = new MuestraTipo01();
let mostrador02 = new MuestraTipo02();

let miJaulaABC = new Jaula(ordenNombre, mostrador01);
miJaulaABC.add(elefante);
miJaulaABC.add(rinoceronte);
miJaulaABC.add(koala);

console.log("Mostrador 01:")
miJaulaABC.muestra();
miJaulaABC.ordena();
console.log("Ordenar por nombre:");
miJaulaABC.muestra();
console.log("\n");

miJaulaABC.Ordenacion = ordenEdad;
miJaulaABC.Mostrador = mostrador02;
console.log("Mostrador 02:")
miJaulaABC.muestra();
miJaulaABC.ordena();
console.log("Ordenar por edad:");
miJaulaABC.muestra();
console.log("\n");

miJaulaABC.Ordenacion = ordenPeso;
miJaulaABC.Mostrador = mostrador01;
console.log("Mostrador 01:")
miJaulaABC.muestra();
miJaulaABC.ordena();
console.log("Ordenar por peso:");
miJaulaABC.muestra();
console.log("\n");
