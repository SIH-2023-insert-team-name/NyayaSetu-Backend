import Review from "../model/reviews.js";

export const addReview = async (req, res) => {
  try {
    const review = await new Review({
      lawyer_email: req.body.username,
      client_email:req.body.name,
      text: req.body.text,
      rating: req.body.rating
    });

    await review
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully saved",
          details: review,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "failed to save",
          details: err,
        });
        console.log(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};




export const getAllReviews=async(req,res)=>{
  
  try {
    const reviews=await Review.find()
    res.status(200).send(reviews);
     
  } catch (error) {
      res.status(500).json(error)
  }
}

