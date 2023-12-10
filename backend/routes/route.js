import express from "express";
import checkAuth from "../middleware/auth_user.js";
import { login, register } from "../controller/auth.js";
import { addLSP, getLSP, fetchLSP, altPoints } from "../controller/lsp-controller.js";
import { addClient } from "../controller/client-controller.js";
import { addReview,getAllReviews } from "../controller/review-controller.js";
import { checkConnection } from "../controller/connection-controller.js";


import { updateLeaderboard,getLeaderboard } from "../controller/leaderboard-controller.js";

const Router = express.Router();


Router.get("/",checkConnection)

// Authenticate login
Router.post("/authenticate", login);
// Register
Router.post("/register", register);
// add Legal Service Provider LSP
Router.post("/add/lsp", checkAuth, addLSP);
//get all legal service providers
Router.get("/get/lsp", getLSP);
//get details of a particular lsp
Router.get("/get/lsp/:id", fetchLSP);

//add client
Router.post("/add/client", checkAuth, addClient);


//post a review
Router.post("/add/review",checkAuth, addReview)

//get all reviews
Router.get("/get/reviews",checkAuth, getAllReviews)
// Post increase points
Router.post("/alt/points", altPoints)


//get updated leaderboard wrt descending order of points
Router.get("/ranks",updateLeaderboard)
//get the leaderboard rankings
Router.get("/leaderboard",getLeaderboard)


export default Router;

