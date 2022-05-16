const express=require("express");

const app=express();
const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"nodeJS"
})

// Check the conection:
con.connect((err)=>{
    if(err){
        console.warn("Error");
    }
    else{
        console.warn("Connected");
    }
})


// Post API:
// Static data: to mySQL database;
// app.post("/",(req,resp)=>{
//     const data={name:"ajay",password:"1212",user_type:"visitor"};
//     con.query("INSERT INTO users SET ? ",data,(err,result,fields)=>{
//         if(err){
//            throw err;
//         }
//         else{
//             resp.send(result);
//         }
//     })
// })

// Parse in JSON format the data from req.body:
app.use(express.json);

// Sending dynamic data from postman:
app.post("/",(req,resp)=>{
        const data =req.body;
        con.query("INSERT INTO users SET ? ",data,(err,result,fields)=>{
            if(err){
                throw error;
            }
            else{
                resp.send(result);
            }
        })
    })

app.listen(4000);

