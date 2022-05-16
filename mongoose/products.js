//Defining model and schemas:

const mongoose=require('mongoose');

// Schemas:
const ProductSchema=new mongoose.Schema(
    {
        name:String,
        brand:String,
        price:Number,
        category:String
    });
//  Model: 
// Schemas are used in models thats why dont need to export them:
    module.exports=mongoose.model('products',ProductSchema);

