const fs=require('fs');
const input=process.argv;

//It will create and remove a new file using command line:
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid input");
}


// In cmd Line:
// node commandLine.js add runInNewContext.txt "this file is created using command line"
