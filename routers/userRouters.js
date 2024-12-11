const express = require("express");
const Route = express.Router();
const userController = require("../controllers/userController");

const { profileUpload } = require('../config/multerConfig');
const auth = require("../middleware/Auth");
Route.post('/signin', userController.signin);
Route.post('/login', userController.login);
Route.post('/uploadProfilePic', auth, profileUpload.single('profilePicture'), userController.profilePicUpload);
Route.get('/getuserdetails',auth,userController.getUserDetails)
module.exports = Route;