import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    sender_email: {
      type: String,
      require: true,
    },
    receiver_email: {
        type: String,
        require: true,
      },
    message:{
        type:String,
        require:true
    }
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("chat", chatSchema);
export default Chat;
