import User from "../model/user.js";
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(404).json("User not found");

    // const checkPass = await bcrypt.compare(req.body.password, user.password);

    if (req.body.password != user.password)
      res.status(400).json("Wrong Password");

    const token = jwt.sign(
      {
        email: req.body.email,
        password: req.body.password,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "2d",
      }
    );
    console.log(user);
    const isOnboard = user.isOnboarded
    return res.status(200).json({
      message: "Auth successful",
      isLSP: user.isLSP,
      token: token,
      isOnboard: isOnboard
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const register = async (req, res) => {
  // const salt = await bcrypt.genSalt(10);
  // const hashedPass = await bcrypt.hash(req.body.password, salt);

  const user = await new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isLSP: req.body.isLSP,
  });

  const existingUser = await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  });

  if (existingUser) {
    // Notary with the given username or email already exists
    return res.status(400).json({
      message: "User already exists with the provided username or email",
    });
  }
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
};
