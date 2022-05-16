// Exporting from import2 file
// Importing in import1 file

const import2=require('./import2');

console.log(import2.x +import2.y);     //22
console.log(import2);
console.log(import2.z());

// Output:
// { x: 12, y: 10, z: [Function: z] }
// 10