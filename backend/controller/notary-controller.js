import Notary from "../model/notary.js";

export const addNotary = async (req, res) => {
  try {
    const notary = await new Notary({
    
      name: req.body.name,
      // email: req.userData.email,
      aadhar: req.body.aadhar,
      profile_pic: req.body.profile_pic,
      email: req.userData.email,
      bar_association_reg_no: req.body.bar_association_reg_no,
      gender: req.body.gender,
      age: req.body.age,
      summary: req.body.summary,
      commission_no: req.body.commission_no,
      commission_expiry: req.body.commission_expiry,
      jurisdiction_covered: req.body.jurisdiction_covered,
      experience: req.body.experience,
      location: req.body.location,
      availability: req.body.availability,
      languages_spoken: req.body.languages_spoken,
      cost: req.body.cost,
      points: req.body.points,
      incentive_level: req.body.incentive_level,
      rating: req.body.rating,
    });

    await notary
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully registered",
          details: notary,
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

export const getNotaries = async (req, res) => {
  try {
    const notaries = await Notary.find();
    res.status(200).send(notaries);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchNotary = async (req, res) => {
  try {
    const notary = await Notary.findById(req.params.id);

    res.status(200).json(notary);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const altPointsNotary = async (req, res) => {
  try {
    const notaryId = req.body.notaryId;


    
    const notary = await Notary.findById(notaryId);

    // Validate if the lawyer is found
    if (!notary) {
      return res.status(404).json({ message: 'Notary not found' });
    }

    // Update the points
    const updatedPoints = notary.points + 100;

    // Update the lawyer document
    const result = await Notary.updateOne({ _id: notaryId }, { $set: { points: updatedPoints } });

    res.status(200).json({
      message: `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



