const { sum } = require('./my-code');

describe('math function', () => {
    beforeAll(() => {
        console.log('Executa antes de todos os testes');
    });
    
    beforeEach(() => {
        console.log('Executa antes de todos de cada teste testes');
    });
    
    it('sums 2 numbers', () => {
        const result = sum(2, 3);
        expect(result).toBe(5);
    });
});