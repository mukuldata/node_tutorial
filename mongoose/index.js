const mongoose=require('mongoose');

// Connect with database:
mongoose.connect("mongodb://localhost:27017/e-comm");

// Adding a validation :
const ProductSchema=new mongoose.Schema(
        {
            name:String
        });


const main=async()=>{ 
    const Product=mongoose.model('products',ProductSchema);
    // cant enter the price:first we need validation
    let data=new Product({name:'m8',price:2000});
    let result=await data.save();
    console.log(result);
}

main();