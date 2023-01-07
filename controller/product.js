const Product=require('../models/productModel')
const getProduct=async  (req,res)=>{

   ///pagination
    let page=Number(req.query.page);
    let limit=Number(req.query.limit);
    let skip=(page-1)*limit

  

   const productData= await Product.find({}).skip(skip).limit(limit)
   res.json({productData})
}

const updateProduct=async  (req,res)=>{
    res.send("updated")
 }

module.exports={getProduct,updateProduct}