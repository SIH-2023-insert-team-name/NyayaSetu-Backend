import mongoose from "mongoose";

const caseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    lawyer_email: {
      type: String,
     
      
    },
    client_email:{
      type: String,
      
    },
    client_mobile: {
      type: String,
      
    },
    status: 
    { type: String, 
    enum: ['Pending', 'Accepted', 'Rejected','Closed'], default: 'Pending'
     },
  },
  {
    timestamps: true,
  }
);

const Case = mongoose.model("Case", caseSchema);
export default Case