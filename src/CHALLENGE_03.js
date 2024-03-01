/* 
** El Desafío del Cifrado Espía **

Un grupo de espías ha descubierto que su sistema de cifrado de mensajes está comprometido.

Han encontrado algunas contraseñas que no cumplen con laPolítica de Seguridad de Cifrado que tenían establecida cuando fueron creadas.

Para solucionar el problema, han creado una lista (tu entrada al desafío) de contraseñas (según la base de datos corrupta) y la política de seguridad cuando esa clave fue establecida.

Ejemplo de la lista:

    2-4 f: fgff
    4-6 z: zzzsg
    1-6 h: hhhhhh

Cada línea indica, separado por :, la política de la clave y la clave misma.

La política de la clave especifica el número mínimo y máximo de veces que un carácter dado debe aparecer para que la clave sea válida. Por ejemplo, 2-4 f significa que la clave debe contener f al menos 2 veces y como máximo 4 veces.

Sabiendo esto, en el ejemplo anterior, hay 2 claves válidas:

La segunda clave, zzzsg, no lo es; contiene 3 veces la letra z, pero necesita al menos 4. Las primeras y terceras claves son válidas: contienen la cantidad adecuada de f y h, respectivamente, según sus políticas.
** Tu desafío: **

Determina cuántas claves de cifrado son válidas según sus políticas.
** Cómo resolverlo **

1. Analiza la lista de políticas y claves de cifrado que encontrarás en este archivo: https://codember.dev/data/encryption_policies.txt

2. Crea un programa que devuelva la clave inválida número 42 (de todas las claves inválidas, la 42ª en orden de aparición). Por ejemplo:
submit bqamidgewtbuz
*/

export function cifrado(data) {
  // Dividir la cadena de datos en un array de líneas
  const passwords = data.split("\n");

  // Inicializar contador de claves inválidas
  let invalidCount = 0;

  // Iterar sobre cada contraseña y su política
  for (let i = 0; i < passwords.length; i++) {
    const parts = passwords[i].split(" "); // Dividir la cadena en la política y la contraseña
    const limits = parts[0].split("-").map(Number); // Obtener los límites de la política como números
    const char = parts[1][0]; // Obtener el carácter objetivo
    const password = parts[2]; // Obtener la contraseña

    // Contar cuántas veces aparece el carácter objetivo en la contraseña
    const charCount = (password.match(new RegExp(char, "g")) || []).length;

    // Verificar si el conteo está dentro de los límites especificados por la política
    if (charCount < limits[0] || charCount > limits[1]) {
      // Si está fuera de los límites, incrementar el contador de claves inválidas
      invalidCount++;
      // Verificar si esta es la clave inválida número 42
      if (invalidCount === 42) {
        // Si es la clave 42, devolverla y salir de la función
        return password;
      }
    }
  }

  // Si no se encuentra la clave inválida número 42, devolver null
  return null;
}
