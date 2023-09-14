import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
   
    email:{
        type:String,
        required:true
    },
   
    email_verified:{
        type:Boolean
    },
    body :{
        type:String
    }
    
},
{
    timestamps:true
});

const user=mongoose.model('user',userSchema);

export default user;