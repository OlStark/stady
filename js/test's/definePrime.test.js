import { getPercents } from "./script";

describe('test for getPercents function', () => {

    it('adds 100 * 25 / 100 to equal 25', () => {
      expect(getPercents(25, 100)).toBe(25);
    }),

    it('if value is false', () => {
      expect(getPercents(false)).toBe('Данные не найдены');
    }),

    it('adds -100 * 25 / 100 to equal error', () => {
      expect(getPercents(25, -100)).toBe('Одно или оба введённых значения отрицательные или равны нулю');
    }),

    it('if "string" * 25 / 100 to equal error', () => {
      expect(getPercents(isNaN)).toBe('Одно или оба введённых значения не являются числом');
    })
});