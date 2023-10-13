
const ordenarNumeros = require('../index');

describe('ordenarNumeros', () => {
  it('debe ordenar tres números de mayor a menor 3, 1, 2', () => {
    expect(ordenarNumeros(3, 1, 2)).toEqual({
      mayor: 3,
      centro: 2,
      menor: 1,
      ordenMayorAMenor: [3, 2, 1],
      ordenMenorAMayor: [1, 2, 3],
    });
  });

  it('debe ordenar tres números de mayor a menor 4, 4, 2', () => {
    expect(ordenarNumeros(4, 4, 2)).toEqual({
      mayor: 4,
      centro: 4,
      menor: 2,
      ordenMayorAMenor: [4, 4, 2],
      ordenMenorAMayor: [2, 4, 4],
    });
  });

  it('debe manejar números iguales', () => {
    expect(ordenarNumeros(2, 2, 2)).toBe("Los números son iguales");
  });
});
