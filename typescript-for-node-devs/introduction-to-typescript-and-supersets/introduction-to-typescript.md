# 📘 TypeScript – Notes & Concepts

This document contains a structured summary of TypeScript, including key concepts, advantages, real-world examples, and when to use it. It's designed as a reference for learners and developers adopting TypeScript in their projects.

---

## 🚀 What is TypeScript?

- [Official Website](https://www.typescriptlang.org)
- TypeScript is a **superset of JavaScript**, which means it adds extra features while remaining compatible with JavaScript.
- It is **strongly typed**, enabling developers to catch errors at compile time.
- TypeScript code is **transpiled** into JavaScript, which runs in browsers or Node.js environments.

---

## ✅ Benefits of TypeScript

- **Compile-time error detection**, reducing runtime issues.
- Makes code **more reliable and predictable**.
- Adds **type inference**, helping avoid redundant type declarations.
- Adds advanced features like interfaces, enums, generics, and more.
- Improves code **scalability** and maintainability in large projects.
- The `tsconfig.json` file helps define how the TypeScript compiler behaves.

---

## 🛠️ Problem TypeScript Solves

- Brings mature **static typing** to JavaScript.
- Helps manage and structure **large-scale codebases**.
- Reduces bugs related to incorrect data types or function usage.
- Increases developer confidence and **team collaboration** on complex applications.

---

## 🔄 Transpilation

- The process of converting TypeScript code to JavaScript is called **transpilation**.
- It's a combination of "Translate + Compile" → `Transpile`.
- Occurs during the build or deployment process.

---

## 🧪 JavaScript Example (Runtime Error)

```js
/*
  Pre-existing logic where sendEmail is expected to receive an object.
  This code will fail at runtime because the wrong argument type is passed.
*/

async function main() {
    sendEmail("gustavo@gmail.com", "Simple message"); 
}

async function sendEmail(email, message) {
    const from = email.from;
    const to = email.to;

    // External email sending logic
    const fakeLib = null;
    fakeLib.sendSMTP(from, to, message);
}
```

## ✅ TypeScript Example (Compile-time Safety)
```ts
/*
  Improved version using TypeScript to ensure correct typing.
  The function expects an object with specific properties.
*/

type EmailOptions = {
    from: string;
    to: string;
    // You can extend this type with more fields
};

async function main() {
    const myEmail: EmailOptions = { from: "gustavo@gmail.com", to: "zamai@gmail.com" };
    sendEmail(myEmail, "Simple message"); 
}

async function sendEmail(email: EmailOptions, message: string) {
    const from = email.from;
    const to = email.to;

    // External email sending logic
    const fakeLib = null;
    fakeLib.sendSMTP(from, to, message);
}
```
## ⚠️ Compile-time vs Runtime Errors
Understanding the difference between compile-time and runtime errors is crucial when working with TypeScript:

### 🧪 Compile-time Errors (TypeScript)
- Detected before the code runs.
 
- Caused by type mismatches, syntax issues, or incorrect usage of APIs.
 
- Helps avoid bugs early in the development process.
 
- Prevents shipping broken logic to production.
 
### 💥 Runtime Errors (JavaScript)
- Occur while the program is running.
 
- Often result from unexpected input, null references, or missing properties.
 
- May crash your application if not properly handled.

- Harder to trace and fix after deployment.

## 🧠 When to Use TypeScript
For medium to large-scale applications.

When working in teams, where type safety improves collaboration.

Projects that require long-term maintainability and reliability.

When you want to catch mistakes before deploying code.

## 📚 Documentation
Official Docs: https://www.typescriptlang.org/docs

