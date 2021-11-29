const LocalStrategy = require("passport-local").Strategy;
const pool = require("./db");
const bcrypt = require("bcrypt");

function initialize(passport) {
  const authenticateUser = (email, password, done) => {
    pool.query("SELECT * FROM users WHERE email=$1", [email], (err, result) => {
      if (err) {
        throw err;
      }
      console.log("ode", result.rows[0]);

      if (result.rows.length > 0) {
        const user = result.rows[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password is not correct" });
          }
        });
      } else {
        return done(null, false, { message: "Not found user" });
      }
    });
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => done(null, user.user_id));

  passport.deserializeUser((id, done) => {
    pool.query("SELECT * FROM users WHERE user_id=$1", [id], (err, result) => {
      if (err) {
        throw err;
      }
      return done(null, result.rows[0]);
    });
  });
}

module.exports = initialize;
