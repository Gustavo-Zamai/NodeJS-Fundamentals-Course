# 📦 NPM Packages Basic

This project is a simple demonstration of how to manage dependencies and dev dependencies in a Node.js project using **NPM**. It uses the packages `chalk` and `log-symbols` to print styled and symbolic messages to the console.

---

## 🧪 Example Output

```bash
✔ Server running...
✖ Shutdown system, fatal error...
```
The output above is styled with colors and symbols using the installed packages.

## 📁 Project Files
- index.js: Demonstrates usage of the installed packages.

- package.json: Lists the project dependencies and metadata.

- package-lock.json: Automatically generated file to lock dependencies.

## 📚 NPM Concepts Practiced
### 📥 Install Dependencies
- Regular dependency:

```bash
npm install chalk
```
- Dev dependency:

```bash
npm install log-symbols --save-dev
# or shorthand
npm i log-symbols -D
```

## 🔄 Restore Dependencies
- To restore all project dependencies from package-lock.json:

```bash
npm install
```
- This acts as a “recipe” to rebuild the exact project environment.

## ❌ Uninstall a Package
```bash
npm uninstall <package-name>
```
- This also removes the reference from package-lock.json and package.json.

## 🧬 Dependency Tree
```bash
npm fund
```
- Displays a tree of all project dependencies with links and details.

## ⬆️ Update a Dependency
```bash
npm update <package-name>
```
- Updates the selected package to the latest compatible version.

## 🚀 How to Run
```bash
# Install dependencies
npm install

# Run the script
node index.js
```
## 📦 Installed Packages
- Package	{chalk, log-symbols}
- Type	{Dependency, Dev Dependency}
- Description {Terminal string styling, Adds symbols like ✔, ✖, ⚠, ℹ to console
}


## 📌 Notes
This is a simple educational exercise as part of my journey through the Node.js Bootcamp (DIO).
It serves to reinforce how to work with packages, dependencies, and scripts in Node.js using NPM.