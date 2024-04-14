var Bicho = /** @class */ (function () {
    function Bicho(nombre, edad, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }
    return Bicho;
}());
var OrdenaPorNombre = /** @class */ (function () {
    function OrdenaPorNombre() {
    }
    OrdenaPorNombre.prototype.ordena = function (BichoA, BichoB) {
        return BichoA.nombre.localeCompare(BichoB.nombre);
    };
    return OrdenaPorNombre;
}());
var OrdenaPorEdad = /** @class */ (function () {
    function OrdenaPorEdad() {
    }
    OrdenaPorEdad.prototype.ordena = function (BichoA, BichoB) {
        return BichoA.edad - BichoB.edad;
    };
    return OrdenaPorEdad;
}());
var OrdenaPorPeso = /** @class */ (function () {
    function OrdenaPorPeso() {
    }
    OrdenaPorPeso.prototype.ordena = function (BichoA, BichoB) {
        return BichoA.peso - BichoB.peso;
    };
    return OrdenaPorPeso;
}());
var MuestraTipo01 = /** @class */ (function () {
    function MuestraTipo01() {
    }
    MuestraTipo01.prototype.muestra = function (BichoA) {
        console.log("".concat(BichoA.nombre, " con una edad de ").concat(BichoA.edad, ", pesa ").concat(BichoA.peso));
    };
    return MuestraTipo01;
}());
var MuestraTipo02 = /** @class */ (function () {
    function MuestraTipo02() {
    }
    MuestraTipo02.prototype.muestra = function (BichoA) {
        console.log("El animalito ".concat(BichoA.nombre, " tiene una edad de ").concat(BichoA.edad, " y un peso estimado de ").concat(BichoA.peso));
    };
    return MuestraTipo02;
}());
var Jaula = /** @class */ (function () {
    function Jaula(Ordenacion, Mostrador) {
        this.bichos = [];
        this.Ordenacion = Ordenacion;
        this.Mostrador = Mostrador;
    }
    Jaula.prototype.add = function (BichoAPoner) {
        this.bichos.push(BichoAPoner);
    };
    Jaula.prototype.pesoTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.bichos; _i < _a.length; _i++) {
            var bicho = _a[_i];
            total += bicho.peso;
        }
        return total;
    };
    Jaula.prototype.edadTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.bichos; _i < _a.length; _i++) {
            var bicho = _a[_i];
            total += bicho.edad;
        }
        return total;
    };
    Jaula.prototype.edadMedia = function () {
        var edadTotal = this.edadTotal();
        return edadTotal / this.bichos.length;
    };
    Jaula.prototype.ordena = function () {
        this.bichos.sort(this.Ordenacion.ordena);
    };
    Jaula.prototype.muestra = function () {
        this.bichos.forEach(this.Mostrador.muestra);
    };
    return Jaula;
}());
var elefante = new Bicho("Jumbo", 45, 898);
var rinoceronte = new Bicho("Willie", 1, 1);
var koala = new Bicho("Kolinger", 56, 67);
var ordenNombre = new OrdenaPorNombre();
var ordenEdad = new OrdenaPorEdad();
var ordenPeso = new OrdenaPorPeso();
var mostrador01 = new MuestraTipo01();
var mostrador02 = new MuestraTipo02();
var miJaulaABC = new Jaula(ordenNombre, mostrador01);
miJaulaABC.add(elefante);
miJaulaABC.add(rinoceronte);
miJaulaABC.add(koala);
console.log("Mostrador 01:");
miJaulaABC.muestra();
miJaulaABC.ordena();
console.log("Ordenar por nombre:");
miJaulaABC.muestra();
console.log("\n");
miJaulaABC.Ordenacion = ordenEdad;
miJaulaABC.Mostrador = mostrador02;
console.log("Mostrador 02:");
miJaulaABC.muestra();
miJaulaABC.ordena();
console.log("Ordenar por edad:");
miJaulaABC.muestra();
console.log("\n");
miJaulaABC.Ordenacion = ordenPeso;
miJaulaABC.Mostrador = mostrador01;
console.log("Mostrador 01:");
miJaulaABC.muestra();
miJaulaABC.ordena();
console.log("Ordenar por peso:");
miJaulaABC.muestra();
console.log("\n");
//# sourceMappingURL=app.js.map