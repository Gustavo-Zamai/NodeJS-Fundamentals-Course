# 📦 CommonJS Modules – Node.js
Projeto simples para estudar e praticar a organização de código usando o sistema de módulos CommonJS no Node.js.

---
## 📁 Estrutura

```
commonjs-modules/
│
├── src/
│   ├── services/
│   │   ├── products.js       # Módulo com funções relacionadas a produtos
│   │   ├── config.js         # Módulo com variáveis de configuração
│   │   └── database.js       # Módulo com funções de conexão com banco de dados
│   │
│   └── main.js              # Arquivo principal que consome os módulos
│
├── package.json              # Metadados do projeto
└── README.md                 # Documentação do projeto
```
---
## 🚀 Como executar
### 1 Clone o repositório:
```

git clone https://github.com/Gustavo-Zamai/commonjs-modules.git

cd commonjs-modules
```
### 2 Rode com Node.js:

```
node src/main.js
```
---
## 🔍 O que você vai encontrar aqui

 - Uso de module.exports e exports para modularização de código.

 - Organização de funções por responsabilidade: produto, configuração, banco de dados.

 - Boas práticas com destructuring e encapsulamento de membros privados (não exportados).

 - Demonstração assíncrona com async/await.

---

## ✨ Exemplos de uso
```
// Importa todas as funções do módulo de produtos
const product = require('./services/products');

product.getFullName('101', 'Smart TV');
// Saída: Product: 101---Smart TV

product.getProductLabel('Tablet');
// Saída: Product: Tablet
```
---
## 📘 Conceitos aplicados
- CommonJS (require / module.exports)

- Organização por módulos

- Exportação seletiva de funções e objetos

- Funções assíncronas (async/await)

- Boas práticas de encapsulamento


## 🛠️ Requisitos
Node.js v14 ou superior


## 📄 License
Projeto com fins educacionais. Licença ISC padrão do npm init.