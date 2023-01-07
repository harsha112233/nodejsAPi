const  mongoose = require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    movietype:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
     },
     trailer:{
       type:String,
       required:true
     },
     releaseDate:{
        type:String,
        required:true
     }

})

module.exports=mongoose.model('Product',productSchema);