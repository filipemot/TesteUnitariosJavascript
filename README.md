**Começando com Testes Unitário em Javascript com Jest**

Projeto contendo a inicialização de criação de testes com Javascript

Baseado no Vídeo do Canal do DevPleno [https://www.youtube.com/watch?v=MQs8_KIj_PU](https://www.youtube.com/watch?v=MQs8_KIj_PU)

**Criar Projeto**
npm -init -y

```jsx
npm -init -y
```

**Instalar JEST**

```jsx
npm install --save-dev jest
```

**Alterar no package json o test para utilizar jest**

```json
{
  "name": "TestesUnitarios_DevPleno_Set_2021",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^27.2.1"
  }
}
```

**Primeiro Código**

```jsx
const sum = (a, b) => a + b;

const inOneHour = () => {
    const now = Date.now();
    const oneHourInMilliseconds = 60 * 60 * 1000;
    return now + oneHourInMilliseconds;
};

module.exports = { sum, inOneHour };
```

**Primeiro Teste**

```jsx
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
```

**Executa Teste**

```jsx
npm test
```

**Before All - Executa antes de todos os testes**

**Before Each - Executa antes de todos os testes**