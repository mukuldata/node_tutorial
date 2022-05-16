// Grouped routes:
const express=require('express');

const app=express();

// Adding a middleware: for both the routes
// http://localhost:3001/users?age=10

const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide the age");
    }
    else if(req.query.age<18){
        resp.send("You cannot access this page");
    } 
    else{
        next();  
    }
    
}

app.use(reqFilter);

// Creating routes:
app.get('',(req,resp)=>{
    resp.send("Welcome to homepage");
})

app.get('/users',(req,resp)=>{
    resp.send("Welcome to UsersPage");
})


app.listen(3001);


