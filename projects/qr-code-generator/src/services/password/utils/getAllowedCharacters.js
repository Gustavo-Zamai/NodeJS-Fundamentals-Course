async function allowedCharacters() {
    const allowed = [];

    if (process.env.UPPERCASE_LETTER === "true") {
        allowed.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (process.env.LOWERCASE_LETTER === "true") {
        allowed.push(... "abcdefghijklmnopqrstuvwxyz");
    }
    if (process.env.NUMBER === "true") {
        allowed.push(... "0123456789");
    }
    if (process.env.SPECIAL_CHARACTER === "true") {
        allowed.push(... "!@#$%^&*?_/");
    }

    return allowed;
}

export default allowedCharacters;
