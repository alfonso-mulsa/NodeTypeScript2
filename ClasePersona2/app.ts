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
class CrearPersonaEspanyola implements ICreadorPersona {
    crearPersona(primerNombre: string, nombreIntermedio: string, apellido1: string, apellido2: string, anyoNacimiento: number, identificativo: string, activo: boolean): Persona {
        let nuevaPersona = new Persona;
        nuevaPersona.primerNombre = primerNombre;
        nuevaPersona.nombreIntermedio = "";
        nuevaPersona.apellido1 = apellido1;
        nuevaPersona.apellido2 = apellido2;
        nuevaPersona.anyoNacimiento = anyoNacimiento;
        nuevaPersona.identificativo = identificativo;
        nuevaPersona.activo = activo;
        return nuevaPersona;
    }

}
class CrearPersonaInglesa implements ICreadorPersona {
    crearPersona(primerNombre: string, nombreIntermedio: string, apellido1: string, apellido2: string, anyoNacimiento: number, identificativo: string, activo: boolean): Persona {
        let nuevaPersona = new Persona;
        nuevaPersona.primerNombre = primerNombre;
        nuevaPersona.nombreIntermedio = nombreIntermedio;
        nuevaPersona.apellido1 = apellido1;
        nuevaPersona.apellido2 = "";
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
        return `<p class="my-1"><strong>Campos obligatorios</strong></p>
                <p class="mb-1">Identificativo: ${persona.identificativo}</p>
                <p class="mb-1">Primer Nombre: ${persona.primerNombre}</p>
                <p class="mb-1">Nombre Intermedio: ${persona.nombreIntermedio}</p>
                <p class="mb-1">Apellido 1: ${persona.apellido1}</p>
                <p class="mb-1"><strong>Campos optativos</strong></p>
                <p class="mb-1">Apellido 2: ${persona.apellido2}</p>
                <p class="mb-1">Año Nacimiento: ${persona.anyoNacimiento}</p>
                <p class="mb-1">Activo: ${persona.activo}</p>`;
    }
}
class MostrarPersonaEspanyola implements IMostradorPersona {
    mostrarDatos(persona: Persona): string {
        return `<p class="my-1"><strong>Campos obligatorios</strong></p>
                <p class="mb-1">Identificativo: ${persona.identificativo}</p>
                <p class="mb-1">Primer Nombre: ${persona.primerNombre}</p>
                <p class="mb-1">Apellido 2: ${persona.apellido2}</p>
                <p class="mb-1">Apellido 1: ${persona.apellido1}</p>
                <p class="mb-1"><strong>Campos optativos</strong></p>
                <p class="mb-1">Nombre Intermedio: ${persona.nombreIntermedio}</p>
                <p class="mb-1">Año Nacimiento: ${persona.anyoNacimiento}</p>
                <p class="mb-1">Activo: ${persona.activo}</p>`;
    }
}

function visualizar() {
    let nombre = (<HTMLInputElement>document.getElementById("idPrimerNombre")).value;
    let nomInt = (<HTMLInputElement>document.getElementById("idNombreIntermedio")).value;
    let apell1 = (<HTMLInputElement>document.getElementById("idApellido1")).value;
    let apell2 = (<HTMLInputElement>document.getElementById("idApellido2")).value;
    let anyoNac = Number((<HTMLInputElement>document.getElementById("idAnyoNacimiento")).value);
    let ident = (<HTMLInputElement>document.getElementById("idIdentificativo")).value;
    let activ = (<HTMLInputElement>document.getElementById("idActivo")).checked;

    let _creadorPersonaEsp: ICreadorPersona = new CrearPersonaEspanyola;
    let _creadorPersonaIng: ICreadorPersona = new CrearPersonaInglesa;

    let _validarPersonaEsp: IValidadorPersona = new ValidarPersonaEspanyola;
    let _validarPersonaIng: IValidadorPersona = new ValidarPersonaInglesa;

    let personaEsp = _creadorPersonaEsp.crearPersona(nombre, nomInt, apell1, apell2, anyoNac, ident, activ);
    let personaIng = _creadorPersonaIng.crearPersona(nombre, nomInt, apell1, apell2, anyoNac, ident, activ);

    let _mostrarPersonaEsp: IMostradorPersona = new MostrarPersonaEspanyola;
    let _mostrarPersonaIng: IMostradorPersona = new MostrarPersonaInglesa;
    console.log(_mostrarPersonaEsp.mostrarDatos(personaEsp));
    console.log(_mostrarPersonaIng.mostrarDatos(personaIng));

    if (_validarPersonaEsp.isValid(personaEsp)) {
        (<HTMLElement>document.getElementById("ventanaVerde")).innerHTML = _mostrarPersonaEsp.mostrarDatos(personaEsp);
        (<HTMLElement>document.getElementById("ventanaRoja")).innerHTML = "";
    }
    else {
        (<HTMLElement>document.getElementById("ventanaVerde")).innerHTML = "";
        (<HTMLElement>document.getElementById("ventanaRoja")).innerHTML = '<p class="text-center">PERSONA NO VALIDA</P>';
    }

    if (_validarPersonaIng.isValid(personaIng)) {
        console.log(_mostrarPersonaIng.mostrarDatos(personaIng));
    }
}

document.getElementById("idBotonMostrar")?.addEventListener("click", visualizar);