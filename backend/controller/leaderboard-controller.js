import Leaderboard from "../model/leaderboard.js";
import Lawyer from "../model/lawyer.js";


//fetch the results from lawyer db and according to their points, rank them 
//should be dynamic ->which means as soon as there is any update, it should be reflected in the leaderboard

const projection = {
    name: 1,  // 1 indicates inclusion
    email: 1,  // Add more fields if needed
    points: 1      // 0 indicates exclusion, exclude _id if you don't want it
};
 export const updateLeaderboard = async (req, res) => {
   
      const lawyers = await Lawyer.find({},projection).sort({ points: -1 });
       await Leaderboard.deleteMany({});
     
      await Leaderboard.insertMany(lawyers);
      res.status(200).send(lawyers)
  };


export const getLeaderboard=async(req,res)=>{
    try {
        const rankings = await Leaderboard.find();
        res.status(200).send(rankings);
      } catch (error) {
        res.status(500).json(error);
      }
}