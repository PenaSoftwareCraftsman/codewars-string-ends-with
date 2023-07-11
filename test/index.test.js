const { StringEndsWith } = require("./../src/index");
describe('StringEndsWith', () => {
    it('Should return false when the first argument is "a" but the second argument is empty', () => {
        let str = 'a';
        let endOfTheString = '';

        expect(StringEndsWith(str, endOfTheString)).toBe(false);
    });

    it('Should return true when the first argument is "b" and the second argument is "b"', () => {
        let str = 'b';
        let endOfTheString = 'b';

        expect(StringEndsWith(str, endOfTheString)).toBe(true);
    });

    it('Should return false when the first argument is "ab" and the second argument is "c"', () => {
        let str = 'ab';
        let endOfTheString = 'c';

        expect(StringEndsWith(str, endOfTheString)).toBe(false);
    });
});