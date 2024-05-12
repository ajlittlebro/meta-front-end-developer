var string = typeof("Hola Mundo")
console.log(string) // Imprime "string"
var number = typeof(3.14)
console.log(number) // Imprime "number"
var boolean = typeof(true)
console.log(boolean) // Imprime "boolean"
var array = typeof([1, 2, 3])
console.log(array) // Imprime "object"
var object = typeof({color: "rojo", convertible: true})
console.log(object) // Imprime "object"
var undefined = typeof(undefined)
console.log(undefined) // Imprime "undefined"
var nullType = typeof(null)
console.log(nullType) // Imprime "object"
var functionType = typeof(function() {})
console.log(functionType) // Imprime "function"
var symbol = typeof(Symbol())
console.log(symbol) // Imprime "symbol"
var bigInt = typeof(1234567890123456789012345678901234567890n)
console.log(bigInt) // Imprime "bigint"
var date = typeof(new Date())
console.log(date) // Imprime "object"
var regex = typeof(/abc/)
console.log(regex) // Imprime "object"
var error = typeof(new Error())
console.log(error) // Imprime "object"
var compare = typeof(3 == 3)
console.log(compare) // Imprime "boolean"