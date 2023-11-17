const mongoose=require('mongoose')

const userSchema = new Schema({
    name:{
        type:string,
        required:true

    },
    emai:{
        type:string,
        required:true,
        unique:true

    },
    password:{
        type:string,
        requied:true
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports=mongoose.model('User',userSchema)