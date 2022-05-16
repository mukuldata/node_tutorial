//Import:
const {MongoClient} = require("mongodb");
// Same as above:
// const MongoClient=require("mongodb").MongoClient;

// Path of mongodb:
// Same for all :
const url= 'mongodb://localhost:27017';
const database='e-comm';
const client=new MongoClient(url);

//Function for database connection:
async function dbConnect(){
    let result=await client.connect();          //return a promise
    let db=result.db(database);          //name of database to connect
    return db.collection('products');
}

module.exports=dbConnect;