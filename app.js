const express = require('express')
const path = require('path')

const app = express()
app.use(express.json());
require('dotenv').config()

const connectDB=require('./db/connect');



const PORT=process.env.PORT || 8081

const productRoute=require('./routes/productRoute')
const commentsRoute=require('./routes/comment')

app.use('/products',productRoute)
app.use('/comments',commentsRoute)




// app.get('/html',(req,res)=>{
//   console.log(__dirname)
//   res.sendFile(`${path.resolve(__dirname)}/index.html`)
// })

app.listen(PORT, () => {
  connectDB(process.env.MONGODB_URL);
  console.log("app started",PORT)
})