import mongoose from "mongoose";

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      
    },

    email:{
        type:String,
        require:true,
        unique: true,
    },
    legal_needs:{
         type:String,
         require:true
    },
    preferred_language:{
        type:String
    },
    aadhar:{
        type:String,
        require:true,
        unique: true,
    },
    budget:{
        type:Number
    },
    availability:{
       type:String
    },
    experience:{
         type:Number
    },
    gender:{
        type: String,
        enum: ['male', 'female'],
    },
    age:{
       type:Number
    },
    city:{
        type:String
    }


    
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", clientSchema);
export default Client