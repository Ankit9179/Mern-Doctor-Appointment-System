const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/userCont");

//router object
const router = express.Router();

//register route || POST
router.post("/register", registerController);

//login route || POST
router.post("/login", loginController);

module.exports = router;
