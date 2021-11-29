const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async function (req, res, next) {
  const token = req.header("jwt_token");

  if (!token) {
    return res.status(403).json({ msg: "auth denied", id: null, status: 403 });
  }

  try {
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;

    next();
  } catch (error) {
    console.error(error.message);
    res.status(403).json({ msg: "Token is not valid", id: null, status: 403 });
  }
};
