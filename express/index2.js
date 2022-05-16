const express=require('express');
const path=require('path');

const app=express();

const htmlPath=path.join(__dirname,'html');

//For rendering static html pages:

//app.use(express.static(htmlPath));



// http://localhost:5001/about.html


// To access the html pages with url extension:
app.get('',(req,resp)=>{
    resp.sendFile(`${htmlPath}/index.html`);
})

// Url name and page name are different:
app.get('/abc',(req,resp)=>{
    resp.sendFile(`${htmlPath}/about.html`);
})

app.get('/contact',(req,resp)=>{
    resp.sendFile(`${htmlPath}/contact.html`);
})

// Make a 404 NOT Found Page:
// If page url is wrong it will give this page:
app.get('*',(req,resp)=>{
    resp.sendFile(`${htmlPath}/404.html`);
})

app.listen(5001);