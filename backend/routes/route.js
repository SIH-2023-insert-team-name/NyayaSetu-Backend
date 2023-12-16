import express from "express";
import checkAuth from "../middleware/auth_user.js";
import { login, register } from "../controller/auth.js";
import {
  addLawyer,
  getLawyers,
  fetchLawyer,
  altPoints,
} from "../controller/lawyer-controller.js";
import { addClient } from "../controller/client-controller.js";
import { addReview, getAllReviews } from "../controller/review-controller.js";
import { checkConnection } from "../controller/connection-controller.js";

import {
  updateLeaderboard,
  getLeaderboard,
} from "../controller/leaderboard-controller.js";
import { addDocWriter, fetchDocWriter, getDocWriters } from "../controller/document-writer-controller.js";
import { addNotary, fetchNotary, getNotaries } from "../controller/notary-controller.js";


import { uploadFile, getFile } from "../controller/file-controller.js";
import upload from "../utils/upload.js";

const Router = express.Router();

// Check Connnection
Router.get("/", checkConnection);

// Authenticate login
Router.post("/authenticate", login);

// Register
Router.post("/register", register);

// add lawyer LSP
Router.post("/add/lawyer", checkAuth, addLawyer);


//get all lawyers
Router.get("/get/lawyers", getLawyers);

//get details of a particular lawyer
Router.get("/get/lawyer/:id", fetchLawyer);

// add document-writer LSP
Router.post("/add/docwriter", checkAuth, addDocWriter);

//get all document writers
Router.get("/get/docwriters", getDocWriters);

//get details of a particular document writer
Router.get("/get/docwriter/:id", fetchDocWriter);

// add notary LSP
Router.post("/add/notary", checkAuth, addNotary);

//get all notaries
Router.get("/get/notaries", getNotaries);

//get details of a particular notary
Router.get("/get/notary/:id", fetchNotary);

//add client
Router.post("/add/client", checkAuth, addClient);

//post a review
Router.post("/add/review", checkAuth, addReview);

//get all reviews
Router.get("/get/reviews", checkAuth, getAllReviews);

// Post increase points
Router.post("/alt/points", altPoints);

//get updated leaderboard wrt descending order of points
Router.get("/ranks", updateLeaderboard);

//get the leaderboard rankings
Router.get("/leaderboard", getLeaderboard);





Router.post('/file/upload', upload.single('file'), uploadFile);
Router.get('/file/:filename', getFile);


export default Router;
