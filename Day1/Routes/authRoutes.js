import express from "express";
import {registerController} from '../Controllers/authController.js'
import {loginController} from '../Controllers/authController.js'
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import { testController } from "../Controllers/authController.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
