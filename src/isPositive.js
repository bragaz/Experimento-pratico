function isPositive(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error("A entrada deve ser um número");
  }

  if (value < 0) {
    throw new Error("Valor inválido");
  }

  return value > 0;
}

module.exports = { isPositive };
