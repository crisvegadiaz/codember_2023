/* 
** El reto **

Un espía está enviando mensajes encriptados.

Tu misión es crear un programa que nos ayude a buscar patrones...

Los mensajes son palabras separadas por espacios como este:
gato perro perro coche Gato peRRo sol

Necesitamos que el programa nos devuelva el número de veces que aparece cada palabra en el mensaje, independientemente de si está en mayúsculas o minúsculas.

El resultado será una cadena de texto con la palabra y el número de veces que aparece en el mensaje, con este formato:
gato2perro3coche1sol1

¡Las palabras son ordenadas por su primera aparición en el mensaje!
** Más ejemplos: **

llaveS casa CASA casa llaves -> llaves2casa3
taza ta za taza -> taza2ta1za1
casas casa casasas -> casas1casa1casas1
** Cómo resolverlo **

1. Resuelve el mensaje que encontrarás en este archivo: https://codember.dev/data/message_01.txt

2. Envía tu solución con el comando "submit" en la terminal, por ejemplo así:
submit perro3gato3coche1sol1
*/

export function encriptados(scrip) {
  // Verifica si el parámetro de entrada es una cadena de texto
  if (typeof scrip !== "string")
    throw new Error(
      "El parámetro ingresado debe ser una cadena de texto: " + scrip
    );

  // Objeto para almacenar el conteo de palabras
  const conteo = {};

  // Convierte el texto a minúsculas y lo divide en palabras
  scrip
    .toLowerCase()
    .split(" ")
    .forEach((palabra) => {
      // Incrementa el conteo de la palabra o la agrega al objeto si es la primera vez que aparece
      conteo[palabra] = (conteo[palabra] || 0) + 1;
    });

  // Convierte el objeto en una cadena JSON y elimina caracteres innecesarios
  const resultado = JSON.stringify(conteo).replace(/[{}:,"]/g, "");

  return resultado;
}
