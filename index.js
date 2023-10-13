const prompt = require('prompt-sync')();
// Solicitar al usuario 3 números por prompt
var num1 = prompt("Ingresa el 1er número: ");
var num2 = prompt("Ingresa el 2do número: ");
var num3 = prompt("Ingresa el 3er número: ");

//No cambiar el nombre de la función ordenarNumeros
function ordenarNumeros(num1, num2, num3) {

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);
  
  let mayor, centro, menor;

  // Encontrar el número mayor
  if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
      centro = num2;
      menor = num3;
    } else {
      centro = num3;
      menor = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
      centro = num1;
      menor = num3;
    } else {
      centro = num3;
      menor = num1;
    }
  } else {
    mayor = num3;
    if (num1 >= num2) {
      centro = num1;
      menor = num2;
    } else {
      centro = num2;
      menor = num1;
    }
  }

  // Verificar si los números son iguales
  if (num1 === num2 && num2 === num3) {
    return {
      mayor,
      centro,
      menor,
      sonIguales: true,
      ordenMayorAMenor: [mayor, centro, menor],
      ordenMenorAMayor: [menor, centro, mayor],
    };
  }
  
// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

module.exports = ordenarNumeros;
