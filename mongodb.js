const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongoDb')
.then(() => {
    console.log("mongoDb Connected");
})

.catch((err) => {
    console.error(`error due to ${err}`);
})

const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    mail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const collection=new mongoose.model('collections',loginSchema)
module.exports=collection