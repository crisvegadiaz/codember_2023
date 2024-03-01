import { describe, expect, it } from "vitest";
import { compiler } from "../src/CHALLENGE_02.js";

describe("Mini Compiler Challenge", () => {
  it("Debería ser una función", () => {
    expect(typeof compiler).toBe("function");
  });

  it("Debería lanzar si no se proporciona el String como parámetro", () => {
    expect(() => compiler()).toThrow();
  });

  it("El parámetro debe componerse de los siguientes caracteres '# @ * &'", () => {
    expect(() => compiler("10@ry#")).toThrow();
  });

  it("La función debe retornar un String", () => {
    expect(typeof compiler("&")).toBe("string");
  });

  it("Al ingresa solo este símbolo '&' retorna un valor 0", () => {
    expect(compiler("&")).toBe("0");
  });

  it("Entrada: '##*&' Salida esperada: '4'",()=>{
    expect(compiler("##*&")).toBe("4");
  })

  it("Entrada: '&##&*&@&' Salida esperada: '0243'",()=>{
    expect(compiler("&##&*&@&")).toBe("0243");
  })

});