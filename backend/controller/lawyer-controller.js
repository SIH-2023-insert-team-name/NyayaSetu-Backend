import Lawyer from "../model/lawyer.js";
import fs from "fs";
import User from "../model/user.js";

export const addLawyer = async (req, res) => {
  try {
    console.log(req.body);
    const lawyer = await new Lawyer({
      name: req.body.name,
      email: req.userData.email,
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
      document_url: req.body.document_url,
    });

    await lawyer
      .save()
      .then(async () => {
        await User.updateOne(
          { email: req.userData.email },
          { $set: { isOnboarded: true } }
        );
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

export const getSpecLawyer = async (req, res) => {
  try {
    const lawyer = await Lawyer.find({category: req.params("spec")})
    res.status(200).json(lawyer)
  } catch (error) {
    res.status(500).json(error);
  }
};

export const altPointsLawyer = async (req, res) => {
  try {
    const lawyerId = req.body.lawyerId;

    const lawyer = await Lawyer.findById(lawyerId);

    // Validate if the lawyer is found
    if (!lawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }

    // Update the points
    const updatedPoints = lawyer.points + 200;

    // Update the lawyer document
    const result = await Lawyer.updateOne(
      { _id: lawyerId },
      { $set: { points: updatedPoints } }
    );

    res.status(200).json({
      message: `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
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
