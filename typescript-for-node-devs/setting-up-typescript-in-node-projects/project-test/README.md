# ⚙️ Setting Up TypeScript in a Node.js Project

This is a simple project created for learning how to set up **TypeScript in a Node.js environment** using modern tools such as [`tsx`](https://github.com/esbuild-kit/tsx) and [`tsup`](https://tsup.egoist.dev/).

---

## 🧠 Project Purpose

The main goal of this project is to:

- Understand how to initialize and configure a Node.js project with TypeScript
- Use modern developer tools like `tsx` for development and `tsup` for bundling
- Learn about type safety, compilation, and how TypeScript improves reliability in JavaScript projects

---

## 📁 Project Structure

```bash
project-test/
├── dist/           # Compiled JS output (after build)
├── node_modules/
├── src/
│ └── index.ts      # Main TypeScript file
├── .gitignore
├── package.json
├── tsconfig.json
```
---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Mode (auto-reload)
Run the code directly using tsx:

```bash
npm run start:dev
```
Or with auto-reload:

```bash
npm run start:watch
```
### 3. Build for Production
Compile the project using tsup:

```bash
npm run dist
```

### 4. Run the Compiled Code
```bash
npm run start:dist
```

## 🧪 Example Code (src/index.ts)
```ts
(function main() {
    let myEmail: string = "gustavo@gmail.com";
    console.log(myEmail);
})();
```
## 🧰 Tools Used
| Tool                                          | Description                               | Purpose                                    |
| --------------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| [TypeScript](https://www.typescriptlang.org/) | Superset of JavaScript with static typing | Adds type safety and catches errors early  |
| [TSX](https://github.com/esbuild-kit/tsx)     | Lightning-fast runtime for TS files       | Runs TypeScript directly with zero config  |
| [TSUP](https://tsup.egoist.dev/)              | Zero-config bundler based on esbuild      | Transpiles and bundles TS to JS for deploy |


## 📌 TypeScript Compiler Settings (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```
## 📄 License
This project is licensed under the ISC License.

## 👨‍💻 Author
Created by **Gustavo-Zamai** as part of learning how to set up and run TypeScript in Node.js environments.