## 🌐 ESM (ECMAScript Modules)

### 📌 Características principais

- **Assíncrono por padrão**
  - O carregamento de módulos com `import` é feito de forma **assíncrona**.
  - Ideal para aplicações modernas, especialmente no front-end.

- **Sintaxe baseada em `import` e `export`**
  - Importação:
    ```js
    import express from 'express';
    ```
  - Exportação:
    ```js
    export function somar(a, b) {
      return a + b;
    }
    ```

- **Carregamento estático**
  - Os módulos ESM são analisados **antes da execução**, o que permite otimizações como tree-shaking.

- **Suporte nativo em navegadores**
  - Módulos ESM podem ser usados diretamente no front-end com a tag `<script type="module">`.

- **Mais compatível com frameworks front-end**
  - É o padrão utilizado em bibliotecas e frameworks modernos como React, Vue, Angular, Svelte, etc.

- **Necessário configurar no Node.js**
  - Para usar ESM no Node.js:
    - Adicione `"type": "module"` no seu `package.json`
    - Ou utilize a extensão `.mjs`

---

### 📦 Comparação com CommonJS

| Característica       | CommonJS (`require`)     | ESM (`import`)         |
|----------------------|--------------------------|------------------------|
| Execução             | Sincrona                 | Assíncrona             |
| Suporte no navegador | ❌ Não                   | ✅ Sim                 |
| Suporte no Node.js   | ✅ Padrão                | ✅ Com `"type": "module"` |
| Sintaxe              | `require/module.exports` | `import/export`        |
| Carregamento         | Dinâmico                 | Estático               |

---

### 📌 Exemplo prático

```js
// arquivo: calculadora.js
export function somar(a, b) {
  return a + b;
}
```

```js
// arquivo: app.js
import { somar } from './calculadora.js';
console.log(somar(5, 3)); // 8
```