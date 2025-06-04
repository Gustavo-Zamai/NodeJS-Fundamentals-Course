async function getBaseEmail(senderName:string) : Promise<string>{
    let base = await getHeaderText();

    base  += ` Hello ${senderName}, i would like to apply for the position`;
    base += "\n i'm leaving my resume";

    return base;
}

async function getHeaderText(): Promise<string> {
    return "Email to you";
}

export {
    getBaseEmail,
};