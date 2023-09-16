import Client from "../model/client.js";

export const addClient = async (req, res) => {
  try {
    const client = await new Client({
      name: req.body.name,
      email: req.userData.email,
      legal_needs: req.body.legal_needs,
      preferred_language: req.body.preferred_language,
      aadhar: req.body.aadhar,
      budget: req.body.budget,
      availability: req.body.availability,
      experience: req.body.experience,
      gender: req.body.gender,
      age: req.body.age,
      city: req.body.city,
    });

    await client
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully registered",
          details: client,
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
