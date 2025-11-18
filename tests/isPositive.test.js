const { isPositive } = require("../src/isPositive.js");

describe("Função isPositive()", () => {
  test("Deve retornar true quando o valor for maior que zero", () => {
    expect(isPositive(10)).toBe(true);
  });

  test("Deve retornar false quando o valor for zero", () => {
    expect(isPositive(0)).toBe(false);
  });

  test("Deve lançar exceção 'Valor inválido' quando o valor for menor que zero", () => {
    expect(() => isPositive(-5)).toThrow("Valor inválido");
  });

  test("Deve lançar exceção quando a entrada não for um número", () => {
    const invalidValues = ["abc", true, null, undefined, {}, [], NaN];

    invalidValues.forEach(value => {
      expect(() => isPositive(value)).toThrow("A entrada deve ser um número");
    });
  });
});
