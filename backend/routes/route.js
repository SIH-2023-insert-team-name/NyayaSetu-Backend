import express from "express";
import checkAuth from "../middleware/auth_user.js";
import { login, register } from "../controller/auth.js";
import {
  addLawyer,
  getLawyers,
  fetchLawyer,
  altPointsLawyer,
  getSpecLawyer
} from "../controller/lawyer-controller.js";
import { addClient } from "../controller/client-controller.js";
import { addReview, getAllReviews } from "../controller/review-controller.js";
import { checkConnection } from "../controller/connection-controller.js";

import {
  updateLeaderboard,
  getLeaderboard,
} from "../controller/leaderboard-controller.js";
import { addDocWriter, fetchDocWriter, getDocWriters,altPointsDocWriter } from "../controller/document-writer-controller.js";
import { addNotary, fetchNotary, getNotaries,altPointsNotary } from "../controller/notary-controller.js";

import { uploadFile, getFile } from "../controller/file-controller.js";
import upload from "../utils/upload.js";
import { acceptCase, addCase, fetchCase, getCases, rejectCase } from "../controller/case-controller.js";

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

// get list of lawyers with a particular specialization
Router.get("/get/lawyer/:spec", getSpecLawyer);

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

// Post increase points for lawyer
Router.post("/alt/lawyer/points", altPointsLawyer);

// Post increase points for notary
Router.post("/alt/notary/points", altPointsNotary);


// Post increase points for docwriter
Router.post("/alt/docwriter/points", altPointsDocWriter);


//get updated leaderboard wrt descending order of points
Router.get("/ranks", updateLeaderboard);

//get the leaderboard rankings
Router.get("/leaderboard", getLeaderboard);

//to add a new case (when client sends the request to lawyer)
Router.post("/addcase",checkAuth,addCase)

//to get all the cases 
Router.get("/getcases",getCases)

//to fetch the details of a particular case
Router.get("/get/case/:id",fetchCase)

//to accept the case
Router.post("/accept/:id",acceptCase)

//to reject the case
Router.post("/reject/:id",rejectCase)

//to close the case
Router.post("/close/:id",rejectCase)


//to upload a file and get the file
Router.post('/file/upload', upload.single('file'), uploadFile);
Router.get('/file/:filename', getFile);


export default Router;
