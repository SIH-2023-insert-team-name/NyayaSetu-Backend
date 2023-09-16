import Lawyer from "../model/lawyer.js";

export const addLSP = async (req, res) => {
  try {
    const lawyer = await new Lawyer({
      username: req.body.username,
      name:req.body.name,
      email: req.userData.email,
      aadhar: req.body.aadhar,
      profile_pic: req.body.profile_pic,
      serial_no: req.body.serial_no,
      enrollment_no: req.body.enrollment_no,
      gender: req.body.gender,
      age: req.body.age,
      summary: req.body.summary,
      category: req.body.category,
      experience: req.body.experience,
      cost: req.body.cost,
      points: req.body.points,
      rating: req.body.rating,
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

export const getLSP = async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.status(200).send(lawyers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchLSP = async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.id);

    res.status(200).json(lawyer);
  } catch (error) {
    res.status(500).json(error);
  }
};
