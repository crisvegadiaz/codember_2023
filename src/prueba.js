import { encriptados } from "./CHALLENGE_01.js";
import { compiler } from "./CHALLENGE_02.js";
import { cifrado } from "./CHALLENGE_03.js";
import { dañoArchivo } from "./CHALLENGE_04.js";
import { verificaDatos } from "./CHALLENGE_05.js";
import axios from "axios";

console.log("_______________CHALLENGE_01__________________________");
await axios
  .get("https://codember.dev/data/message_01.txt")
  .then((response) => {
    console.log(encriptados(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

console.log("_____________________________________________________\n\n");
console.log("_______________CHALLENGE_02__________________________");
await axios
  .get("https://codember.dev/data/message_02.txt")
  .then((response) => {
    console.log(compiler(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

console.log("_____________________________________________________\n\n");
console.log("_______________CHALLENGE_03__________________________");
await axios
  .get("https://codember.dev/data/encryption_policies.txt")
  .then((response) => {
    console.log(cifrado(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

console.log("_____________________________________________________\n\n");
console.log("_______________CHALLENGE_04__________________________");
await axios
  .get("https://codember.dev/data/files_quarantine.txt")
  .then((response) => {
    console.log(dañoArchivo(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

console.log("_____________________________________________________\n\n");
console.log("_______________CHALLENGE_05__________________________");
await axios
  .get("https://codember.dev/data/database_attacked.txt")
  .then((response) => {
    console.log(verificaDatos(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
