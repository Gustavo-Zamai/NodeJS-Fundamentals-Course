import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.white.bold("Select tool 1- QRCODE or 2- PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Select between 1 and 2 only"),
        required: true,
    },
];

export default promptSchemaMain;