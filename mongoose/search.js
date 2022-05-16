const  express=require('express');
require('./dbConnection');
const Product=require('./products');

const app=express();

// to parse the data of req.body:
app.use(express.json());  

// Search: regex is used
app.get('/search/:key',async(req,resp)=>{
    let data=await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
})

app.listen(4001);