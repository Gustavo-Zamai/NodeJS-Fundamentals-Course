# 📚 ESM Practice Project (Node.js)

This is a simple project designed to help you **learn and practice ECMAScript Modules (ESM)** in a Node.js environment.

> 🔍 Focuses on using `import/export`, handling module files, and organizing reusable code.

---

## 📦 Project Structure

```bash
project/
│
├── utils/
│ ├── database.js # Database functions and constants
│ └── api.js # API utility functions
│
├── index.js # Main entry point
├── package.json
```


---

## 🚀 Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/Gustavo-Zamai/esm-modules.git
cd esm-modules
```

### 2. Enable ESM in Node.js
Add the following to your package.json:

```json
{
  "type": "module"
}
```
This allows Node.js to understand import/export syntax.

### 3. Run the application
```bash
node index.js
```

---

## 📘 How It Works
### ✅ Import Types Demonstrated

- Named imports
```js
import { connectToDatabase } from "./utils/database.js";
```
 - Import everything

```js
import * as database from "./utils/database.js";
```
- Destructuring multiple exports

```js
import { connectToDatabase, disconnectDatabase, databaseType } from "./utils/database.js";
```
- Direct exports

```js
export const key = { ... };
```
- Default export (optional, currently commented out)

---

## 🛠 Modules Overview
### /utils/database.js

- connectToDatabase(database)

- disconnectDatabase()

- databaseType (object describing DB config)

### /utils/api.js
- key (API key object)

- getDataFromApi() (mock function simulating API call)

---

## 📎 Notes
You must include .js extension in ESM import paths.

Designed for learning purposes, not production ready.

Add logging or testing tools to expand and reinforce learning.

## 📄 License
This project is open for learning and practice. Feel free to modify and use it as a boilerplate.