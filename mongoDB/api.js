const express=require('express');
const dbConnect=require('./dbConnection');
const mongodb=require('mongodb');

const app=express();

//To get data from postman into node js: for POST AND PUT
app.use(express.json());

// Make API and embedd with database:
//display data from database onto browser
//GET METHOD:
app.get('/',async (req,resp)=>{
    const db=await dbConnect();
    let result =await db.find().toArray();
    console.log(result);
    resp.send(result);
})

// POST METHOD:
//1. sending data to postman :resp.send()
//2. send data from postman and get into node js (using req.body);
//3. insert the data into mongodb
app.post('/',async(req,resp)=>{
    let db=await dbConnect();   
    let result=await db.insertOne(req.body);
    resp.send(result);
})

//PUT method:
//Getting data from postman body and updating it into the mongodb:
// http://localhost:3002/note 5      : using params
app.put('/:name' ,async(req,resp)=>{
    let  db=await dbConnect();
    let result=db.updateMany(
        // {name:"s20"},
        {name:req.params.name},      // using params
        {$set:req.body}
    )
    resp.send({result:"update"});
})


// Delete method:
app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id);
    let  db=await dbConnect();
    let result =await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result);
})

app.listen(3002);
