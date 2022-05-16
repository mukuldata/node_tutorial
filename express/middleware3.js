// Adding routes to 20-30 routes at a time:
const express=require('express');

const app=express();
const reqFilter=require('./fileMiddleware.js');

const route=express.Router();

route.use(reqFilter);

// Creating routes:
app.get('',(req,resp)=>{
    resp.send("Welcome to homepage");
})


route.get('/about',(req,resp)=>{
    resp.send("Welcome to about us Page");
})

route.get('/contact',(req,resp)=>{
    resp.send("Welcome to contact us Page of middleware");
})

app.use('/',route);

app.listen(3003);