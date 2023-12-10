export const checkConnection=async(req,res)=>{
    res.status(200).json({
      "message":"connection is live"
    })
  }