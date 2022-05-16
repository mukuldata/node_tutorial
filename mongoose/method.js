const  express=require('express');
require('./dbConnection');
const Product=require('./products');

const app=express();
// to parse the data of req.body:

app.use(express.json());
//POST method:
app.post("/create",async(req,resp)=>{
    let data=new Product(req.body);
    let result=await data.save();
    console.log(result);
    resp.send(result);
})

//GET method:
//Getting data from database to postman:
app.get('/list',async(req,resp)=>{
  let data=await Product.find();
  resp.send(data);
})

//Delete method:
// http://localhost:4000/delete/62710f658b662a0119e7b264 in postman
app.delete('/delete/:_id',async(req,resp)=>{

    console.log(req.params);
   let data=await Product.deleteOne(req.params);
      resp.send(data);
  })

//PUT method:
// It will be update by the content in body of pastman:
app.put('/update/:_id',async(req,resp)=>{

    console.log(req.params);
   let data=await Product.updateOne(
    //    condition()
        req.params,
       {
        // set updated data
        $set:req.body
       }
   );
      resp.send(data);
  })

app.listen(4000);