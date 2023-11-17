const mongoose=require('mongoose')

const NoteSchema = new Schema({
    name:{
        type:string,
        required:true

    },
    description:{
        type:string,
        required:true,
        unique:true

    },
    tag:{
        type:string,
        requied:true,
        default:general
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports=mongoose.model('Notes',noteSchema);