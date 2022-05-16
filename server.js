//Making a server :
const http=require('http');

//createServer function takes function as a parameter:
http.createServer((req,resp)=>{
  resp.write("<h1>This is response created  by the server</h1>");
  resp.write("This is the second response ");
  resp.end();

}).listen(2001);

//Output will be shown on localhost:2001 in browser


//After every change we need to run the file again
