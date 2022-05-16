//Import :
const express=require('express');

//Execute:
const app=express();

// Create homepage:
// http://localhost:4000/?name=mukul

// Output:
// Data sent by browser : { name: 'mukul' }
// req.query returns a object
app.get('',(req,resp)=>{
    console.log("Data sent by browser :",req.query);
    resp.send("Hello,"+req.query.name);
})
// Create About us page:
// http://localhost:4000/about
// Render HTML data:
app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="Username" value="${req.query.name}"/>
    <button>Click Me </button>
    <a href="/help" >Go to help page </a>
    <br/>
    <a href="/" >Go to homepage page </a>
    `);
})

// Create help page:
// render JSON data:
app.get('/help',(req,resp)=>{
    // resp.send("<h1>Hello, this is a Help Page</h1>");
    resp.send([{
        name:'Mukul',
        email:"mukuldata@gmail.com"
    },
    {
        name:'Ajay',
        email:"ajay@gmail.com"
    }
]
    );
})

app.listen(4000);

