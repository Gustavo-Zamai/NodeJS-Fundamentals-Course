import prompt from "prompt";

import promptSchemaQRCode from "../../promptsSchema/promptSchemaQrcode.js";
import qrcodeHandler from "./handle.js";

async function createQRCode(){
    prompt.get(promptSchemaQRCode, qrcodeHandler);

    prompt.start();
};

export default createQRCode;