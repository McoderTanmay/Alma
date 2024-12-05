const express = require("express");
const Route = express.Router();
const auth = require("../middleware/Auth");
const postController = require("../controllers/postController");

Route.post("/createPost", auth, postController.createPost);
Route.delete("/deletePost", auth, postController.createPost);
Route.get("/getPosts", auth, postController.getAllPost);
Route.post("/like/:postId", auth, postController.likePost);
Route.post("/comment/:postId", auth, postController.commentPost);

module.exports = Route;