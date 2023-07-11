describe('StringEndsWith', () => {
    it('Should return false when the first argument is "a" but the second argument is empty', () => {
        let str = 'a';
        let endOfTheString = '';

        expect(StringEndsWith(str, endOfTheString)).toBe(false);
    });
});