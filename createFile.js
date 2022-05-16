 const fs=require('fs');
 const path=require('path');
//Get path of files folder:
 const dirPath=path.join(__dirname,'files');
//  console.log(dirPath);                  M:\node-tut\files

 //Create given number of files:
 for(i=0;i<5;i++){
     fs.writeFileSync(dirPath+"/hello"+i+".txt","this file is created using code in createFile.js");
 }
 

//  Read a directory: get all files name in form of array;
fs.readdir(dirPath,(err,items)=>{
    console.log(items);
})

//get single file:
fs.readdir(dirPath,(err,items)=>{
    items.forEach((item)=>{
        console.log("File name is "+item);
    })
})



