import connectToDatabase from "./database/database.js";

(async function main() {
    //await connectToDatabase("Gustavo", "1234");

    console.log(process.env.USER_DATABASE);
    console.log(process.env.PASSWORD_DATABASE);

    //await connectToDatabase("Gustavo", "1234");
    //await connectToDatabase("Ze", "4321");
    await connectToDatabase(process.env.USER_DATABASE, process.env.PASSWORD_DATABASE);
})();