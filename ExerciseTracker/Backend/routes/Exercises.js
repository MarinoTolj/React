const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/createNewExerciseType", async (req, res) => {
  try {
    const exerciseType = req.body.type;

    await pool.query("INSERT INTO exercise_type (type) VALUES ($1);", [
      exerciseType,
    ]);
    res.json({ msg: "Success", user: req.user });
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const types = await pool.query("SELECT * FROM exercise;");

    res.json(types.rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/createNewExercise", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO exercise (name, description, exercise_type_id) VALUES ($1, $2, $3);",
      [req.body.title, req.body.description, req.body.typeId]
    );
    res.json({ msg: "success" });
  } catch (error) {
    console.error(error);
  }
});

router.get("/createNewExercise", async (req, res) => {
  try {
    const exerciseTypes = await pool.query("SELECT * FROM exercise_type");
    res.json(exerciseTypes.rows);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteExercise", async (req, res) => {
  try {
    const { exerciseId } = req.body;

    await pool.query(
      `DELETE FROM users_exercises WHERE users_exercises.exercise_id =${exerciseId}`
    );
    await pool.query(`DELETE FROM exercise WHERE exercise_id=${exerciseId}`);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
