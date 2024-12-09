const express = require("express");
const Route = express.Router();
const auth = require("../middleware/Auth");
const postController = require("../controllers/postController");
const { postUpload } = require('../config/multerConfig');

Route.post('/createPost', auth, postUpload.array('postImages', 10), postController.createPost);
Route.delete("/deletePost", auth, postController.createPost);
Route.get("/getPosts", auth, postController.getAllPost);
Route.post("/like/:postId", auth, postController.likePost);
Route.post("/comment/:postId", auth, postController.commentPost);
Route.get("/getAllUserPosts",auth,postController.getAllUserPosts);
module.exports = Route;

