//Delete data :
const dbConnect=require('./dbConnection');

const deleteData=async ()=>{
    let db= await dbConnect();
    let result=await db.deleteMany(
        {brand:'oppo'}
    )
        console.warn(result);
        if(result.acknowledged){
            console.log("record deleted ");
        }
}

deleteData();