const express = require("express");
const {
  registerController,
  loginController,
  authController,
} = require("../controllers/userCont");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//register route || POST
router.post("/register", registerController);

//login route || POST
router.post("/login", loginController);

//Auth || post
router.post("/getUserData", authMiddleware, authController); //function with (req,res,next)

module.exports = router;
