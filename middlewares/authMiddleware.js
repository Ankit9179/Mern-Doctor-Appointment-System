const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    //get token
    const token = req.headers["authorization"].split(" ")[1]; ////////
    //verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({
          success: false,
          message: "auth faild",
        });
      } else {
        req.body.userId = decode.id; /////////
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "auth faild",
      success: true,
    });
  }
};
