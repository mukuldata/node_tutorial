// Event of counting no of times API called:
const express=require("express");
// Here eventEmitter is a class so in capital:
const EventEmitter=require("events");

const app=express();


const event=new EventEmitter();

let count=0;
// Capturing the event:
event.on("countAPI",()=>{
    count++;
    console.log("Event called",count)
})

app.get("/",(req,resp)=>{
    resp.send("Api called");
    event.emit("countAPI");               //generating a event
});

app.get("/search",(req,resp)=>{
    resp.send("Search Api called");
});

app.get("/update",(req,resp)=>{
    resp.send(" Update Api called");
});
app.listen(5000);