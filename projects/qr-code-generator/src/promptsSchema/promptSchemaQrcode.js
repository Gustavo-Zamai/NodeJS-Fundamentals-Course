import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.white.bold("Enter the link to generate QR Code: "),
    },
    {
        name: "type",
        description: chalk.white.bold("Select the type 1- NORMAL or 2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Select between 1 and 2 only"),
        required: true
    },
];

export default promptSchemaQRCode;