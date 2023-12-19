import Lawyer from "../model/lawyer.js";
import fs from "fs"

export const addLawyer = async (req, res) => {
  try {
    console.log(req.body)
    const lawyer = await new Lawyer({
      name: req.body.name,
      aadhar: req.body.aadhar,
      profile_pic: req.body.profile_pic,
      bar_association_reg_no: req.body.bar_association_reg_no,
      gender: req.body.gender,
      age: req.body.age,
      summary: req.body.summary,
      category: req.body.category,
      experience: req.body.experience,
      location: req.body.location,
      availability: req.body.availability,
      languages_spoken: req.body.languages_spoken,
      cost: req.body.cost,
      points: req.body.points,
      incentive_level: req.body.incentive_level,
      rating: req.body.rating,
      document_url: req.body.document_url
    });

    await lawyer
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully registered",
          details: lawyer,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "failed to register",
          details: err,
        });
        console.log(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.status(200).send(lawyers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchLawyer = async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.id);

    res.status(200).json(lawyer);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const altPoints = async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.body.lawyerId);
    lawyer.points = lawyer.points + 200;
    lawyer.save().then(() => {
      console.log("sucessfully altered");
    });
  } catch (error) {
    res.status(500).json(error);
  }
};



// for inserting fake data
// export const fakeLSP = async (req, res) => {
    
//   const lawyerData=[
   
//   ]
  
 
//   try {
//     await Lawyer.insertMany(lawyerData);
//     res.status(200).json({"mesg":"done"});
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
