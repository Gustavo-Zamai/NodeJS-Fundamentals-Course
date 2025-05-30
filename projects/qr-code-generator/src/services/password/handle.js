
import allowedCharacters from "./utils/getAllowedCharacters.js";
async function passwordHandler() {
    let characters = [];
    let password = "";
    
    const passwordLength = process.env.PASSWORD_LENGTH;
    characters = await allowedCharacters();

    // check if array is empty
    if (!characters || characters.length === 0) {
        throw new Error("No allowed characters were selected. Check your .env file.");
    }
    

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    };

    return password;

}

export default passwordHandler;