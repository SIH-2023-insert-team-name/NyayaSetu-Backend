import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Connect } from "./database/db.js";
import Route from "./routes/route.js";
import bodyParser from "body-parser";
import morgan from "morgan";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(morgan("common"));

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

Connect(process.env.DB_URL);

app.listen(port, () => console.log(`server is running on port ${port} `));
