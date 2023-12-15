import mongoose from "mongoose";

const notarySchema = mongoose.Schema(
  {
    username:{
      type:String,
      require:true
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    aadhar: {
      type: String,
      require: true,
      unique: true,
    },
    profile_pic: {
      type: String,
    },
    serial_no: {
      type: Number,
    },
    bar_association_reg_no: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    age: {
      type: Number,
    },
    summary: {
      type: String,
    },
    commission_no:{
        type: String
    },
    commission_expiry:{
       type:String
    },
    jurisdiction_covered: {
      type: String
    },

    experience: {
      type: Number,
    },
    location:{
       type:String,
       require:true
    },
    availability:{
       type:String,
       enum: [
        "Part-time",
        "Full-time",
        
      ],
    },
    languages_spoken:{
        type:Array
    },
    cost: {
      type: Number,
    },
    points: {
      type: Number,
    },
    //calculate the incentive level based on the number of points
    //MongoDB itself doesn't have built-in support for dynamic 
    //field values based on conditions; such logic is usually handled at the application level.
    incentive_level:{
       type:String,
       enum: [
        "not applicable",
        "silver",
        "gold",
        "platinum",
        "premium"
        
      ],
    },
    rating: {
      type: Number,
    },
    document_url:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

const Notary = mongoose.model("notary", notarySchema);
export default Notary;
