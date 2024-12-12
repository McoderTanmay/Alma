import express from "express"
import { queryAIController } from "../controllers/chatBotController.js"


const router = express.Router();
router.post("/",queryAIController);

export default router;