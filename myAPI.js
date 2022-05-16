//Creating an API:
const http=require('http');
const data=require('./data');

// req use to take request from front end;
// 200 is a status i.e. OK
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(4001);