/* 
** El problema final **

Finalmente los hackers han conseguido acceder a la base de datos y la han dejado corrupta. Pero parece que han dejado un mensaje oculto en la base de datos. ¿Podrás encontrarlo?

Nuestra base de datos está en formato .csv. Las columnas son id, username, email, age, location.

Un usuario sólo es válido si:

    - id: existe y es alfanumérica
    - username: existe y es alfanumérico
    - email: existe y es válido (sigue el patrón user@dominio.com)
    - age: es opcional pero si aparece es un número
    - location: es opcional pero si aparece es una cadena de texto

Ejemplos:

    Entrada: 1a421fa,alex,alex9@gmail.com,18,Barcelona
    Resultado: ✅ Válido

    Entrada: 9412p_m,maria,mb@hotmail.com,22,CDMX
    Resultado: ❌ Inválido (id no es alfanumérica, sobra el _)

    Entrada: 494ee0,madeval,mdv@twitch.tv,,
    Resultado: ✅ Válido (age y location son opcionales)
    Entrada: 494ee0,madeval,twitch.tv,22,Montevideo
    Resultado: ❌ Inválido (email no es válido)

** Cómo resolverlo **

1. Analiza la lista de entradas de la base de datos y detecta los inválidos: https://codember.dev/data/database_attacked.txt

2. Encuentra el primer carácter (número o letra) del username de cada usuario inválido. Júntalos por orden de aparición y descubre el mensaje oculto. Luego envíalo con submit. Por ejemplo:
submit att4ck
*/

export function verificaDatos(datos) {
  // Comprueba si se ha proporcionado datos
  if (datos === undefined)
    throw new Error("Debe ingresarse un string como parámetro.");

  // Variable para almacenar los caracteres de nombres inválidos
  let caracteresInvalidos = "";

  // Itera sobre cada línea de datos
  datos.split("\n").forEach((linea) => {
    // Desestructura los campos de la línea
    const [id, name, email, age, city] = linea.split(",");

    // Verifica cada campo
    const esIdValido = /^[a-zA-Z0-9]+$/.test(id);
    const esEdadValida = age.length === 0 || /^(?:[1-9]\d*|0)$/.test(age);
    const esNombreValido = /^[a-zA-ZáéíóúñÑ ]+$/.test(name);
    const esCiudadValida =
      city.length === 0 || /^[a-zA-ZáéíóúñÑ ]+$/.test(city);
    const esEmailValido =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        email
      );

    // Si alguno de los campos es inválido, agrega el primer carácter del nombre a la lista de caracteres inválidos
    if (
      !(
        esIdValido &&
        esNombreValido &&
        esEdadValida &&
        esCiudadValida &&
        esEmailValido
      )
    ) {
      caracteresInvalidos += name[0];
    }
  });

  // Devuelve la cadena
  return caracteresInvalidos;
}
