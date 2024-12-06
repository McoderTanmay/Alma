const express = require("express");
const Route = express.Router();
const auth = require("../middleware/Auth");
const chatController = require("../controllers/chatController");

Route.post("/", auth, chatController.createOrGet);
Route.get("/", auth, chatController.getAllChats);
Route.post("/:chatId", auth, chatController.sendMessage);
Route.get("/:chatId", auth, chatController.getChatMessages);
Route.get("/read/:messageId", auth, chatController.markAsRead);

module.exports = Route;