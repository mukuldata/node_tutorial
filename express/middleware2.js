//RouteLevel Middleware:
const express=require('express');

const app=express();
// Adding middle ware from other file:
const reqFilter=require('./fileMiddleware.js');

// Creating routes:
app.get('',(req,resp)=>{
    resp.send("Welcome to homepage");
})

//Applying middle ware to only one route:
app.get('/users',reqFilter,(req,resp)=>{
    resp.send("Welcome to UsersPage");
})


app.get('/about',(req,resp)=>{
    resp.send("Welcome to about us Page");
})

app.get('/contact',(req,resp)=>{
    resp.send("Welcome to contact us Page");
})

app.listen(3001);