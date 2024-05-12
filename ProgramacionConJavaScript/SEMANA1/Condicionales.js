let light = "green";

switch (light) {
  case "green":
    console.log("Go!");
    break;
  case "yellow":
    console.log("Caution!");
    break;
  case "red":
    console.log("Stop!");
    break;
  default:
    console.log("Proceed with caution!");
}

var age = 10;

if (age >= 65) {
  console.log("Usted obtiene ingresos de su pensión");
} else if (age < 65 && age >= 18) {
  console.log("Cada mes recibe un salario");
} else if (age < 18) {
  console.log("Obtiene una asignación mensual");
} else {
  console.log("El valor de la variable de edad no es numérico");
}

var day = "Domingo";

switch (day) {
  case "Lunes":
    console.log("Hoy es Lunes");
    break;
  case "Martes":
    console.log("Hoy es Martes");
    break;
  case "Miércoles":
    console.log("Hoy es Miércoles");
    break;
  case "Jueves":
    console.log("Hoy es Jueves");
    break;
  case "Viernes":
    console.log("Hoy es Viernes");
    break;
  case "Sábado":
    console.log("Hoy es Sábado");
    break;
  case "Domingo":
    console.log("Hoy es Domingo");
    break;
  default:
    console.log("No es un día de la semana");
}
