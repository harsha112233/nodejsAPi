require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/productModel");
const ProductData = require("./product.json");
// const mongoose=require("mongoose");


// mongoose.connect(
//     "mongodb+srv://Harish:YCmggsGB9lkbpuwF@productapi.v2befdu.mongodb.net/?retryWrites=true&w=majorit&&ssl=true"
//   )
//   .then((result) => {
//    console.log("success");
//   }).catch((err) => console.log(err));


const start =async  () => {
  try {
     await connectDB(process.env.MONGODB_URL);
     await Product.create(ProductData);

    console.log("success")
  } catch (error) {
    console.log("errrror",error);
  }
};
start();
