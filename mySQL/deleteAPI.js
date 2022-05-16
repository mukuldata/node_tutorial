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


app.delete("/:id",(req,resp)=>{
    con.query("DELETE  FROM users WHERE id =" +req.params.id,(error,results)=>{
        if(error) throw error;
        else resp.send(results);
    })
    
})

app.listen(5000);