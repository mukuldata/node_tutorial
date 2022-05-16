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


app.get("/",(req,resp)=>{
    con.query("select * from users",(err,result)=>{
        if(err){
            resp.send("Error")
        }
        else{
            resp.send(result)
        }
    })
});

app.listen(5000);