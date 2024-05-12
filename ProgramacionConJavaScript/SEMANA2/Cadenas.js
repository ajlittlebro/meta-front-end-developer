var string1 = "Hola";
var string2 = "Mundo";

console.log(string1.length) // Imprime la longitud de la cadena (4)
console.log(string1.concat(" ", string2)) // Concatena "Hola Mundo"
console.log(string1.toUpperCase()) // Convierte a mayúsculas  HOLA
console.log(string2.toLowerCase())  // Convierte a minúsculas mundo
console.log(string1.indexOf("o")) // Imprime la posición de la primera ocurrencia de "o" (1)
console.log(string2.lastIndexOf("o")) // Imprime la posición de la última ocurrencia de "o" (2)
console.log(string1.charAt(2)) // Imprime el carácter en la posición 2 (l)
console.log(string1.startsWith("H")) // Comprueba si empieza por "H"
console.log(string2.endsWith("o")) // Comprueba si termina por "o"
console.log(string1.includes("a")) // Comprueba si contiene "a"
console.log(string1.split("")) // Separa la cadena en un array de caracteres


