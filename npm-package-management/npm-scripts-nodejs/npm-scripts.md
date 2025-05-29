# 📜 NPM Scripts & `package.json` Essentials

> Reference: [docs.npmjs.com](https://docs.npmjs.com)

---

## 📦 What is `package.json`?

The `package.json` file is the heart of any Node.js project. It stores metadata about the project and defines dependencies, scripts, and other configuration settings.

### 🧩 Key Properties

| Property        | Description |
|-----------------|-------------|
| `name`          | Name of the project/package |
| `version`       | Current version of the project |
| `description`   | Short description of the project |
| `main`          | Entry point file (e.g., `index.js`) |
| `scripts`       | Custom NPM script commands |
| `author`        | Name of the author |
| `license`       | License type (e.g., `ISC`, `MIT`) |
| `dependencies`  | Production packages the app needs |
| `devDependencies` | Development-only packages |

---

## ⚙️ NPM Scripts

Inside `package.json`, under the `"scripts"` section, you can define **custom commands** to simplify routine tasks.

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "lint": "eslint .",
  "test": "echo \"No tests specified\" && exit 0"
}
```
You can run any script like this:

```bash
npm run <script-name>

```

## 🧩 Combine Multiple NPM Commands
You can combine multiple commands in a single script using logical operators:

### ➕ Run in sequence
```json
"scripts": {
  "build": "echo Building... && npm run lint && npm run test"
}
```
### 🔄 Run in parallel (on Unix/macOS)
```json
"scripts": {
  "dev": "npm run watch-css & npm run start-server"
}
```
On Windows, consider using the concurrently package for parallel tasks:

```bash
npm install concurrently --save-dev
```
```json
"scripts": {
  "dev": "concurrently \"npm run watch-css\" \"npm run start-server\""
}
```

## 🛠 Useful Tips
- Use scripts to:

    - Run linters, formatters, tests, builds
 
    - Start development or production servers
 
    - Clean up files or folders
 
    - Automate tasks in your workflow

    - Use pre and post prefixes to hook into other scripts:

```json
"scripts": {
  "prestart": "npm run lint",
  "start": "node app.js",
  "poststart": "echo Server started"
}
```

### 📁 Example: Minimal package.json
```json
{
  "name": "npm-script-example",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "lint": "eslint .",
    "dev": "nodemon index.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

## 📌 Summary
- The scripts section in package.json allows automation of common tasks.

- You can combine commands using && (sequential) or &/concurrently (parallel).
 
- You can use pre and post hooks to extend existing scripts.

## 🔗 Learn More
📘 [docs.npmjs.com](https://docs.npmjs.com)
