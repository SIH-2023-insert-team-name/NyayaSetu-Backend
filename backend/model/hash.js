import mongoose from "mongoose";

const hashcaseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,


      
    },
    parties_involved:{
       type:String
    },
    lsp_email: {
      type: String,
     
      
    },
    client_email:{
      type: String,
      
    },
   
    status: 
    { type: String, 
    enum: ['Pending', 'Accepted', 'Rejected','Closed'], default: 'Accepted'
     },
  },
  {
    timestamps: true,
  }
);

const HashCase = mongoose.model("HashCase", hashcaseSchema);
export default HashCase