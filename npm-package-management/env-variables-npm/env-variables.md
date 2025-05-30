# 🌱 Using .env and Environment Variables in Node.js

This mini project or lesson introduces how to use `.env` files in Node.js applications to manage sensitive data securely.

---

## 🔐 What is a `.env` File?

A `.env` file is a simple text file used to store **environment variables**, which are values that can affect the way running processes behave on a computer.

These variables are typically used to store:

- API keys
- Database credentials
- Secret tokens
- Port numbers
- Any configuration that shouldn't be hardcoded into your application

---

## ⚠️ Why Use Environment Variables?

- ✅ **Security**: Keeps sensitive data like API keys and passwords **out of your codebase**
- ✅ **Environment-specific config**: Easily swap configurations between **development**, **testing**, and **production**
- ✅ **Portability**: Makes it easier to run the same app across different machines or environments

---

## 🗂️ Typical File Naming

The file is usually named:

.env

```yaml
Sometimes you might also find:

- `.env.development`
- `.env.production`
```
These allow for custom setups depending on your app's running mode.

---

## ⚙️ How to Use

1. **Install the `dotenv` package** (if needed):

```bash
npm install dotenv
```
2. **Create a `.env` file in your project root:**

```ini
DB_USER=myuser
DB_PASS=mypassword
PORT=3000
```
3. **Load the variables in your code:**

```js
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DB_USER);
console.log(process.env.PORT);
```

## 🧪 Example .env Usage in Development
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=123456
```
**⚠️ In production, this file is usually replaced or managed by the deployment environment (e.g., Docker, Vercel, Heroku, etc.).**

## 🙈 Don't Forget to .gitignore It!
**Always add `.env` to your .`gitignore` to prevent pushing secrets to version control:**

```bash
.env
```

## ✅ Best Practices
- Use uppercase and underscores in variable names (e.g., API_KEY, DB_USER)
- Never commit .env files to public repositories
- Consider using .env.example to show expected variables without actual values
- Use libraries like dotenv-safe to validate required variables exist
