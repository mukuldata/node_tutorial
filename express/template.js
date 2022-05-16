//For dynamic website:
const express=require('express');

const app=express();

app.set('view engine','ejs');

app.get('/profile',(req,resp)=>{
    const user={
        name:"Mukul",
        age:'22',
        city:'rewari',
        skills:['java','c++','reactJs']
    }
    resp.render('profile',{user});
})

app.get('/login',(req,resp)=>{
   
    resp.render('login');
})

app.listen(5003);
