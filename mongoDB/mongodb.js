const dbConnect=require('./dbConnection');


// Handle promise: method 1 (Using then)
// function to find data:

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })
// console.log(dbConnect());


// Handle promise :method 2(Using async and await)
const main=async()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.warn( data);
}
main();



// Both the function handle the promise and gives data as output:

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