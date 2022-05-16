const dbConnect=require('./dbConnection');

const updateData=async ()=>{
    const db=await dbConnect();
    let result=await db.updateMany(
        {brand:'vivo'},{
            $set:{brand:'oppo',price:100}
        }
    )
    console.log(result);
}

updateData();

//Output in console:
// {
//     acknowledged: true,
//     modifiedCount: 1,
//     upsertedId: null,
//     upsertedCount: 0,
//     matchedCount: 1
//   }