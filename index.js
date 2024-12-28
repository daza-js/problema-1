const readline = require("readline");

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para generar la lista de números entre dos valores (ascendente)
function generateAscendingList(lower, upper) {
  const list = [];
  for (let i = lower; i <= upper; i++) {
    list.push(i);
  }
  return list;
}

// Función para generar la lista de números pares (descendente)
function generateEvenListDescending(lower, upper) {
  const list = [];
  for (let i = upper; i >= lower; i--) {
    if (i % 2 === 0) {
      list.push(i);
    }
  }
  return list;
}

// Función para generar la lista de números impares (descendente)
function generateOddListDescending(lower, upper) {
  const list = [];
  for (let i = upper; i >= lower; i--) {
    if (i % 2 !== 0) {
      list.push(i);
    }
  }
  return list;
}

// Función principal
function processNumbers() {
  rl.question("Ingrese el primer número entero positivo: ", (input1) => {
    const num1 = parseInt(input1, 10);

    rl.question("Ingrese el segundo número entero positivo: ", (input2) => {
      const num2 = parseInt(input2, 10);

      // Validar que los números sean enteros positivos
      if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        console.log("Por favor, ingrese solo números enteros positivos.");
        rl.close();
        return;
      }

      // Determinar el menor y el mayor
      const lower = Math.min(num1, num2);
      const upper = Math.max(num1, num2);

      // Generar las listas
      const ascendingList = generateAscendingList(lower, upper);
      const evenDescendingList = generateEvenListDescending(lower, upper);
      const oddDescendingList = generateOddListDescending(lower, upper);

      // Mostrar los resultados
      console.log("\nResultados:");
      console.log(
        "1. Lista de números enteros (ascendente):",
        ascendingList.join(", ")
      );
      console.log(
        "2. Lista de números pares (descendente):",
        evenDescendingList.join(", ")
      );
      console.log(
        "3. Lista de números impares (descendente):",
        oddDescendingList.join(", ")
      );

      // Cerrar la interfaz
      rl.close();
    });
  });
}

// Ejecutar la función principal
processNumbers();
