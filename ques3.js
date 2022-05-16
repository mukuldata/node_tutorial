// Use of filter function:
const arr=[2,6,9,3,8,9,0,23,8,7,8,6,34,09,98];

let res=arr.filter((item)=>{
    return item>3;
})

let res1=arr.filter((item)=>{
    return item===9;
})

console.log(res);      //return an resultant  array
console.log(res1);