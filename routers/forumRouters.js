const express = require("express")
const router = express.Router()
const formController = require("../controllers/formController")
const auth = require('../middleware/Auth')

router.post("/create",auth,formController.createForumThread);
router.get("/upvote/:id",auth,formController.upvotePost);
router.post("/replythread/:id",auth,formController.createReplyThread);
router.get("/upvotereplythread/:id",auth,formController.upvoteReplyThread)

module.exports = router;