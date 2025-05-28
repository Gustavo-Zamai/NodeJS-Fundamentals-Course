// need to add .js file extension in import
//import connectToDatabase from "./utils/database.js";

// import all
//import * as database from "./utils/database.js"; 

// destructuring
import { connectToDatabase, disconnectDatabase, databaseType } from "./utils/database.js";
import { getDataFromApi, key } from "./utils/api.js";

connectToDatabase('my-sql');
disconnectDatabase();