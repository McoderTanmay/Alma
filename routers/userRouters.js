

import express from "express";
import {signin, login, profilePicUpload, getUserDetails,documentUpload} from "../controllers/userController.js";
import { profileUpload,alumniDocumentUpload } from "../config/multerConfig.js";
import auth from "../middleware/Auth.js";

const Router = express.Router();

Router.post('/signin', signin);
Router.post('/login', login);
Router.post('/uploadProfilePic', auth, profileUpload.single('profilePicture'), profilePicUpload);
Router.get('/getuserdetails', auth, getUserDetails);
Router.post("/uploaddocument",auth,alumniDocumentUpload.single('document'),documentUpload);

export default Router;