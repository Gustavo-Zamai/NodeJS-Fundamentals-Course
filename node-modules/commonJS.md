## 📦 CommonJS (Sistema de Módulos do Node.js)

### 📌 Características principais

- **Sincrônico por padrão**  
  O carregamento de módulos com `require()` é feito de forma **sincronizada**, ou seja, linha a linha durante a execução.

- **Sintaxe baseada em `require` e `module.exports`**
  - Importação:
    ```js
    const fs = require('fs');
    ```
  - Exportação:
    ```js
    module.exports = minhaFuncao;
    ```

- **Carregamento dinâmico**
  - Pode-se usar `require()` dentro de blocos de código, funções ou condições:
    ```js
    if (condicao) {
      const modulo = require('./moduloOpcional');
    }
    ```

- **Uso principal em ambientes de servidor (Node.js)**
  - É o sistema de módulos padrão do Node.js até hoje.
  - Ideal para APIs, serviços back-end e CLIs.

- **Cache automático**
  - Módulos são carregados uma única vez e depois armazenados em cache. Isso evita recarregamentos desnecessários.

- **Não suporta `import/export` diretamente**
  - Para usar `import/export`, é necessário configurar o projeto como `"type": "module"` no `package.json`.

### 🧠 Vantagens do CommonJS

- Simples e compatível com versões antigas do Node.js.
- Perfeito para projetos que não exigem carregamento assíncrono de módulos.
- Muito utilizado em bibliotecas e sistemas de build tradicionais.

### ⚠️ Observação

- Ao usar `module.exports = algo`, você está substituindo o objeto de exportação.
- `exports.algo = valor` é um atalho válido, mas se `module.exports` for reatribuído, o `exports` é ignorado.

---

### 📌 Exemplo prático

```js
// arquivo: calculadora.js
function somar(a, b) {
  return a + b;
}

module.exports = { somar };
```

```js
// arquivo: app.js
const calc = require('./calculadora');
console.log(calc.somar(2, 3)); // 5
```