import { it, expect, describe } from "vitest";
import { verificaDatos } from "../src/CHALLENGE_05.js";

describe("El problema final verificar datos", () => {
  it("Debe ser un function", () => {
    expect(typeof verificaDatos).toBe("function");
  });

  it("Debería lanzar si no se proporciona el String como parámetro", () => {
    expect(() => verificaDatos()).toThrow();
  });

  /* it("Al ingresar este dato debe dar true '1a421fa,alex,alex9@gmail.com,18,Barcelona'", () => {
    expect(verificaDatos("1a421fa,alex,alex9@gmail.com,18,Barcelona")).toBe(
      true
    );
  });

  it("Al ingresar este dato debe dar false '9412p_m,maria,mb@hotmail.com,22,CDMX'", () => {
    expect(verificaDatos("9412p_m,maria,mb@hotmail.com,22,CDMX")).toBe(false);
  });

  it("Al ingresar este dato debe dar true '494ee0,madeval,mdv@twitch.tv,,'", () => {
    expect(verificaDatos("494ee0,madeval,mdv@twitch.tv,,")).toBe(true);
  });

  it("Al ingresar este dato debe dar false '494ee0,madeval,twitch.tv,22,Montevideo'", () => {
    expect(verificaDatos("494ee0,madeval,twitch.tv,22,Montevideo")).toBe(false);
  }); */
});
