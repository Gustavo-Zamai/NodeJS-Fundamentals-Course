import prompt from "prompt";
import chalk from "chalk";
import promptSchemaMain from "./promptsSchema/promptSchemaMain.js";
import createQRCode from "./services/qrCode/create.js";
import createPassword from "./services/password/create.js";

(async function main() {
  prompt.get(promptSchemaMain, async (err, result) => {
    if (err) console.log(chalk.red(err));

    if (result.select == 1) {
      console.log(chalk.white.bold("Selected QRCode"));
      await createQRCode();
    }
    if (result.select == 2) {
      console.log(chalk.white.bold("Selected Password"));
      await createPassword();
    }
  });

  prompt.start();
})();
