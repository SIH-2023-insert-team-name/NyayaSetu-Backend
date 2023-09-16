import mongoose from "mongoose";

const lawyerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    aadhar: {
      type: String,
      require: true,
      unique: true,
    },
    profile_pic: {
      type: String,
    },
    serial_no: {
      type: Number,
    },
    enrollment_no: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    age: {
      type: Number,
    },
    summary: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        "criminal",
        "business",
        "constitutional",
        "criminal defense",
        "employment and labour",
        "entertainment",
        "estate planning",
        "family",
        "immigration",
        "intellectual property",
        "personal injury",
        "tax",
      ],
    },
    experience: {
      type: Number,
    },
    cost: {
      type: Number,
    },
    points: {
      type: Number,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Lawyer = mongoose.model("lawyer", lawyerSchema);
export default Lawyer;
