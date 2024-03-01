/* 
** Hackers dañan sistema de archivos **

En un mundo donde la información es poder, un hacker conocido como Savipo Yatar descubre una serie de archivos en un servidor altamente protegido.

Estos archivos contienen secretos que podrían cambiar el curso de la historia. Pero hay un problema: algunos de los archivos son falsos, diseñados para engañar a los intrusos. Savipo Yatar debe determinar rápidamente cuáles archivos son reales y cuáles son falsos.

Cada archivo tiene un nombre con dos partes, separadas por un guion (-). La primera parte es una cadena alfanumérica y la segunda es unchecksum, que es una cadena formada por los caracteres que sólo aparecen una vez en la primera parte y en el orden en que aparecen.

Escribe un programa que determine si un archivo es real o falso basado en estas reglas.

Ejemplos:

    Nombre del archivo: xyzz33-xy
    Resultado: ✅ Real (El checksum es válido)

    Nombre del archivo: abcca1-ab1
    Resultado: ❌ Falso (El checksum debería ser b1, es incorrecto)

    Nombre del archivo: abbc11-ca
    Resultado: ❌ Falso (El checksum debería ser ac, el orden es incorrecto)

Cada línea indica el nombre del archivo y su correspondiente checksum, separados por un guion (-).
** Cómo resolverlo **

1. Analiza la lista de nombres de archivos y sus checksums que encontrarás en este archivo: https://codember.dev/data/files_quarantine.txt

2. Busca el archivo real número 33 (de todos los archivos reales, el 33º en orden de apareción) y envía su checksum con submit. Por ejemplo si el archivo es xyzz33-xy, harías:
submit xy
*/

export function dañoArchivo(datos) {
  // Verifica si se han proporcionado datos
  if (datos === undefined)
    throw new Error("Debe ingresar los datos para verificar los archivos.");

  // Divide los datos en un array por cada línea
  const datosArray = datos.split("\n");

  // Inicializa el contador
  let contador = 0;

  // Itera sobre cada línea de datos
  for (const linea of datosArray) {
    // Divide la línea en nombre del archivo y verificación
    const [archivo, verifica] = linea.split("-");

    // Verifica si la verificación corresponde al archivo
    if (new RegExp("^" + verifica).test(archivo)) {
      // Incrementa el contador
      contador++;
      // Si el contador llega a 33, devuelve la línea
      if (contador === 33) {
        return linea;
      }
    }
  }

  // Si no se encontró ninguna línea que cumpla con la condición, devuelve null o undefined
  return null; // o return undefined;
}
