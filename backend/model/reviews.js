import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    lawyer_id: {
      type: String,
      require: true,
      
    },
    client_id:{
    type:String,
    require:true
    },
    text: {
      type: String,
      required: true,
      
    },
    rating: {
      type: Number,
      require: true,
      min: 1,
      max:5
    }
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
export default Review