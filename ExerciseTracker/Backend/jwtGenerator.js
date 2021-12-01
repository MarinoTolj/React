const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id, username) {
  console.log(user_id, username);
  const payload = {
    user: {
      id: user_id,
      name: username,
    },
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
