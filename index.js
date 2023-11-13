const express=require('express')

const mongoose=require('mongoose')

const URI="mongodb://127.0.0.1:27017/notebook"
const port=3000;
const app=express()

mongoose.connect(URI,{})
    .then(result=>console.log("database connected"))
    .catch(err=>console.log(err))


app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>")

})

app.listen(port,()=>{
    console.log("Server is running at http://localhost:"+port)
})