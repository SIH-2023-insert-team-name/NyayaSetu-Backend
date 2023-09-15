import express from "express";
import checkAuth from "../middleware/auth_user.js";
import { login, register } from "../controller/auth.js";

const Router=express.Router();

// Authenticate login
Router.get("/authenticate", login);

// Register
Router.post("/register", register);


export default Router;