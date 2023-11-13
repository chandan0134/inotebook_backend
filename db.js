const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/notebook?directConnection=true"
const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log("connected");
    })
    .catch((error)=>{
        console.error("error connecting to db",error);

    });

    

};

module.exports=connectToMongo;