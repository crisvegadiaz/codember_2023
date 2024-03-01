import { describe, expect, it } from "vitest";
import { encriptados } from "../src/CHALLENGE_01.js";

describe("encriptados", () => {
  it("Debería ser una función", () => {
    expect(typeof encriptados).toBe("function");
  });

  it("Debería lanzar si no se proporciona el String como parámetro", () => {
    expect(() => encriptados()).toThrow();
  });

  it("Debería ratonar un String", () => {
    expect(typeof encriptados("")).toBe("string");
  });

  it("Debería devolver un 'gato perro perro coche gato perro sol' si el valor es 'gato2perro3coche1sol1'", () => {
    expect(encriptados("gato perro perro coche Gato peRRo sol")).toBe(
      "gato2perro3coche1sol1"
    );
  });

  it("Debería devolver un 'llaveS casa CASA casa llaves' si el valor es 'llaves2casa3'", () => {
    expect(encriptados("llaveS casa CASA casa llaves")).toBe("llaves2casa3");
  });

  it("Debería devolver un 'taza ta za taza' si el valor es 'taza2ta1za1'", () => {
    expect(encriptados("taza ta za taza")).toBe("taza2ta1za1");
  });

  it("Debería devolver un 'casas casa casasas' si el valor es 'casas1casa1casas1 '", () => {
    expect(encriptados("casas casa casasas")).toBe("casas1casa1casasas1");
  });
});
