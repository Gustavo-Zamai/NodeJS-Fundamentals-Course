import chalk from "chalk";
import passwordHandler from "./handle.js";

async function createPassword(){
    console.log(chalk.green("Password:"));
    const password = await passwordHandler();
    console.log(chalk.white(password));
}

export default createPassword;