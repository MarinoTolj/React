const express = require("express");
const pool = require("../db");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../jwtGenerator");
const authorize = require("../authorize");

router.post("/registration", async (req, res) => {
  try {
    const { username, email, password, password2 } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (password != password2) {
      res.json({ msg: "Password mismatch" });
    } else {
      const newUser = await pool.query(
        "INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *;",
        [username, email, hashedPassword]
      );

      const jwtToken = jwtGenerator(
        newUser.rows[0].user_id,
        newUser.rows[0].username
      );
      res.json({
        jwtToken,
        id: newUser.rows[0].user_id,
        name: newUser.rows[0].username,
      });
    }
  } catch (error) {
    console.error("error:" + error.message);
  }
});

router.post("/login", async (req, res, next) => {
  console.log("In login");
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows[0]) {
      const isMatch = await bcrypt.compare(password, user.rows[0].password);

      if (isMatch) {
        const jwtToken = jwtGenerator(
          user.rows[0].user_id,
          user.rows[0].username
        );
        res.json({
          msg: "Success login",
          jwtToken,
          id: user.rows[0].user_id,
          name: user.rows[0].username,
        });
      } else {
        res.json({ msg: "Incorrect pass or email", jwtToken: null, id: false });
      }
    } else {
      res.json({ msg: "User not found", jwtToken: null, id: false });
    }
  } catch (error) {
    console.error("hello", error.message);
  }
});

router.post("/verify", authorize, (req, res) => {
  try {
    res.json({
      msg: "Authorized",
      id: req.user.id,
      status: 200,
      name: req.user.name,
    });
  } catch (error) {
    console.error(error.message);
    res.json({ msg: error.message, id: null, status: error.status });
  }
});

router.post("/updateuser", authorize, async (req, res) => {
  try {
    const { id } = req.body;
    await pool.query(
      "INSERT INTO users_exercises (exercise_id, user_id) VALUES($1, $2)",
      [id, req.user.id]
    );
    res.json({ msg: "Success", id: req.user.id });
  } catch (error) {
    console.error(error);
  }
});

router.post("/user/workoutExercises", async (req, res) => {
  try {
    const workoutExercises = await pool.query(
      `SELECT exercise.name, exercise.description, users_exercises.users_exercises_id FROM users_exercises 
      JOIN exercise ON exercise.exercise_id=users_exercises.exercise_id 
      JOIN users ON users_exercises.user_id=users.user_id 
      WHERE users_exercises.user_id=${req.body.id}`
    );

    res.json(workoutExercises.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.delete("/user/workoutExercises", async (req, res) => {
  try {
    const { id } = req.body;
    console.log("work", id);

    await pool.query(`DELETE FROM users_exercises 
    WHERE users_exercises.users_exercises_id=${id} `);
    res.json({ msg: "Success" });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
