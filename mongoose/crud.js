const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm");

// Adding a validation : Creating schema
 const ProductSchema=new mongoose.Schema(
        {
            name:String,
            price:Number,
            brand:String,
            category:String
        });


//Save in database:
const saveInDB=async()=>{
   const Product=mongoose.model('products',ProductSchema);
    let data=new Product(
        {name:'m8',
        price:200,
        brand:"micromax",
        category:'mobile'
        }
        );
    let result=await data.save();
    console.log(result);
}
// saveInDB();

// Update in database:
 const UpdateInDB=async ()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=await Product.updateOne(
        {name:"m8"},{$set:{price:700}}
    );
  console.log(data);
 }

//  UpdateInDB();

const deleteInDB=async()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=await Product.deleteOne(
        {name:"m8"}
    );
  console.log(data);
}
// deleteInDB();

const findInDB=async()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=await Product.find(
        {name:"m8"}
    );
  console.log(data);
}

// findInDB();