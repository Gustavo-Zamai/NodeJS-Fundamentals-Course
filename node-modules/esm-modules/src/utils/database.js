const databaseType = {
    userType: "admin",
    typeData: "datalocal"
};

// export default
async function connectToDatabase(database) {
    // logic
    console.log(`Connected to database: ${database}`);
};

//single export
//export default connectToDatabase;

async function disconnectDatabase() {
    console.log(`Disconnecting from database`);
};

export {
    connectToDatabase,
    disconnectDatabase,
    databaseType,
};