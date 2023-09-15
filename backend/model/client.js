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
    aadhar:{
        type:String,
        require:true,
        unique: true,
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