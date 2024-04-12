class Persona {
    primerNombre: string = "";
    nombreIntermedio: string = "";
    apellido1: string = "";
    apellido2: string = "";
    anyoNacimiento: number = 0;
    identificativo: string = "";
    activo: boolean = false;
    //constructor(primerNombre: string, nombreIntermedio: string, apellido1: string, apellido2: string, anyoNacimiento: number, identificativo: string, activo: boolean) {
    //    this.primerNombre = primerNombre;
    //    this.nombreIntermedio = nombreIntermedio;
    //    this.apellido1 = apellido1;
    //    this.apellido2 = apellido2;
    //    this.anyoNacimiento = anyoNacimiento;
    //    this.identificativo = identificativo;
    //    this.activo = activo;
    //}
}
interface ICreadorPersona {
    crearPersona(primerNombre: string, nombreIntermedio: string, apellido1: string, apellido2: string, anyoNacimiento: number, identificativo: string, activo: boolean): Persona;
}
class CrearPersona implements ICreadorPersona {
    crearPersona(primerNombre: string, nombreIntermedio: string, apellido1: string, apellido2: string, anyoNacimiento: number, identificativo: string, activo: boolean): Persona {
        let nuevaPersona = new Persona;
        nuevaPersona.primerNombre = primerNombre;
        nuevaPersona.nombreIntermedio = nombreIntermedio;
        nuevaPersona.apellido1 = apellido1;
        nuevaPersona.apellido2 = apellido2;
        nuevaPersona.anyoNacimiento = anyoNacimiento;
        nuevaPersona.identificativo = identificativo;
        nuevaPersona.activo = activo;
        return nuevaPersona;
    }

}
interface IValidadorPersona {
    isValid(persona: Persona): boolean;
}
class ValidarPersonaInglesa implements IValidadorPersona {
    isValid(persona: Persona): boolean {
        return persona.identificativo != "" && persona.primerNombre != "" && persona.nombreIntermedio != "" && persona.apellido1 != "";
    }
}
class ValidarPersonaEspanyola implements IValidadorPersona {
    isValid(persona: Persona): boolean {
        return persona.identificativo != "" && persona.primerNombre != "" && persona.apellido1 != "" && persona.apellido2 != "";
    }
}
interface IMostradorPersona {
    mostrarDatos(persona: Persona): string;
}
class MostrarPersonaInglesa implements IMostradorPersona {
    mostrarDatos(persona: Persona): string {
        let estaActivo = "No";
        if (persona.activo) {
            estaActivo = "Si";
        }
        return `<p class="my-1"><strong><u>Required fields</u></strong></p>
                <p class="mb-1">Identification: ${persona.identificativo}</p>
                <p class="mb-1">First Name: ${persona.primerNombre}</p>
                <p class="mb-1">Intermediate Name: ${persona.nombreIntermedio}</p>
                <p class="mb-3">Last name: ${persona.apellido1}</p>
                <p class="mb-1"><strong><u>Optional fields</u></strong></p>
                <p class="mb-1">Last name 2: ${persona.apellido2}</p>
                <p class="mb-1">Birth Year: ${persona.anyoNacimiento}</p>
                <p class="mb-1">Active: ${estaActivo}</p>`;
    }
}
class MostrarPersonaEspanyola implements IMostradorPersona {
    mostrarDatos(persona: Persona): string {
        let estaActivo = "No";
        if (persona.activo) {
            estaActivo = "Si";
        }
        return `<p class="my-1"><u><strong>Campos obligatorios</u></strong></p>
                <p class="mb-1">Identificativo: ${persona.identificativo}</p>
                <p class="mb-1">Primer Nombre: ${persona.primerNombre}</p>
                <p class="mb-1">1er Apellido: ${persona.apellido1}</p>
                <p class="mb-3">2o Apellido: ${persona.apellido2}</p>
                <p class="mb-1"><strong><u>Campos optativos</u></strong></p>
                <p class="mb-1">Nombre Intermedio: ${persona.nombreIntermedio}</p>
                <p class="mb-1">Año Nacimiento: ${persona.anyoNacimiento}</p>
                <p class="mb-1">Activo: ${estaActivo}</p>`;
    }
}

(<HTMLElement>document.getElementById("idBotonMostrar")).addEventListener("click", visualizar);
function visualizar() {
    let nacionalidad = (<HTMLInputElement>document.querySelector('input[name="nacionalidad"]:checked')).value;
    let nombre = (<HTMLInputElement>document.getElementById("idPrimerNombre")).value;
    let nomInt = (<HTMLInputElement>document.getElementById("idNombreIntermedio")).value;
    let apell1 = (<HTMLInputElement>document.getElementById("idApellido1")).value;
    let apell2 = (<HTMLInputElement>document.getElementById("idApellido2")).value;
    let anyoNac = Number((<HTMLInputElement>document.getElementById("idAnyoNacimiento")).value);
    let ident = (<HTMLInputElement>document.getElementById("idIdentificativo")).value;
    let activ = (<HTMLInputElement>document.getElementById("idActivo")).checked;

    let _creadorPersona: ICreadorPersona = new CrearPersona;
    let persona = _creadorPersona.crearPersona(nombre, nomInt, apell1, apell2, anyoNac, ident, activ);

    let _validarPersona: IValidadorPersona;
    let _mostrarPersona: IMostradorPersona;

    switch (nacionalidad) {
        case "ESP":
            console.log(nacionalidad + ": " + persona);
            _validarPersona = new ValidarPersonaEspanyola;
            _mostrarPersona = new MostrarPersonaEspanyola;
            break;
        case "ING":
            console.log(nacionalidad + ": " + persona);
            _validarPersona = new ValidarPersonaInglesa;
            _mostrarPersona = new MostrarPersonaInglesa;
            break;
    }

    if (_validarPersona.isValid(persona)) {
        (<HTMLElement>document.getElementById("ventanaVerde")).innerHTML = _mostrarPersona.mostrarDatos(persona);
        (<HTMLElement>document.getElementById("ventanaRoja")).innerHTML = "";
    }
    else {
        (<HTMLElement>document.getElementById("ventanaVerde")).innerHTML = "";
        (<HTMLElement>document.getElementById("ventanaRoja")).innerHTML = '<p class="text-center mb-0">DATOS INCOMPLETOS</P>';
    }
}
