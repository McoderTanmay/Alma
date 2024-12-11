import express from "express";
import {createForumThread, createReplyThread, upvotePost, upvoteReplyThread} from "../controllers/formController.js";
import auth from "../middleware/Auth.js";

const router = express.Router();

router.post("/create", auth, createForumThread);
router.get("/upvote/:id", auth, upvotePost);
router.post("/replythread/:id", auth, createReplyThread);
router.get("/upvotereplythread/:id", auth, upvoteReplyThread);

export default router;