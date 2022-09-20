import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

//Create a User
router.post("/signup", signup);

//User SignIn
router.post("/signin");
//Google Authentication

router.post("/google");
export default router;