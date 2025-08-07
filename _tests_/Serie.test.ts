import Serie from '../src/common/utils/Serie/Serie';

/*
Posiciones  |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |   10
--------------------------------------------------------------------------------------------
Primo       |   2   |   3   |   5   |   7   |   11  |   13  |   17  |   19  |   23  |   29
--------------------------------------------------------------------------------------------
triangular  |   1   |   3   |   6   |   10  |   15  |   21  |   28  |   36  |   45  |   55
--------------------------------------------------------------------------------------------
fibonacci   |   1   |   1   |   2   |   3   |   5   |   8   |   13  |   21  |   34  |   55


serie       |   2   |   1   |   -2  |   -4  |   -9  |  -12  |  -16  |  -15  |   -6  |   10

*/

describe('Serie.calcularTermino-pruebas unitarias individuales', () => {

    test('n=1, el resultado debe ser 2', () =>{
        expect(Serie.calcularTermino(1)).toBe(2);
    });

    test('n=2, el resultado debe ser 1', () =>{
        expect(Serie.calcularTermino(2)).toBe(1);
    });

    test('n=3, el resultado debe ser -2', () =>{
        expect(Serie.calcularTermino(3)).toBe(-2);
    });

    test('n=4, el resultado debe ser -4', () =>{
        expect(Serie.calcularTermino(4)).toBe(-4);
    });

    test('n=5, el resultado debe ser -9', () =>{
        expect(Serie.calcularTermino(5)).toBe(-9);
    });

    test('n=6, el resultado debe ser -12', () =>{
        expect(Serie.calcularTermino(6)).toBe(-12);
    });

    test('n=7, el resultado debe ser -16', () =>{
        expect(Serie.calcularTermino(7)).toBe(-16);
    });

    test('n=8, el resultado debe ser -15', () =>{
        expect(Serie.calcularTermino(8)).toBe(-15);
    });

    test('n=9, el resultado debe ser -6', () =>{
        expect(Serie.calcularTermino(9)).toBe(-6);
    });

    test('n=10, el resultado debe ser 10', () =>{
        expect(Serie.calcularTermino(10)).toBe(10);
    });
});