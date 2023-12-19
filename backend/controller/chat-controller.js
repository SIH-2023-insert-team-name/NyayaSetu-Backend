import Chat from "../model/chat.js";


export const addChat = async (req, res) => {
  try {
    
    const chat = await new Chat({
      sender_email: req.body.sender_email,
      receiver_email:req.body.receiver_email,
      message:req.body.message
     
    
    });

    await chat
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully saved chat",
          details: chat,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "failed to save the chat",
          details: err,
        });
        console.log(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchChat = async (req, res) => {
    const sender_email=req.body.sender_email
    const receiver_email=req.body.receiver_email


  try {
    const chats = await Chat.find({
        $or: [
          { sender_email: sender_email, receiver_email: receiver_email },
          { sender_email: receiver_email, receiver_email: sender_email },
        ],
      }).sort({ timestamp: 1 });
    res.status(200).send(chats);
  } catch (error) {
    res.status(500).json(error);
  }
};


