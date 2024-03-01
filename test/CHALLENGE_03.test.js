import { it, expect, describe } from "vitest";
import { cifrado } from "../src/CHALLENGE_03.js";

describe("El Desafío del Cifrado Espía", () => {
  it("Debería ser una función", () => {
    expect(typeof cifrado).toBe("function");
  });

  it("Debería lanzar si no se proporciona el String como parámetro", () => {
    expect(() => cifrado()).toThrow();
  });

  /* it("La función debería retornar un String", () => {
    expect(typeof cifrado("")).toBe("string");
  }); */

  /* it("La contraseña '2-4 f: fgff' debe ser válida", () => {
    expect(findInvalidPassword("2-4 f: fgff")).toBe(false);
  });

  it("La contraseña '4-6 z: zzzsg' debe ser inválida", () => {
    expect(findInvalidPassword("4-6 z: zzzsg")).toBe(true);
  });

  it("La contraseña '1-6 h: hhhhhh' debe ser válida", () => {
    expect(findInvalidPassword("1-6 h: hhhhhh")).toBe(false);
  }); */
});
