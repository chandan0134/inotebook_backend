const mongoose=require('mongoose')

const NoteSchema = new Schema({
    name:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true,
        unique:true

    },
    tag:{
        type:String,
        requied:true,
        default:general
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports=mongoose.model('Notes',noteSchema);