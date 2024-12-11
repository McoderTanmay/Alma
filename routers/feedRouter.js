import express from "express";
import {createAvailability} from "../controllers/feedController.js";
import auth from "../middleware/Auth.js";

const router = express.Router();

router.post("/createavailability",auth,createAvailability);
export default router;