import express from "express";
import {createAvailability,profileMatching} from "../controllers/feedController.js";
import auth from "../middleware/Auth.js";

const router = express.Router();

router.post("/createavailability",auth,createAvailability);
router.get("/profilematching",auth,profileMatching);


export default router;