let nombres01 = ["Andra", "Aneu", "Arlet", "Ehud", "Indivar", "Samay", "Sanca", "Tanit", "Uxia", "Zenda"];
let nombres02 = ["Abba", "Acfred", "Areu", "Drac", "Guim", "Iol", "Kilian", "Mirt", "Yannick", "Zigor", "Tanit"];

// Ejercicio 1
nombres01.forEach((elemento) => console.log(elemento));
nombres02.forEach(function (elemento) { console.log(elemento); });

// Ejercicio 2
if (nombres01.every((valor: string, indice: number, array: string[]) => valor.length > 2)) {
    console.log("Los nombres de 'nombres01' tienen más de 2 letras");
}
function masDeDosLetras(valor: string, indice: number, array: string[]) {
    return valor.length > 2;
}
if (nombres02.every(masDeDosLetras)) {
    console.log("Los nombres de 'nombres02' tienen más de 2 letras");
}

// Ejercicio 3
console.log(nombres01.filter((valor: string, indice: number, array: string[]) => valor >= "I"));
nombres01.filter((valor: string, indice: number, array: string[]) => valor >= "I").forEach((elemento) => console.log(elemento));
console.log(nombres02.filter(function (valor: string, indice: number, array: string[]) { return valor >= "I"; }));

// Ejercicio 4
function palindromo(texto: string): string {
    let textoReverso = texto.split("").reverse().join("");
    return textoReverso;
}
nombres01.forEach((elemento) => console.log(palindromo(elemento)));
nombres02.forEach(function (elemento) { console.log(palindromo(elemento)); });

function isPalindromo(cadena: string, indice: number, array: string[]): Boolean {
    let texto = cadena.toUpperCase();
    let textoReverso = texto.split("").reverse().join("");
    return texto == textoReverso;
}
console.log("Palíndromos en Nombres01: " + nombres01.filter(isPalindromo));
console.log("Palíndromos en Nombres02: " + nombres02.filter(isPalindromo));

// Ejercicio 5
console.log(nombres01.indexOf("Tanit"));
console.log(nombres01.indexOf("Jacinto"));
console.log(nombres02.indexOf("Tanit"));
console.log(nombres02.indexOf("Jacinto"));

// Ejercicio 6
console.log(nombres01.join(","));
console.log(nombres02.join(","));

// Ejercicio 7
let letrasNombres01: number[] = [];
nombres01.forEach((valor: string, indice: number, array: string[]) => letrasNombres01.push(valor.length));
console.log(nombres01);
console.log(letrasNombres01);

// Ejercicio 8
console.log(nombres01);
nombres01.pop();
console.log(nombres01);

console.log(nombres02);
nombres02.pop();
console.log(nombres02);

// Ejercicio 9
console.log(nombres01);
nombres01.push("Jacinto");
console.log(nombres01);

console.log(nombres02);
nombres02.push("Jacinto");
console.log(nombres02);

// Ejercicio 10
let suma = 0;
letrasNombres01.forEach((valor: number, indice: number, array: number[]) => suma += valor);
console.log(letrasNombres01);
console.log(suma);

// Ejercicio 11
let subNombres01 = nombres01.slice(0, 7);
let subNombres02 = nombres02.slice(3, 6);
let nombres03: string[] = subNombres01.concat(subNombres02);
console.log(nombres03);

// Ejercicio 12
console.log(nombres01);
console.log(nombres01.some((valor: string, indice: number, array: string[]) => valor.length > 6));
console.log(nombres02);
console.log(nombres02.some((valor: string, indice: number, array: string[]) => valor.length > 6));

// Ejercicio 13
console.log(nombres01.sort());
console.log(nombres01.sort().reverse());
console.log(nombres02.sort());
console.log(nombres02.sort().reverse());
