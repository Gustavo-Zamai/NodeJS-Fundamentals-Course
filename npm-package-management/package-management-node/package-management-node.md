
# 📦 Node.js Package Management with NPM

## 📌 What is NPM?

**NPM (Node Package Manager)** is the default package manager for Node.js. It comes automatically installed when you install Node.js.

- **Website:** [https://www.npmjs.com](https://www.npmjs.com)

## ✅ Check if NPM is installed:

```bash
npm --version
```

## 📦 What is a Package?
A package is a piece of reusable code (usually a module or library) that solves a specific problem or implements a set of related features. Packages are stored and distributed through the NPM repository.

    "Packages are small, reusable pieces of software saved in the cloud to be used in multiple applications. Managing only one version simplifies maintenance."

## 📁 Dependencies
A dependency is a package that a project relies on to function properly.

When you install a package, it is listed in the project's package.json under the dependencies section.

Dependencies are essential for the application to run.

Install a dependency:
```bash
npm install <package-name>
```

## 🛠️ Dev Dependencies
Dev dependencies are packages needed only during development (e.g., testing, build tools, linters).

These are not required in production and are ignored during deployment.

Install as a dev dependency:
```bash
npm install <package-name> --save-dev
```
In package.json, they appear under the devDependencies section.

## 📚 NPMJS Repository
The npmjs.com repository hosts thousands of public packages/libraries available to use freely.

Developers can also publish their own packages to the repository using NPM.

## 🚀 NPM Responsibilities
Install packages (dependencies)

Uninstall packages

Update packages

Publish your own packages to the npm registry

## 📦 Project Configuration: package.json
The package.json file contains all metadata relevant to the project, including:

Project name and version

Scripts

Dependencies and devDependencies

License

Description

Generate it with:

```bash
npm init
```
Or automatically (with defaults):

```bash
npm init -y
```

## 🔧 Package Management Tools
NPM – default package manager for Node.js

Yarn – alternative package manager developed by Facebook with better performance in some scenarios

pnpm – fast, disk space-efficient alternative

## 🔍 Useful Resource
Firebear Studio:
75 Best Node.js CLI Tools & Utilities

Great for discovering powerful command-line tools built with or for Node.js.
