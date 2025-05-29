import chalk from 'chalk';
import logSymbols from 'log-symbols';

//console.log(chalk.magenta.bgWhite.bold("Hello using chalk dependency"));

console.log(logSymbols.success, chalk.green.bgWhite.italic("Server running..."));

console.log(logSymbols.error, chalk.red.bgWhiteBright.bold("Shutdown system, fatal error..."));