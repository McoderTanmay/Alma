import express from "express"
import { queryAIController } from "../controllers/chatBotController.js"


const router = express.Router();
router.get("/",queryAIController);

export default router;