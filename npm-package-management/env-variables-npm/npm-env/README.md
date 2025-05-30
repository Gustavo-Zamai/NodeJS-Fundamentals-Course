# 🔐 Node.js Environment Variables Practice

This mini project demonstrates how to use **environment variables** in a Node.js application using the `.env` file and the `--env-file` flag introduced in recent Node.js versions.

---

## 📚 Objective

- Understand the purpose and usage of `.env` files
- Securely handle sensitive data (e.g., usernames and passwords)
- Simulate database login logic using environment variables
- Learn to run different environments (development vs production)

---

## 📁 Project Structure

```
├── src/
│ ├── index.js                  # Entry point of the app
│ └── database/
│      └── database.js          # Fake DB connection function using env vars
├── .env.development            # Development environment variables
├── .env.prod                   # Production environment variables
├── .gitignore
├── package.json
└── README.md
```
---

## ⚙️ How It Works

The function `connectToDatabase(user, password)` checks if the provided values match those stored in environment variables (`process.env.USER_DATABASE`, `process.env.PASSWORD_DATABASE`). If they match, a success message is printed.

---

## 🛠️ How to Use

### 1. Clone the repository

```bash
git clone https://github.com/your-username/npm-env-practice.git
cd npm-env-practice
```

### 2. Install dependencies
```bash
npm install
```
### 3. Configure .env files
**`.env.development`**
```env
USER_DATABASE=Gustavo
PASSWORD_DATABASE=1234
```
**`.env.prod`**
```env
USER_DATABASE=Geralt
PASSWORD_DATABASE=6669
```

## 🚀 Run the Project
### Development Mode
```bash
npm run start:dev
```
### Production Mode (Simulation)
```bash
npm run build
```

## 📜 Example Output
```bash
Gustavo connected to database
```
#### or

```bash
Couldnt connect to database
```
## 📌 NPM Scripts

| Script     | Description                          |
|------------|--------------------------------------|
| `start:dev`| Runs the app using `.env.development`|
| `build`    | Runs the app using `.env.prod`       |


## 💡 Best Practices for Env Variables
#### ✅ Do not commit .env files to source control

#### ✅ Use .env.example as a template for other developers

#### ✅ Use different .env files for different environments (dev, prod, test)

#### ✅ Use strong passwords and secrets

#### ✅ Load environment variables as early as possible

## 🔒 .gitignore Includes
```bash
node_modules/
.env.*
```
This ensures sensitive information is not committed to your repository.
