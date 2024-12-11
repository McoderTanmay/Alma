import express from "express";
import auth from "../middleware/Auth.js";
import * as postController from "../controllers/postController.js";
import { postUpload } from "../config/multerConfig.js";

const router = express.Router();

router.post('/createPost', auth, postUpload.array('postImages', 10), postController.createPost);
router.delete("/deletePost", auth, postController.deletePost);
router.get("/getPosts", auth, postController.getAllPost);
router.post("/like/:postId", auth, postController.likePost);
router.post("/comment/:postId", auth, postController.commentPost);
router.get("/getAllUserPosts", auth, postController.getAllUserPosts);

export default router;