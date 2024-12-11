
import express from "express";
import {updateAvailability} from "../controllers/feedbackController.js";
import auth from "../middleware/Auth.js";

const router = express.Router();

router.post("/createavailability",auth,updateAvailability);

export default router;