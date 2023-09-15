import express from "express";
import checkAuth from "../middleware/auth_user.js";
import { login, register } from "../controller/auth.js";
import { addLSP,getLSP,fetchLSP } from "../controller/lsp-controller.js";
import { addClient } from "../controller/client-controller.js";


const Router=express.Router();

// Authenticate login
Router.get("/authenticate", login);
// Register
Router.post("/register", register);
// add Legal Service Provider LSP
Router.post("/add/lsp", checkAuth, addLSP)
//get all legal service providers
Router.get("/get/lsp",getLSP)
//get details of a particular lsp
Router.get("/get/lsp/:id",fetchLSP);

//add client
Router.post("/add/client",checkAuth,addClient)


export default Router;