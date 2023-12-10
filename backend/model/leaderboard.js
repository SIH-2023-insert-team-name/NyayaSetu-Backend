import mongoose from "mongoose";

const leaderboardSchema = mongoose.Schema(
  {
    name:{
       type:String,
       require:true
    },
    lawyer_email: {
      type: String,
      require: true,
    },
    rank:{
        type:Number
    },
    points:{
        type:Number
    }
  },
  {
    timestamps: true,
  }
);

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
export default Leaderboard;
