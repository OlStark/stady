import { definePrime } from "./scripy";

xdescribe ('test for definePrime function', () => {
    it('should operete correctly with simple number', () => {
        expect(definePrime(17)).toBe('Число 17 - простое число');
    }),
    it('should operete correctly with complite number', () => {
        expect(definePrime(18)).toBe('Число 18 - составное число');
    }),
    it('should operete correctly with invalid number', () => {
        expect(definePrime(1001)).toBe('Данные неверны');
    })
});