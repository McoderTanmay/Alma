import express from "express";
import auth from "../middleware/Auth.js";
import {createOrGetChat, getAllChats, sendMessage, getChatMessages, markMessageAsRead} from "../controllers/chatController.js";

const Route = express.Router();

Route.post("/", auth, createOrGetChat);
Route.get("/", auth, getAllChats);
Route.post("/:chatId", auth, sendMessage);
Route.get("/:chatId", auth, getChatMessages);
Route.get("/read/:messageId", auth, markMessageAsRead);

export default Route;