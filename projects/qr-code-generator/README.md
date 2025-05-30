# 🔑 QR Code and Password Generator

A simple Node.js utility project that provides two main tools:

- Generate QR Codes from URLs (either standard or terminal style)
- Generate secure random passwords based on configurable character sets and length

---

## 📦 Features

- Interactive CLI using `prompt` package for user inputs
- QR Code generation with `qrcode-terminal`
- Password generation with configurable options for uppercase, lowercase, numbers, and special characters
- Environment variables to securely configure password generation settings
- Colorful CLI output using `chalk`

---

## 🌱 Environment Variables

Configure your `.env` file with the following variables:

```env
UPPERCASE_LETTER=true
LOWERCASE_LETTER=true
NUMBER=true
SPECIAL_CHARACTER=true
PASSWORD_LENGTH=12
```
These control the allowed characters for password generation and the length of the password.

## 🎬 Getting Started
###  Prerequisites
- Node.js (version 16 or above recommended)

- npm (comes bundled with Node.js)

### Installation
- Clone the repository and install dependencies:

```bash
npm install
```
### Running the Project
- To start the app in development mode with file watching (auto-restart on file changes):

```bash
npm run start:dev
```
- To start the app in development mode without file watching:

```bash
npm run start:dev:basic
```

## 🧩Usage
#### Upon running, you'll be prompted to select between:

- **1.Generate a QR Code**

- **2.Generate a Password**

#### Follow the prompts for each option:

**`QR Code`: enter the link and select output type (normal or terminal style).**

**`Password`: a password is generated based on your .env configuration.**

## 🗂️ Project Structure
```bash
.
├── src/
│   ├── index.js                                    # Main entry point
│   ├── promptsSchema/                              # Prompt schemas for CLI input validation
│   │   ├── promptSchemaMain.js
│   │   └── promptSchemaQRCode.js
│   ├── services/
│   │   ├── password/
                └── utils/
                      └── getAllowedCharacters.js   # Utility to get allowed chars from env
│   │   │   ├── create.js                           # Password generation CLI flow
│   │   │   └── handle.js                           # Password logic
│   │   └── qrCode/
│   │       ├── create.js                           # QR code generation CLI flow
│   │       └── handle.js                           # QR code logic
├── .env                                            # Environment variables (not committed)
├── package.json
└── README.md
```

## 💡 Suggestions for Improvement
- `Add Input Validation`: Implement stricter validation and error handling for user inputs to improve user experience.
 
- `Unit Tests`: Add tests (using Jest or Mocha) to verify core logic such as password generation and QR code creation.
 
- `Custom Password Length`: Allow the user to specify password length via prompt instead of only .env.
 
- `Save QR Codes to File`: Extend QR code generation to save PNG or SVG files besides terminal output.
 
- `Enhanced CLI UX`: Use more sophisticated CLI libraries like inquirer for better prompts and menus.
 
- `Dockerize the Application`: Provide a Docker container for easy deployment or usage without local setup.
 
- `Add Documentation for Scripts`: Document all npm scripts with explanations and examples.
 
- `Use dotenv Package`: Explicitly use dotenv package to load .env variables at runtime for better environment management.

- `Support Multiple Languages`: Make CLI support internationalization/localization.

## 📜 License
This project is licensed under the ISC License.

## 👨‍💻 Author
`Gustavo Zamai`