
**Testes Unitário em Javascript com Jest**

**Criar Projeto**

    npm -init -y

**Instalar JEST**

    npm install —save-dev jest

**Alterar package.json para rodar teste com jest**

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


**Primeiro Código**

```jsx
const sum = (a, b) => a + b;

module.exports = { sum };

```

**Primeiro Teste**

```jsx
const { sum } = require('./my-code');

it('sums 2 numbers', () => {

    const result = sum(2, 3);

    expect(result).toBe(5);

})

```

**Executa Teste**

npm test

**Before All - Executa antes de todos os testes**

**Before Each - Executa antes de todos os testes**