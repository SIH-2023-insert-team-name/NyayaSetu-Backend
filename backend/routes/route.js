import express from "express";
import checkAuth from "../middleware/auth_user.js";
import { login, register } from "../controller/auth.js";
import { addLSP } from "../controller/legalSP.js";


const Router=express.Router();

// Authenticate login
Router.get("/authenticate", login);
// Register
Router.post("/register", register);
// add Legal Service Provider LSP
Router.post("/add/lsp", addLSP)


export default Router;