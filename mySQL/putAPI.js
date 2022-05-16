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

// Put api:
// Static data:
// change the data with given id:
// app.put("/",(req,resp)=>{
//     const data= ["tony","0023","reader","2"];
//     con.query("UPDATE users SET name =? ,password= ?, user_type = ? where id=?",data,(err,result,fields)=>{
//         if(err){
//             throw error;
//         }
//         else{
//             resp.send(result);
//         }
//     })
// });

// Parse in JSON format the data from req.body:
app.use(express.json);

// Dynamic data:
app.put("/ :id",(req,resp)=>{
    const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
    con.query("UPDATE users SET name =? ,password= ?, user_type = ? where id=?",data,(err,result,fields)=>{
        if(err){
            throw error;
        }
        else{
            resp.send(result);
        }
    })
});

app.listen(5000);