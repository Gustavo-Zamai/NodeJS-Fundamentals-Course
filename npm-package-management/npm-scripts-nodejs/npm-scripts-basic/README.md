# 📦 NPM Scripts Basic

This project is a simple exploration of how to use and organize NPM scripts within a Node.js project.  
It includes examples of common script patterns, automation commands, and a few best practices.

---

## 📁 Project Structure
```bash
npm-scripts-basic/
├── package.json
├── src/
│ └── index.js
└── dist/ (created automatically after start)
```

### 📄 `src/index.js`

```js
console.log("Running through NPM Script");
console.log("Initialize system...");
```

## 🧪 Scripts Overview

Here are the scripts defined in `package.json`:

| Script         | Description                                                             |
|----------------|-------------------------------------------------------------------------|
| `prebuild`     | Automatically runs `npm install` before a `build` command (not defined) |
| `test`         | Placeholder test script (default)                                       |
| `start`        | Runs the app and creates a `dist` folder with a message                 |
| `start:dev`    | Runs the app in development mode (basic execution)                      |
| `start:watch`  | Runs the app with file watching enabled (⚠️ typo: `"npde"` should be `"node"`) |


⚠️ Note: There's a typo in the start:watch script. It should be:

```json
"start:watch": "node --watch src/index.js"
```

## 🚀 How to Run
```bash
# Install dependencies (also runs automatically via prebuild)
npm install

# Run the app and create dist/
npm start

# Run in dev mode
npm run start:dev

# Run in watch mode (make sure to fix the typo)
npm run start:watch
```

## 💡 Best Practices for NPM Script Names

| Pattern       | Purpose                                     | Example                    |
|---------------|---------------------------------------------|----------------------------|
| `start`       | Main entry point                            | `npm start`                |
| `start:dev`   | Development mode                            | `npm run start:dev`        |
| `start:watch` | Watch mode with auto-restart                | `npm run start:watch`      |
| `build`       | Production build                            | `npm run build`            |
| `lint`        | Code style check                            | `npm run lint`             |
| `test`        | Unit tests                                  | `npm test`                 |
| `format`      | Auto-format code (e.g., Prettier)           | `npm run format`           |
| `pre<task>`   | Pre-hook script (runs before `<task>`)      | `prebuild`, `prestart`     |
| `post<task>`  | Post-hook script (runs after `<task>`)      | `postbuild`, `posttest`    |


#### ✅ Use colons (:) to group related tasks (e.g., start:*, test:*, lint:*).
#### ✅ Avoid overly long or unclear script names.
#### ✅ Use concurrently if you want to run scripts in parallel.

## 🧰 Suggestions for Further Practice
Add a build script that compiles or prepares files for production.

Add a lint or format script using ESLint or Prettier.

Use concurrently to run start:dev and a watcher in parallel.

Explore cross-env to make environment variables work across OSes.

## 📌 Summary
This mini project demonstrates how NPM scripts can automate common tasks and streamline your development workflow. By following naming conventions and organizing your scripts logically, you create a more maintainable and scalable codebase.