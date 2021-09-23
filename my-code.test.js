const { sum, inOneHour } = require('./my-code');

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

describe('time function', () => {
    
    it('return the time', () => {
        //isolar funções externas Date.now
        const realDate = Date.now.bind(global.Date);
        global.Date.now = () => 0;
        expect(inOneHour()).toBe(3600000);
        global.Date.now = realDate;
    });
});