import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL

const Connection = async () => {
  

  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true });
    console.log("db connected successfully");
  } catch (error) {
    console.log("error while connecting db ",error.message);
  }
};



export default Connection;