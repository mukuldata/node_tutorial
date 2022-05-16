// As filesystem in non global module ...we need to import it

//Recommended to import first:
const fs=require('fs');

// Create a new file with given text:
fs.writeFileSync("hello1.js","This file is created by filesystem");



// Tells  directory name  and filename:
console.log("-->",__filename);
console.log("-->",__dirname);
