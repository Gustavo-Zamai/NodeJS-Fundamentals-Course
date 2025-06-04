//console.log("Ola");
import { getBaseEmail } from "./services/email";

(async function main() {
  console.log(await getBaseEmail("Gustavo"));

  console.log("End of program");
  console.log("...");
})();
