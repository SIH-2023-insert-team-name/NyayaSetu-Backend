import User from "../model/User.js";

export const addLSP = async (req, res) => {
  try {
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await user
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully registered",
          details: user,
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
