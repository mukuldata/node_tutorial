const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/hello1.txt`;

// Create a file:
// fs.writeFileSync(filePath,"this file is created using filesystem");

//Read a file:
 
// fs.readFile(filePath,(err,item)=>{
//     console.log(item);
// })

// Output:
{/* <Buffer 74 68 69 73 20 66 69 6c 65 20 69 73 20 63 72 65 61 74 65 64 20 75 73 69 6e 67 20 66 69 6c 65 73 79 73 74 65 6d> */}

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })


//Update file:

// fs.appendFile(filePath," and the filename is hello.text",(err)=>{
//     if(!err) console.log("File is updated");
// })

// Rename file:

// fs.rename(filePath,`${dirPath}/newText.txt`,(err)=>{
//     if(!err) console.log("Filename is updated");
// })

// Delete a file:
fs.unlinkSync(`${dirPath}/newText.txt`);