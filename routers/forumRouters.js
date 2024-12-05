const express = require("express")
const router = express.Router()
const formController = require("../controllers/formController")


router.post("/create",formController.createForumThread);
router.get("/upvote/:id",formController.upvotePost);
module.exports = router