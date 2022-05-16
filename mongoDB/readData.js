//Import:
const {MongoClient} = require("mongodb");
// Same as above:
// const MongoClient=require("mongodb").MongoClient;

// Path of mongodb:
// Same for all :
const url= 'mongodb://localhost:27017';
const database='e-comm';
const client=new MongoClient(url);

// This client will return a promise in result:
//Means it might take some time to get data from server
//That's why await and async is used to handle the promise:
async function getData(){
    let result=await client.connect();          //return a promise
    let db=result.db(database);          //name of database to connect
    let collection =db.collection('products');
    let response=await collection.find({}).toArray();
    // let response=await collection.find({brand:'apple'}).toArray();
    console.log(response);

}

getData();

// Output:
// [
//     {
//       _id: new ObjectId("626fb66ce68d427fc92a26b8"),
//       name: 'realme2',
//       brand: 'Realme',
//       price: 200,
//       category: 'mobile'
//     },
//     {
//       _id: new ObjectId("6270117df4ed10b457916abc"),
//       name: 'iphone 13 pro max',
//       brand: 'apple',
//       price: 2000,
//       category: 'mobile'
//     }
//   ]