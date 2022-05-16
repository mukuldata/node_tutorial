// Connection:
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

// ******END********

// Query :
// con.query("select* from users",(err,result)=>{
//     console.warn("result",result)
// })

// output:
// result []