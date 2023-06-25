const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const saltRounds = 10; // Number of salt rounds
const jwt = require("jsonwebtoken");
//register callback func
const registerController = async (req, res) => {
  try {
    //exisiting user
    const exisitingUseer = await userModel.findOne({ email: req.body.email });
    if (exisitingUseer) {
      return res.status(200).send({
        success: false,
        message: "user already exisit",
      });
    }

    //password hash
    function hashPassword(password) {
      // Generate a salt and hash the password
      return bcrypt.hashSync(password, saltRounds);
    }
    const hashedPassword = hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "Register successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register controller ${error.message}`, // 500 internal server error
    });
  }
};

//login callback func
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "user not fount",
      });
    }
    const isMatch = await bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "invalid email and password",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({
      success: true,
      message: "login successfullu",
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `error in login${error.message} `,
    });
  }
};

//Auth callback func
const authController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "user note found auth",
      });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "auth error",
      error,
    });
  }
};
module.exports = { loginController, registerController, authController };
