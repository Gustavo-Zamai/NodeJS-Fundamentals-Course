# 🐞 Debugging with TypeScript — Learning Project

This is a simple project created to explore and understand how **debugging** works in a TypeScript environment. The focus here is not on the complexity of the logic, but on **setting up debugging tools** and learning how to effectively use breakpoints, watch variables, step through code, and inspect the runtime.

---

## 🎯 Project Goals

- Learn how to debug TypeScript code in a Node.js project
- Configure debugging tools (such as VS Code)
- Practice setting breakpoints, watches, and inspecting call stacks
- Understand how TypeScript code maps to JavaScript during debugging
- Create and configure launch.json file

---

## ⚙️ Tech Stack

| Tool       | Description                                 | Purpose                                      |
|------------|---------------------------------------------|----------------------------------------------|
| [TypeScript](https://www.typescriptlang.org/) | Superset of JavaScript with static typing    | Adds type safety and better error checking   |
| [TSX](https://github.com/esbuild-kit/tsx)        | Fast TypeScript runner                       | Run `.ts` files directly in dev              |
| [VS Code](https://code.visualstudio.com/)       | Code editor with built-in debugger           | Configure breakpoints and inspect execution  |

---

## 📁 Project Structure
```yaml
debug-typescript-project/
├── src/
│ └── index.ts # File with test logic for debugging
  └── services/
    └── email.ts
├── .vscode/
│ └── launch.json  # Debug configuration for VS Code
├── node_moddules/
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧪 Example Code (`src/index.ts`)

```ts
function calculate(a: number, b: number): number {
  return a + b;
}

function main() {
  const x = 5;
  const y = 10;
  const result = calculate(x, y);

  console.log(`The result is: ${result}`);
}

main();
```
Use breakpoints inside the calculate function to step through the logic.

## 🐞 VS Code Debug Configuration
Create a .vscode/launch.json file:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug TypeScript",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/src/index.ts",
      "runtimeExecutable": "tsx",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```
Run via VS Code's "Run and Debug" panel.

## 🚀 Getting Started
Install dependencies:

```bash
npm install
```
Start the project in debug mode:

```bash
npm run start:dev
```
Or launch the debugger in VS Code using the Debug TypeScript configuration.

## 📌 Notes
Use breakpoints to pause and inspect variables.

Use the Call Stack panel to trace function calls.

TypeScript's source maps allow debugging on the original .ts files.

## 👨‍💻 Author
Created by **Gustavo Zamai** for educational purposes while learning TypeScript and Node.js debugging practices.