import { expect, it, describe } from "vitest";
import { dañoArchivo } from "../src/CHALLENGE_04.js";

describe("Hackers dañan sistema de archivos", () => {
  it("Debería ser una función", () => {
    expect(typeof dañoArchivo).toBe("function");
  });

  it("Debería lanzar si no se proporciona el String como parámetro", () => {
    expect(() => dañoArchivo()).throw();
  });

  /* it("Returna un true si el valido 'xyzz33-xy'", () => {
    expect(dañoArchivo("xyzz33-xy")).toBe(true);
  });

  it("Returna un false si el valido 'abcca1-ab1'", () => {
    expect(dañoArchivo("abcca1-ab1")).toBe(false);
  });

  it("Returna un false si el valido 'abbc11-ca'", () => {
    expect(dañoArchivo("abbc11-ca")).toBe(false);
  }); */
  
});
