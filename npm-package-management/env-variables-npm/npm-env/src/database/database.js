async function connectToDatabase(user, password) {
    if(user === process.env.USER_DATABASE && password === process.env.PASSWORD_DATABASE){
        console.log(`${user} connected to database`);
    }else {
        console.log("Couldnt connect to database");
    }
}

export default connectToDatabase;