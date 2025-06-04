# 🛠️ Setting Up TypeScript in a Node.js Project

This guide will walk you through setting up **TypeScript** in a Node.js project from scratch, including configuration, compilation, and running code.

---

## 📦 1. Initialize a Node.js Project

```bash
npm init -y
```
This will create a package.json file.

or

```bash
npm init -y typescript -D
```
This will create a Node.js project with Typescript template

## 📥 2. Install TypeScript and Types

Install TypeScript and Node.js type definitions:

```bash
npm install typescript --save-dev
npm install @types/node --save-dev
```

## ⚙️ 3. Initialize tsconfig.json

Generate a default tsconfig.json file:

```bash
npx tsc --init
```

You can customize it according to your needs. Here's a recommended base configuration:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 📁 4. Project Structure

Recommended folder structure:

```bash
your-project/
├── src/
│   └── index.ts
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
```

Place all .ts files in the src/ folder. The compiled .js files will go to dist/.

## 🔧 5. Add Build and Start Scripts

In your package.json, add:

```json
"scripts": {
    "dist": "tsup dist",
    "start:dev": "tsx src/index.ts",
    "start:watch": "tsx watch src/index.ts",
    "start:dist": "npm run dist && node src/index.js"
}
```

Optionally, install tsx for hot-reloading in development and tsup for transpile files:

```bash
npm install tsx -D
npm install tsup -D
```

## 🚀 6. Build and Run

To compile the project:

```bash
npm run build
```

To start the compiled app:

```bash
npm start
```

To run in development (with live reload):

```bash
npm run dev
```

## 🧪 Example src/index.ts

```ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("World"));
```
## ✍️ Notes
To compare packages and see the market trends use `npmtrends.com`

## 📚 References

TypeScript Docs: https://www.typescriptlang.org/docs

Node.js Docs: https://nodejs.org/en/docs
