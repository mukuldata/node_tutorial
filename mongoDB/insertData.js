//Insert data to server:
const dbConnect=require('./dbConnection');


// Insert:
const insert=async ()=>{
    const db=await dbConnect();
     const result= await db.insertMany([
         {name:'note 5', brand:'vivo',price:350,category:'mobile'},
         {name:'s20', brand:'samsung',price:300,category:'mobile'}
     ]
     );
     if(result.acknowledged){
         console.log("Data is inserted");
     }
}

insert();